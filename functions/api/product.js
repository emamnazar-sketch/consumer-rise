/* GET /api/product?barcode=XXX&db=food|beauty
   Server-side barcode lookup with D1 caching. The browser never calls
   Open Food Facts / Open Beauty Facts directly.
   - ?barcode= digits only (8-14 chars: EAN-8/UPC-A/UPC-E/EAN-13/GTIN-14)
   - ?db=food   -> world.openfoodfacts.org
   - ?db=beauty -> world.openbeautyfacts.org
   Flow: check D1 product_cache -> on miss fetch upstream -> store -> return.
   Responses: {ok:true, cached:bool, product:{barcode,name,brands,categories,ingredients_text}}
              {ok:false, reason:"not_found"} (404) | {ok:false, reason} (400/502) */

const UPSTREAM = {
  food: "https://world.openfoodfacts.org/api/v2/product/",
  beauty: "https://world.openbeautyfacts.org/api/v2/product/"
};
const ATTRIBUTION = {
  food: "Open Food Facts",
  beauty: "Open Beauty Facts"
};
const UA = "ConsumerRising/1.0 (contact@consumerrising.com)";

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}

function cleanBarcode(raw) {
  var b = String(raw || "").replace(/\D/g, "").slice(0, 14);
  return /^[0-9]{8,14}$/.test(b) ? b : null;
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== "GET") return json({ ok: false, reason: "method" }, 405);

  let url;
  try { url = new URL(request.url); } catch (e) { return json({ ok: false, reason: "bad-url" }, 400); }
  const barcode = cleanBarcode(url.searchParams.get("barcode"));
  const db = url.searchParams.get("db") === "beauty" ? "beauty" : "food";
  if (!barcode) return json({ ok: false, reason: "bad-barcode" }, 400);
  if (!env.DB) return json({ ok: false, reason: "no-db" }, 500);

  /* Self-initialize: create the cache table on first run so no manual D1 work is needed. */
  try {
    await env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS product_cache (" +
      "barcode TEXT PRIMARY KEY, db TEXT NOT NULL, name TEXT, brands TEXT, " +
      "categories TEXT, ingredients_text TEXT, fetched_at INTEGER)"
    ).run();
    await env.DB.prepare(
      "CREATE INDEX IF NOT EXISTS idx_product_cache_db ON product_cache (db)"
    ).run();
  } catch (e) { /* table may already exist; continue */ }

  const key = db + ":" + barcode;

  /* 1. Cache first. */
  let cached = null;
  try {
    cached = await env.DB.prepare(
      "SELECT barcode, db, name, brands, categories, ingredients_text FROM product_cache WHERE barcode = ?"
    ).bind(key).first();
  } catch (e) {
    return json({ ok: false, reason: "db-error" }, 500);
  }
  if (cached) {
    return json({
      ok: true, cached: true, source: ATTRIBUTION[cached.db] || ATTRIBUTION[db],
      product: {
        barcode: barcode,
        name: cached.name || "", brands: cached.brands || "",
        categories: cached.categories || "", ingredients_text: cached.ingredients_text || ""
      }
    });
  }

  /* 2. Cache miss: fetch upstream. */
  let upstream;
  try {
    upstream = await fetch(UPSTREAM[db] + encodeURIComponent(barcode) + ".json", {
      headers: { "User-Agent": UA, "Accept": "application/json" }
    });
  } catch (e) {
    return json({ ok: false, reason: "upstream-unreachable" }, 502);
  }
  if (upstream.status === 404) return json({ ok: false, reason: "not_found" }, 404);
  if (!upstream.ok) return json({ ok: false, reason: "upstream-error" }, 502);

  let data = null;
  try { data = await upstream.json(); } catch (e) { return json({ ok: false, reason: "upstream-bad-json" }, 502); }
  const p = (data && data.status === 1 && data.product) ? data.product : null;
  if (!p) return json({ ok: false, reason: "not_found" }, 404);

  const name = String(p.product_name || p.product_name_en || "").slice(0, 200);
  const brands = String(p.brands || "").slice(0, 200);
  const categories = String(p.categories || "").slice(0, 300);
  const ingredients_text = String(p.ingredients_text || p.ingredients_text_en || "").slice(0, 4000);

  /* 3. Store in cache (best effort — a cache write failure shouldn't fail the lookup). */
  try {
    await env.DB.prepare(
      "INSERT OR REPLACE INTO product_cache (barcode, db, name, brands, categories, ingredients_text, fetched_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).bind(key, db, name, brands, categories, ingredients_text, Date.now()).run();
  } catch (e) { /* non-fatal */ }

  return json({
    ok: true, cached: false, source: ATTRIBUTION[db],
    product: { barcode: barcode, name: name, brands: brands, categories: categories, ingredients_text: ingredients_text }
  });
}
