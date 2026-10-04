/* POST /api/contact — body {name, email, subject, message}
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
  const name = String((body && body.name) || "").trim().slice(0, 120);
  const email = String((body && body.email) || "").trim().toLowerCase();
  const subject = String((body && body.subject) || "").trim().slice(0, 160);
  const message = String((body && body.message) || "").trim().slice(0, 5000);

  if (!name || !EMAIL_RE.test(email) || email.length > 254 || !message) {
    return json({ ok: false, reason: "invalid" }, 400);
  }

  try {
    await env.DB.prepare(
      "INSERT INTO contact_messages (id, name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), name, email, subject || null, message, new Date().toISOString()).run();
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
