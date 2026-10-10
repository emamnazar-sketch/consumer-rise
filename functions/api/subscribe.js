/* POST /api/subscribe — body {email, source}
   Writes to D1 (subscribers table), then best-effort forwards to Beehiiv
   when BEEHIIV_API_KEY + BEEHIIV_PUBLICATION_ID env vars are configured.
   Beehiiv failures never fail the signup — D1 stays the source of truth.
   Responses: {ok:true} | {ok:true, already:true} | {ok:false, reason} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Best-effort: push one subscriber into the Beehiiv publication.
   Never throws — callers must not let a Beehiiv outage break signups. */
async function forwardToBeehiiv(env, email, source) {
  const apiKey = env.BEEHIIV_API_KEY;
  const pubId = env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !pubId) return; // not configured yet — D1 only
  try {
    const res = await fetch(
      "https://api.beehiiv.com/v2/publications/" + encodeURIComponent(pubId) + "/subscriptions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: false, // never re-subscribe someone who opted out
          send_welcome_email: true,
          utm_source: "consumerrising.com",
          utm_medium: "website",
          utm_campaign: source || undefined
        })
      }
    );
    if (!res.ok) console.log("beehiiv forward failed:", res.status, email);
  } catch (e) {
    console.log("beehiiv forward error:", String((e && e.message) || e));
  }
}

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
    if (existing) {
      // Already in D1 — still forward in case Beehiiv missed them earlier.
      await forwardToBeehiiv(env, email, source);
      return json({ ok: true, already: true });
    }

    await env.DB.prepare(
      "INSERT INTO subscribers (id, email, source, created_at) VALUES (?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), email, source || null, new Date().toISOString()).run();
    await forwardToBeehiiv(env, email, source);
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
