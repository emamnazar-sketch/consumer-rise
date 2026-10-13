/* GET /api/alternatives?barcode=XXX&db=food
   "Better alternatives" engine (Phase 3). Food only in v1.
   - Scores the scanned product with our dossier weights.
   - If score < 80, finds same-category products from Open Food Facts,
     scores them, and returns the top 3 scoring HIGHER.
   - NEUTRAL: no purchase links, no affiliate, no "buy" language.
   - Each alternative carries partner:false / sponsored:false — reserved
     for future paying brand partners. Nothing sets them true yet.
   - Results cached per category in D1 (alternative_cache), self-initializing.
   Responses: {ok:true, alternatives:[{barcode,name,brands,score,whyBetter[],partner,sponsored}]}
              {ok:false, reason} (400/404/502) — empty alternatives: {ok:true, alternatives:[]} */

var DOSSIERS = [{"n":"High Fructose Corn Syrup","a":["HFCS","HFCS-55","Glucose-fructose syrup","Isoglucose"],"e":null,"w":10},{"n":"Red 40","a":["Allura Red AC","E129","FD&C Red No. 40"],"e":"E129","w":30},{"n":"Yellow 5","a":["Tartrazine","E102","FD&C Yellow No. 5"],"e":"E102","w":30},{"n":"Sodium Benzoate","a":["E211","Benzoic acid (related)"],"e":"E211","w":15},{"n":"Monosodium Glutamate (MSG)","a":["MSG","E621","Yeast extract (similar)","Hydrolyzed protein (similar)"],"e":"E621","w":15},{"n":"Partially Hydrogenated Oils","a":["PHOs","Partially hydrogenated soybean oil","Shortening (some)"],"e":null,"w":30},{"n":"Aspartame","a":["E951","NutraSweet","Equal"],"e":"E951","w":30},{"n":"Brominated Vegetable Oil (BVO)","a":["BVO","E443"],"e":"E443","w":30},{"n":"Potassium Bromate","a":["Bromated flour","E924"],"e":"E924","w":30},{"n":"BHA","a":["Butylated hydroxyanisole","E320"],"e":"E320","w":30},{"n":"Titanium Dioxide","a":["E171","CI 77891"],"e":"E171","w":30},{"n":"Carrageenan","a":["E407","Irish moss (source)"],"e":"E407","w":20},{"n":"Sodium Nitrite & Sodium Nitrate","a":["Sodium Nitrite","Sodium Nitrate","E250","E251","E249 (Potassium Nitrite)","E252 (Potassium Nitrate)","celery powder","celery juice powder","cultured celery juice"],"e":"E250","w":30},{"n":"Acesulfame Potassium (Ace-K)","a":["Acesulfame Potassium","Acesulfame-K","Ace-K","Sunett","E950"],"e":"E950","w":30},{"n":"Sucralose","a":["Sucralose","Splenda","E955"],"e":"E955","w":30},{"n":"Red 3 (Erythrosine)","a":["Red 3","Erythrosine","FD&C Red No. 3","Red No. 3","E127"],"e":"E127","w":30},{"n":"Yellow 6 (Sunset Yellow)","a":["Yellow 6","Sunset Yellow","Sunset Yellow FCF","FD&C Yellow No. 6","E110"],"e":"E110","w":30},{"n":"Blue 1 (Brilliant Blue)","a":["Blue 1","Brilliant Blue","Brilliant Blue FCF","FD&C Blue No. 1","E133"],"e":"E133","w":30},{"n":"BHT (Butylated Hydroxytoluene)","a":["BHT","butylated hydroxytoluene","butylhydroxytoluene","E321"],"e":"E321","w":20},{"n":"TBHQ (Tertiary Butylhydroquinone)","a":["TBHQ","tertiary butylhydroquinone","tert-butylhydroquinone","t-butylhydroquinone","E319"],"e":"E319","w":30},{"n":"Propyl Gallate","a":["propyl gallate","E310"],"e":"E310","w":30},{"n":"Parabens (Propylparaben & Methylparaben)","a":["propylparaben","propyl paraben","methylparaben","methyl paraben","propyl p-hydroxybenzoate (related)","E216","E218"],"e":"E216","w":20},{"n":"Caramel Color III & IV","a":["caramel color","caramel colour","caramel coloring","caramel colouring","ammonia caramel (related)","sulfite ammonia caramel (related)","E150c","E150d"],"e":"E150c","w":20},{"n":"Azodicarbonamide (ADA)","a":["azodicarbonamide","ADA","azobisformamide (related)","E927a","E927"],"e":"E927a","w":30},{"n":"Phosphates (incl. Phosphoric Acid)","a":["phosphoric acid","sodium phosphate","sodium acid pyrophosphate","trisodium phosphate","dicalcium phosphate","E338","E339","E450","E451"],"e":"E338","w":15},{"n":"Mono- and Diglycerides of Fatty Acids","a":["Mono- and diglycerides","monoglycerides","distilled monoglycerides","mono- & diglycerides of edible fats or oils","E471"],"e":"E471","w":20},{"n":"Polysorbate 80","a":["Polysorbate 80","polysorbate-80","tween 80","polyoxyethylene (20) sorbitan monooleate","E433"],"e":"E433","w":20},{"n":"Carboxymethylcellulose","a":["Carboxymethylcellulose","cellulose gum","sodium carboxymethylcellulose","E466"],"e":"E466","w":20},{"n":"Saccharin","a":["Saccharin","Sweet'N Low","sodium saccharin","E954"],"e":"E954","w":30},{"n":"Erythritol","a":["Erythritol","E968"],"e":"E968","w":15},{"n":"Xylitol","a":["Xylitol","birch sugar","E967"],"e":"E967","w":15},{"n":"Sulfites","a":["Sulfites","sulfur dioxide","sodium sulfite","sodium bisulfite","sodium metabisulfite","potassium bisulfite","potassium metabisulfite","E220","E223"],"e":"E220","w":15},{"n":"Blue 2","a":["Blue 2","FD&C Blue No. 2","indigotine","E132"],"e":"E132","w":20},{"n":"Sodium Aluminum Phosphate","a":["sodium aluminum phosphate","SALP","E541"],"e":"E541","w":20},{"n":"Interesterified Oils","a":["interesterified soybean oil","interesterified palm oil","interesterified oils"],"e":null,"w":20},{"n":"DATEM","a":["DATEM","E472e","diacetyl tartaric acid esters of mono- and diglycerides"],"e":"E472e","w":5},{"n":"Sodium Stearoyl Lactylate","a":["sodium stearoyl lactylate","SSL","E481","sodium stearoyl-2-lactylate"],"e":"E481","w":5},{"n":"Disodium Inosinate & Disodium Guanylate","a":["disodium inosinate","disodium guanylate","E631","E627","I+G"],"e":"E631","w":5},{"n":"Natural Flavors","a":["natural flavors","natural flavoring","natural flavouring"],"e":null,"w":15},{"n":"Artificial Flavors","a":["Artificial flavors","Artificial flavor","Artificial flavoring"],"e":null,"w":15},{"n":"Maltodextrin","a":["Maltodextrin"],"e":null,"w":5},{"n":"Sorbitol","a":["Sorbitol","E420","Sorbitol syrup"],"e":"E420","w":10},{"n":"Calcium Disodium EDTA","a":["Calcium disodium EDTA","Calcium disodium edetate","EDTA","E385"],"e":"E385","w":5},{"n":"Propylene Glycol","a":["Propylene glycol","Propane-1,2-diol","E1520"],"e":"E1520","w":15},{"n":"Carmine","a":["Carmine","Cochineal extract","Cochineal","Carminic acid","Natural Red 4","E120"],"e":"E120","w":15},{"n":"Diacetyl","a":["diacetyl","2,3-butanedione","artificial butter flavor","artificial butter flavoring"],"e":null,"w":20},{"n":"Calcium Propionate","a":["calcium propionate","E282","preservative 282"],"e":"E282","w":5},{"n":"Green 3","a":["Green 3","Fast Green FCF","FD&C Green No. 3","E143"],"e":"E143","w":5},{"n":"Allulose","a":["allulose","D-allulose","D-psicose","psicose"],"e":null,"w":10},{"n":"Dimethylpolysiloxane","a":["dimethylpolysiloxane","polydimethylsiloxane","PDMS","E900","silicone oil"],"e":"E900","w":5},{"n":"Salt (Sodium Chloride)","a":["Sodium chloride","Table salt"],"e":null,"w":10},{"n":"Sugar (Sucrose)","a":["Sucrose","Table sugar","Cane sugar"],"e":null,"w":10},{"n":"Caffeine","a":["1,3,7-Trimethylxanthine"],"e":null,"w":10},{"n":"Olestra (Olean)","a":["Olean","Sucrose polyester"],"e":null,"w":30},{"n":"Potassium Iodate","a":["KIO3"],"e":null,"w":30},{"n":"Transglutaminase (\"Meat Glue\")","a":["Meat glue","TG enzyme","Microbial transglutaminase","mTG"],"e":null,"w":20},{"n":"Monk Fruit Extract","a":["Monk fruit","Luo Han Guo","Mogrosides"],"e":null,"w":20},{"n":"Quinine","a":[],"e":null,"w":15},{"n":"Mycoprotein (Quorn)","a":["Quorn","Fusarium venenatum"],"e":null,"w":15},{"n":"Maltitol","a":["Maltitol syrup","E965"],"e":"E965","w":10},{"n":"Mannitol","a":["E421"],"e":"E421","w":10},{"n":"Neotame","a":["Newtame","E961"],"e":"E961","w":20},{"n":"Advantame","a":["E969","INS 969"],"e":"E969","w":20},{"n":"Brazzein","a":["Brazzein-53","Mellia brazzein","Oubli fruit protein"],"e":null,"w":20},{"n":"Gums (guar, xanthan, locust bean…)","a":["Guar gum","Xanthan gum","Locust bean gum","Carob bean gum","Gellan gum","Gum arabic","Acacia gum","E410","E412","E414","E415"],"e":null,"w":15},{"n":"Yeast extract (autolyzed)","a":["Autolyzed yeast extract","Bakers yeast extract","Yeast extract"],"e":null,"w":15},{"n":"Liquid smoke","a":["Pyroligneous acid","Smoke flavoring","Smoke flavouring","Natural smoke flavor"],"e":null,"w":20},{"n":"Natamycin","a":["Pimaricin","E235","INS 235"],"e":"E235","w":5},{"n":"Nisin","a":["Nisin A","Nisaplin","E234","INS 234"],"e":"E234","w":5},{"n":"SAIB (sucrose acetate isobutyrate)","a":["Sucrose acetate isobutyrate","SAIB"],"e":null,"w":5},{"n":"Annatto","a":["Annatto","Annatto extract","Bixin","Norbixin","E160b"],"e":"E160b","w":15},{"n":"Beta-carotene (as color)","a":["Beta-carotene","Beta carotene","E160a","Carotenes"],"e":"E160a","w":5},{"n":"Turmeric (as color)","a":["Turmeric","Turmeric oleoresin","Curcumin","E100"],"e":"E100","w":5},{"n":"Beet juice / beet red","a":["Beet juice","Beet powder","Beetroot red","Betanin","E162","Vegetable juice"],"e":"E162","w":5},{"n":"Spirulina extract","a":["Spirulina extract","Phycocyanin","Blue spirulina"],"e":null,"w":5},{"n":"HVP (hydrolyzed vegetable protein)","a":["Hydrolyzed vegetable protein","HVP","Hydrolyzed soy protein","Hydrolyzed corn protein","Hydrolyzed wheat protein"],"e":null,"w":15},{"n":"PGPR","a":["PGPR","Polyglycerol polyricinoleate","E476"],"e":"E476","w":5},{"n":"Sorbitan monostearate","a":["Sorbitan monostearate","E491","Span 60"],"e":"E491","w":5},{"n":"Celery powder / celery juice","a":["Celery juice","Celery juice powder","Celery extract","Celery powder (as curing agent)"],"e":null,"w":15},{"n":"Buffered vinegar","a":["Vinegar powder","Buffered vinegar powder","Dry vinegar"],"e":null,"w":5},{"n":"Cultured dextrose","a":["Cultured sugar","Cultured corn sugar","Fermented dextrose"],"e":null,"w":5},{"n":"Rosemary extract","a":["Rosemary oleoresin","E392","Extract of rosemary"],"e":"E392","w":5},{"n":"Mixed tocopherols","a":["Tocopherols","Vitamin E (as preservative)","Tocopherol concentrate"],"e":null,"w":5},{"n":"Polydextrose","a":["E1200","Litesse"],"e":null,"w":10},{"n":"Tagatose","a":["D-tagatose","Pseudofructose"],"e":null,"w":10},{"n":"Trehalose","a":["Mycose","Tremalose"],"e":null,"w":10},{"n":"Sodium erythorbate","a":["Erythorbic acid","Isoascorbic acid","Sodium isoascorbate"],"e":null,"w":5},{"n":"Thaumatin","a":["Thaumatin II","Katemfe fruit extract","E957"],"e":"E957","w":20},{"n":"Stevia (steviol glycosides)","a":["Steviol glycosides","Reb A","Rebaudioside A","Stevioside","E960"],"e":"E960","w":5},{"n":"Citric acid","a":["E330","INS 330"],"e":"E330","w":5},{"n":"Malic acid","a":["E296","INS 296","DL-malic acid"],"e":"E296","w":5},{"n":"Lactic acid","a":["E270","INS 270"],"e":"E270","w":5},{"n":"Fumaric acid","a":["E297","INS 297"],"e":"E297","w":5},{"n":"Tartaric acid","a":["E334","INS 334","L(+)-tartaric acid"],"e":"E334","w":5},{"n":"Acetic acid","a":["E260","INS 260","Ethanoic acid"],"e":"E260","w":5},{"n":"Dextrose","a":["D-glucose","Corn sugar","Glucose"],"e":null,"w":10},{"n":"Invert sugar","a":["Inverted sugar","Trimoline"],"e":null,"w":10},{"n":"Isomalt","a":["E953","INS 953","Palatinit"],"e":"E953","w":10},{"n":"Lactitol","a":["E966","INS 966"],"e":"E966","w":10}];

