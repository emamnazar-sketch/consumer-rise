/* POST /api/scan — body {email, result_summary?, matches?}
   Scans are unlimited and free forever. Every scan is recorded so we can see
   which ingredients get flagged most — that shapes what we research next.
   OCR runs on the reader's device; photos are never sent here.
   Responses: {ok:true} | {ok:false, reason} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const summary = String((body && body.result_summary) || "pending-analysis").slice(0, 500);
    const matches = Array.isArray(body && body.matches)
      ? body.matches.map(function (m) { return String(m).slice(0, 24); }).slice(0, 20).join(",")
      : "";
    const stored = matches ? (summary + " [" + matches + "]") : summary;

    await env.DB.prepare(
      "INSERT INTO scans (id, email, result_summary, created_at) VALUES (?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), email, stored.slice(0, 500), new Date().toISOString()).run();
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
