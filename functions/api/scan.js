/* POST /api/scan — body {email}
   Counts this email's scans in the last 24h. Free tier: 3/day.
   Responses: {ok:true, remaining} | {ok:false, reason:"limit", remaining:0}
   NOTE: no photo bytes are accepted or stored here — the real label-analysis
   backend is still unwired. This endpoint only runs the email gate + counter. */
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

  try {
    const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
    const row = await env.DB.prepare(
      "SELECT COUNT(*) AS n FROM scans WHERE email = ? AND created_at >= ?"
    ).bind(email, since).first();
    const used = row ? row.n : 0;

    if (used >= SCANS_PER_DAY) {
      return json({ ok: false, reason: "limit", remaining: 0 }, 429);
    }

    await env.DB.prepare(
      "INSERT INTO scans (id, email, result_summary, created_at) VALUES (?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), email, "pending-analysis", new Date().toISOString()).run();
    return json({ ok: true, remaining: SCANS_PER_DAY - used - 1 });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