var UA = "ConsumerRising/1.0 (contact@consumerrising.com)";
var CACHE_TTL = 30 * 24 * 60 * 60 * 1000; /* 30 days */
var PAGE_SIZE = 25;

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

/* ---- Scoring: port of the site's client-side matcher (site.js findTerm) ---- */
function normText(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function escRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function cleanTerm(t) {
  return normText(String(t).replace(/\([^)]*\)/g, " ")).trim();
}
function findTerm(text, nospace, terms) {
  var found = null;
  for (var i = 0; i < terms.length && !found; i++) {
    var t = cleanTerm(terms[i]);
    if (!t) continue;
    var tFlat = t.replace(/\s+/g, "");
    if (/^e\d+$/.test(tFlat)) {
      if (nospace.indexOf(tFlat) !== -1) found = terms[i];
    } else if (t.length <= 4) {
      if (new RegExp("(^|\\s)" + escRe(t) + "(\\s|$)").test(text)) found = terms[i];
    } else if (text.indexOf(t) !== -1) {
      found = terms[i];
    } else {
      var words = t.split(" ").filter(function (w) { return w.length > 1; });
      var all = words.length > 1 && words.every(function (w) {
        return new RegExp("(^|\\s)" + escRe(w) + "(\\s|$)").test(text);
      });
      if (all) found = terms[i];
    }
  }
  return found;
}
function scoreIngredients(ingredientsText) {
  var text = normText(ingredientsText);
  var nospace = text.replace(/\s+/g, "");
  var flagged = [];
  var w = 0;
  for (var i = 0; i < DOSSIERS.length; i++) {
    var d = DOSSIERS[i];
    var terms = [d.n].concat(d.a || []);
    if (d.e) terms.push(d.e);
    if (findTerm(text, nospace, terms)) { flagged.push(d.n); w += d.w; }
  }
  return { score: Math.max(5, 100 - w), flagged: flagged };
}


