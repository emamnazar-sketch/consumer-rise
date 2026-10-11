/* POST /api/referral — body {email}
   D1-native referral hub (no third-party dashboard needed).
   If the email is a subscriber, get-or-create their referral code and return:
     {ok:true, referral_link:"https://consumerrising.com/?ref=CODE", referrals_count}
   referrals_count = distinct referred emails credited to their code.
   If the email never subscribed:
     {ok:false, reason:"not-subscribed"}
   Other failures: {ok:false, reason:"invalid-email"|"rate"|"error"} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE_ORIGIN = "https://consumerrising.com";
const CODE_LEN = 8;
const CODE_ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789"; /* no 0/O, 1/I/l */

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

function makeCode() {
  const buf = new Uint8Array(CODE_LEN);
  crypto.getRandomValues(buf);
  let out = "";
  for (let i = 0; i < CODE_LEN; i++) out += CODE_ALPHABET[buf[i] % CODE_ALPHABET.length];
  return out;
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
    const sub = await env.DB.prepare(
      "SELECT email FROM subscribers WHERE email = ?"
    ).bind(email).first();
    if (!sub) return json({ ok: false, reason: "not-subscribed" });

    let row = await env.DB.prepare(
      "SELECT code FROM referral_codes WHERE email = ?"
    ).bind(email).first();
    let code = row && row.code;
    if (!code) {
      /* Generate a unique code (retry on the rare collision). */
      for (let attempt = 0; attempt < 10; attempt++) {
        const candidate = makeCode();
        const clash = await env.DB.prepare(
          "SELECT code FROM referral_codes WHERE code = ?"
        ).bind(candidate).first();
        if (!clash) {
          code = candidate;
          break;
        }
      }
      if (!code) return json({ ok: false, reason: "error" }, 500);
      await env.DB.prepare(
        "INSERT INTO referral_codes (code, email, created_at) VALUES (?, ?, ?)"
      ).bind(code, email, new Date().toISOString()).run();
    }

    const cnt = await env.DB.prepare(
      "SELECT COUNT(DISTINCT referred_email) AS n FROM referrals WHERE code = ?"
    ).bind(code).first();

    return json({
      ok: true,
      referral_link: SITE_ORIGIN + "/?ref=" + code,
      referrals_count: (cnt && cnt.n) || 0
    });
  } catch (e) {
    console.log("referral lookup error:", String((e && e.message) || e));
    return json({ ok: false, reason: "error" }, 500);
  }
}
