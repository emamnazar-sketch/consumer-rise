/* POST /api/check-subscription — body {email}
   Returns {ok:true, subscribed:true|false}. Lets a visitor on a new device
   prove they already subscribed, so the scanner gate can unlock them without
   asking them to join twice. D1 (subscribers table) is the source of truth.
   Responses: {ok:true, subscribed} | {ok:false, reason} */
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

  try {
    const row = await env.DB.prepare(
      "SELECT id FROM subscribers WHERE email = ?"
    ).bind(email).first();
    return json({ ok: true, subscribed: !!row });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