/* Heuristic: skip candidates we can't reliably score (non-English labels).
   Requires >=2 common English food words in longer ingredient lists. */
var EN_WORDS = ["water","sugar","salt","milk","wheat","soy","egg","oil","flavor","flavours","flavors","color","colour","acid","contains","ingredients","natural","organic","vitamin","calcium","sodium","potassium"];
function looksEnglish(ing) {
  var s = String(ing || "");
  if (s.length <= 60) return true;
  var words = normText(s).split(" ");
  var hits = 0;
  for (var i = 0; i < words.length; i++) { if (EN_WORDS.indexOf(words[i]) !== -1) hits++; }
  return hits >= 2;
}

/* Aggressive product-name normalization for dedup (strips sizes/packaging). */
function normName(s) {
  s = String(s || "").toLowerCase();
  s = s.replace(/\b\d+[\.,]?\d*\s*(ml|l|cl|oz|g|kg)\b/g, "");
  s = s.replace(/\b(pet|can|bottle|pack|lot)\b/g, "");
  s = s.replace(/\bx\d+\b/g, "");
  return s.replace(/[^a-z0-9]/g, "");
}

async function fetchWithTimeout(url, ms) {
  var ctrl = new AbortController();
  var t = setTimeout(function () { ctrl.abort(); }, ms);
  try {
    var r = await fetch(url, { headers: { "User-Agent": UA, "Accept": "application/json" }, signal: ctrl.signal });
    return r;
  } catch (e) { return null; } finally { clearTimeout(t); }
}
function sleep(ms) { return new Promise(function (res) { setTimeout(res, ms); }); }
/* OFF (both search + product endpoints) throws intermittent 503s — retry. */
async function fetchJsonRetry(url, attempts) {
  for (var i = 0; i < attempts; i++) {
    var r = await fetchWithTimeout(url, 15000);
    if (r && r.ok) {
      try { return await r.json(); } catch (e) { /* fall through to retry */ }
    }
    if (i < attempts - 1) await sleep(700);
  }
  return null;
}
function categorySlug(name) {
  return "en:" + String(name || "").toLowerCase().replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function onRequest(context) {
  var request = context.request, env = context.env;
  if (request.method !== "GET") return json({ ok: false, reason: "method" }, 405);
  var url;
  try { url = new URL(request.url); } catch (e) { return json({ ok: false, reason: "bad-url" }, 400); }
  var barcode = cleanBarcode(url.searchParams.get("barcode"));
  var db = url.searchParams.get("db") === "beauty" ? "beauty" : "food";
  if (!barcode) return json({ ok: false, reason: "bad-barcode" }, 400);
  if (db !== "food") return json({ ok: true, alternatives: [] }); /* v1: food only */
  if (!env.DB) return json({ ok: false, reason: "no-db" }, 500);

  /* Self-initialize tables. */
  try {
    await env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS alternative_cache (" +
      "category TEXT PRIMARY KEY, alternatives_json TEXT, fetched_at INTEGER)"
    ).run();
  } catch (e) { /* continue */ }

  var key = "food:" + barcode;

  /* 1. Scanned product from cache (populated by /api/product). */
  var scanned = null;
  try {
    scanned = await env.DB.prepare(
      "SELECT name, brands, categories, ingredients_text FROM product_cache WHERE barcode = ?"
    ).bind(key).first();
  } catch (e) { return json({ ok: false, reason: "db-error" }, 500); }
  if (!scanned) {
    /* Not looked up before: fetch it ourselves (same upstream + cache row
       format as /api/product) instead of giving up. */
    var pdata = await fetchJsonRetry(
      "https://world.openfoodfacts.org/api/v2/product/" + encodeURIComponent(barcode) + ".json", 2);
    var pp = (pdata && pdata.status === 1 && pdata.product) ? pdata.product : null;
    if (!pp) return json({ ok: false, reason: "unknown-product" }, 404);
    scanned = {
      name: String(pp.product_name || pp.product_name_en || "").slice(0, 200),
      brands: String(pp.brands || "").slice(0, 200),
      categories: String(pp.categories || "").slice(0, 300),
      ingredients_text: String(pp.ingredients_text || pp.ingredients_text_en || "").slice(0, 4000)
    };
    try {
      await env.DB.prepare(
        "INSERT OR REPLACE INTO product_cache (barcode, db, name, brands, categories, ingredients_text, fetched_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
      ).bind(key, "food", scanned.name, scanned.brands, scanned.categories, scanned.ingredients_text, Date.now()).run();
    } catch (e) { /* non-fatal */ }
  }

  var scannedIng = scanned.ingredients_text || "";
  if (scannedIng.trim().length < 20) return json({ ok: true, alternatives: [], note: "no-ingredients" });
  var scannedRes = scoreIngredients(scannedIng);
  if (scannedRes.score >= 80) return json({ ok: true, alternatives: [], note: "scores-well", scannedScore: scannedRes.score }); /* already good */

  /* 2. Category = most specific (first listed). */
  var cats = String(scanned.categories || "").split(",").map(function (c) { return c.trim(); }).filter(Boolean);
  if (!cats.length) return json({ ok: true, alternatives: [], note: "no-category" });
  var category = cats[0];

  /* 3. Category cache. */
  var cachedList = null;
  try {
    var row = await env.DB.prepare(
      "SELECT alternatives_json, fetched_at FROM alternative_cache WHERE category = ?"
    ).bind(category).first();
    if (row && row.alternatives_json && (Date.now() - row.fetched_at) < CACHE_TTL) {
      var parsed = JSON.parse(row.alternatives_json);
      if (Array.isArray(parsed) && parsed.length) cachedList = parsed;
    }
  } catch (e) { /* treat as miss */ }

  /* 4. Cache miss: search Open Food Facts (v2 API — the legacy cgi/search.pl
        503s constantly). US-market products first; widen if too few score. */
  if (!cachedList) {
    var slug = categorySlug(category);
    var fields = "code,product_name,brands,ingredients_text";
    async function searchCategory(withUsFilter) {
      var u = "https://world.openfoodfacts.org/api/v2/search?categories_tags=" + encodeURIComponent(slug) +
        (withUsFilter ? "&countries_tags=en:united-states" : "") +
        "&page_size=50&fields=" + fields;
      var d = await fetchJsonRetry(u, 3);
      if (!d || !Array.isArray(d.products)) return null;
      var seen = {};
      var scored = [];
      for (var i = 0; i < d.products.length; i++) {
        var p = d.products[i];
        var ing = String(p.ingredients_text || "").trim();
        if (ing.length < 20) continue;
        if (!looksEnglish(ing)) continue;
        var code = String(p.code || "").replace(/\D/g, "");
        if (!code) continue;
        var dk = normName(p.product_name) + "|" + String(p.brands || "").toLowerCase().trim();
        if (seen[dk]) continue;
        seen[dk] = 1;
        var r = scoreIngredients(ing);
        scored.push({
          barcode: code,
          name: String(p.product_name || "").slice(0, 120),
          brands: String(p.brands || "").slice(0, 120),
          score: r.score,
          flagged: r.flagged
        });
      }
      scored.sort(function (a, b) { return b.score - a.score; });
      return scored;
    }
    var scoredList = await searchCategory(true);
    if (scoredList !== null && scoredList.length < 3) {
      var wider = await searchCategory(false);
      if (wider !== null && wider.length > scoredList.length) scoredList = wider;
    }
    if (scoredList === null) {
      return json({ ok: true, alternatives: [], note: "unavailable", scannedScore: scannedRes.score, category: category });
    }
    cachedList = scoredList.slice(0, 15);
    if (cachedList.length) {
      try {
        await env.DB.prepare(
          "INSERT OR REPLACE INTO alternative_cache (category, alternatives_json, fetched_at) VALUES (?, ?, ?)"
        ).bind(category, JSON.stringify(cachedList), Date.now()).run();
      } catch (e) { /* non-fatal */ }
    }
  }

  /* 5. Top 3 scoring higher than the scanned product (exclude itself). */
  var scannedFlagged = {};
  scannedRes.flagged.forEach(function (n) { scannedFlagged[n] = 1; });
  var out = [];
  for (var j = 0; j < cachedList.length && out.length < 3; j++) {
    var c = cachedList[j];
    if (c.barcode === barcode) continue;
    if (!(c.score > scannedRes.score)) continue;
    var whyBetter = [];
    for (var k = 0; k < scannedRes.flagged.length && whyBetter.length < 3; k++) {
      var fn = scannedRes.flagged[k];
      if (!c.flagged || c.flagged.indexOf(fn) === -1) whyBetter.push(fn);
    }
    out.push({
      barcode: c.barcode,
      name: c.name, brands: c.brands, score: c.score,
      whyBetter: whyBetter,
      partner: false, sponsored: false
    });
  }
  return json({ ok: true, alternatives: out, note: out.length ? "found" : "none-found", scannedScore: scannedRes.score, category: category });
}
