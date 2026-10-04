/* GET /api/admin/stats?key=…
   Protected by the ADMIN_PASSWORD env var (set in the Pages project settings).
   Returns totals + 30-day daily series + top signup sources.
   Subscriber emails are NEVER returned — counts only. */
function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json" }
  });
}

/* Constant-time-ish compare so wrong keys don't fail fast on length. */
function safeEqual(a, b) {
  a = String(a || "");
  b = String(b || "");
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function count(db, table) {
  const row = await db.prepare("SELECT COUNT(*) AS n FROM " + table).first();
  return row ? row.n : 0;
}

async function perDay(db, table) {
  const rows = await db.prepare(
    "SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS count " +
    "FROM " + table + " " +
    "WHERE created_at >= date('now', '-30 days') " +
    "GROUP BY day ORDER BY day"
  ).all();
  return (rows.results || []).map((r) => ({ day: r.day, count: r.count }));
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const key = url.searchParams.get("key") || "";
  const expected = env.ADMIN_PASSWORD || "";
  if (!expected || !safeEqual(key, expected)) {
    return json({ ok: false, reason: "forbidden" }, 403);
  }

  try {
    const topSources = await env.DB.prepare(
      "SELECT COALESCE(source, '(direct)') AS source, COUNT(*) AS count " +
      "FROM subscribers GROUP BY source ORDER BY count DESC LIMIT 10"
    ).all();

    return json({
      ok: true,
      totals: {
        subscribers: await count(env.DB, "subscribers"),
        messages: await count(env.DB, "contact_messages"),
        scans: await count(env.DB, "scans")
      },
      signupsByDay: await perDay(env.DB, "subscribers"),
      scansByDay: await perDay(env.DB, "scans"),
      topSources: (topSources.results || []).map((r) => ({ source: r.source, count: r.count }))
    });
  } catch (e) {
    return json({ ok: false, reason: "error" }, 500);
  }
}
