/* POST /api/request-check — body {product, email}
   A reader asks Consumer Rising to check a specific product (the box on the
   scanner page). The request is stored in D1's contact_messages table — the
   same table the contact form uses — with name/subject "Product check
   request", so requests sit alongside other reader mail and the admin stats
   endpoint counts them separately.
   The email also joins the subscribers table (same dedupe as
   /api/subscribe, source "/scanner#product-request"), because the finished
   check is mailed back to the people who asked for it.
   Responses: {ok:true} | {ok:false, reason} */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Best-effort: push one subscriber into the Beehiiv publication.
   Same helper as /api/subscribe — never throws, never fails the request. */
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
  const product = String((body && body.product) || "").trim().slice(0, 160);
  const email = String((body && body.email) || "").trim().toLowerCase();
  if (!product || !EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, reason: "invalid" }, 400);
  }

  try {
    await env.DB.prepare(
      "INSERT INTO contact_messages (id, name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(
      crypto.randomUUID(),
      "Product check request",
      email,
      "Product check request",
      "Please check this product: " + product,
      new Date().toISOString()
    ).run();

    /* Join the list so the finished check can be mailed back. Best-effort:
       a list hiccup never loses the request itself, which is already saved. */
    try {
      const existing = await env.DB.prepare(
        "SELECT id FROM subscribers WHERE email = ?"
      ).bind(email).first();
      if (!existing) {
        await env.DB.prepare(
          "INSERT INTO subscribers (id, email, source, created_at) VALUES (?, ?, ?, ?)"
        ).bind(crypto.randomUUID(), email, "/scanner#product-request", new Date().toISOString()).run();
      }
      await forwardToBeehiiv(env, email, "/scanner#product-request");
    } catch (e) {
      console.log("request-check subscribe failed:", String((e && e.message) || e));
    }

    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
