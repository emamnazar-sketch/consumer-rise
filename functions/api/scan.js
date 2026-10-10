/* POST /api/scan — body {email, check_only?, result_summary?, matches?}
   Free tier: 3 scans/day per email. Free forever — the limit is abuse
   protection, not a paywall.
   - {email, check_only:true} → limit check only, no row written.
   - {email, result_summary, matches} → limit check + writes the real result.
   OCR runs on the reader's device; photos are never sent here.
   Responses: {ok:true, remaining} | {ok:false, reason:"limit", remaining:0} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SCANS_PER_DAY = 3;

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== "POST") return json({ ok: false, reason: "method" }, 405);

  let body = null;
  try {
    body = await request.json();
  } catch (e) {
    return json({ ok: false, reason: "invalid" }, 400);
  }
  const email = String((body && body.email) || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, reason: "invalid-email" }, 400);
  }
  const checkOnly = !!(body && body.check_only);

  try {
    const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
    const row = await env.DB.prepare(
      "SELECT COUNT(*) AS n FROM scans WHERE email = ? AND created_at >= ?"
    ).bind(email, since).first();
    const used = row ? row.n : 0;

    if (used >= SCANS_PER_DAY) {
      return json({ ok: false, reason: "limit", remaining: 0 }, 429);
    }
    if (checkOnly) {
      return json({ ok: true, remaining: SCANS_PER_DAY - used });
    }

    const summary = String((body && body.result_summary) || "pending-analysis").slice(0, 500);
    const matches = Array.isArray(body && body.matches)
      ? body.matches.map(function (m) { return String(m).slice(0, 24); }).slice(0, 20).join(",")
      : "";
    const stored = matches ? (summary + " [" + matches + "]") : summary;

    await env.DB.prepare(
      "INSERT INTO scans (id, email, result_summary, created_at) VALUES (?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), email, stored.slice(0, 500), new Date().toISOString()).run();
    return json({ ok: true, remaining: SCANS_PER_DAY - used - 1 });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
