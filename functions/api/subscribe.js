/* POST /api/subscribe — body {email, source}
   Responses: {ok:true} | {ok:true, already:true} | {ok:false, reason} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Best-effort rate limit: max 10 requests/min per IP (per isolate). */
const hits = new Map();
function rateOk(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= 10;
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== "POST") return json({ ok: false, reason: "method" }, 405);

  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  if (!rateOk(ip)) return json({ ok: false, reason: "rate" }, 429);

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
  const source = String((body && body.source) || "").slice(0, 120);

  try {
    const existing = await env.DB.prepare(
      "SELECT id FROM subscribers WHERE email = ?"
    ).bind(email).first();
    if (existing) return json({ ok: true, already: true });

    await env.DB.prepare(
      "INSERT INTO subscribers (id, email, source, created_at) VALUES (?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), email, source || null, new Date().toISOString()).run();
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
