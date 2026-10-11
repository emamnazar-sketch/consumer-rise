/* Consumer Rising — shared site JS: nav, newsletter forms, contact, scanner gate, misc. */
(function () {
  "use strict";
  var CFG = window.CR_CONFIG || {};
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  function postJSON(url, data) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) {
      return r.json().catch(function () { return { ok: false, reason: "network" }; });
    });
  }

  function okHTML(msg) {
    return '<span class="big">You are in.</span>' + msg;
  }

  function showFormError(form, msg) {
    clearFormError(form);
    var p = document.createElement("p");
    p.className = "err";
    p.setAttribute("role", "alert");
    p.style.cssText = "color:#b3261e;font-weight:700;margin-top:10px";
    p.textContent = msg;
    form.appendChild(p);
  }
  function clearFormError(form) {
    var old = form.querySelector(".err");
    if (old) old.remove();
  }

  /* ---- unified subscription: one signup counts everywhere.
     Newsletter, scanner gate, and quiz all read/write this, so nobody
     gets asked for their email twice on the same device. ---- */
  function getSubscribedEmail() {
    try {
      var e = localStorage.getItem("cr_subscribed_email");
      if (e) return e;
      e = localStorage.getItem("cr_scanner_email"); /* legacy */
      if (e) return e;
      var list = JSON.parse(localStorage.getItem("cr_newsletter") || "[]");
      if (list.length) return list[0];
    } catch (err) {}
    return "";
  }
  function setSubscribedEmail(email) {
    email = (email || "").trim().toLowerCase();
    if (!email) return;
    try {
      localStorage.setItem("cr_subscribed_email", email);
      localStorage.setItem("cr_scanner_email", email); /* legacy readers */
      var list = JSON.parse(localStorage.getItem("cr_newsletter") || "[]");
      if (list.indexOf(email) === -1) list.push(email);
      localStorage.setItem("cr_newsletter", JSON.stringify(list));
    } catch (err) {}
  }
  window.crGetSubscribedEmail = getSubscribedEmail;
  window.crSetSubscribedEmail = setSubscribedEmail;

  /* ---- referral touch: ?ref=CODE saved on first visit, credited on signup.
     First touch wins — a later link never overwrites the original referrer. */
  function getReferralTouch() {
    try { return localStorage.getItem("cr_ref") || ""; } catch (err) { return ""; }
  }
  try {
    var __refm = /[?&]ref=([A-Za-z0-9]{4,16})/.exec(location.search || "");
    if (__refm && !localStorage.getItem("cr_ref")) {
      localStorage.setItem("cr_ref", __refm[1].toLowerCase());
    }
  } catch (err) {}
  function withRef(obj) {
    var r = getReferralTouch();
    if (r) obj.ref = r;
    return obj;
  }

  /* ---- newsletter forms (shared): home, quiz, footer ---- */
  document.querySelectorAll("form.newsletter-form").forEach(function (form) {
    /* Already subscribed anywhere? Don't ask again — say so quietly. */
    if (getSubscribedEmail()) {
      var note = document.createElement("div");
      note.className = "form-ok";
      note.setAttribute("role", "status");
      note.innerHTML = okHTML("You are on the list — new findings land in your inbox.");
      form.replaceWith(note);
      return;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearFormError(form);
      var input = form.querySelector('input[type="email"]');
      var email = (input.value || "").trim();
      if (!EMAIL_RE.test(email)) {
        input.focus();
        input.setAttribute("aria-invalid", "true");
        showFormError(form, "Please enter a valid email address.");
        return;
      }
      var done = function () {
        setSubscribedEmail(email);
        var box = document.createElement("div");
        box.className = "form-ok";
        box.setAttribute("role", "status");
        box.innerHTML = okHTML(
          "Watch your inbox. First finding lands this week."
        );
        form.replaceWith(box);
      };
      /* Fallback: if the API is unreachable, keep the signup in this browser
         so nobody who typed their email is silently lost. */
      var fallback = function () {
        try {
          var list = JSON.parse(localStorage.getItem("cr_newsletter") || "[]");
          if (list.indexOf(email) === -1) list.push(email);
          localStorage.setItem("cr_newsletter", JSON.stringify(list));
        } catch (err) { /* storage unavailable — still show success */ }
        done();
      };
      if (CFG.NEWSLETTER_ENDPOINT) {
        postJSON(CFG.NEWSLETTER_ENDPOINT, withRef({ email: email, source: location.pathname }))
          .then(function (res) {
            if (res && res.ok) { done(); }
            else if (res && res.reason === "invalid-email") {
              showFormError(form, "Please enter a valid email address.");
            }
            else { fallback(); }
          })
          .catch(fallback);
      } else {
        fallback();
      }
    });
  });

  /* ---- contact form ---- */
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", function (e) {
      e.preventDefault();
      clearFormError(contact);
      var data = {};
      ["name", "email", "subject", "message"].forEach(function (n) {
        var f = contact.querySelector('[name="' + n + '"]');
        data[n] = f ? f.value.trim() : "";
      });
      if (!data.name || !EMAIL_RE.test(data.email) || !data.message) {
        showFormError(contact, "Please fill in your name, a valid email, and your message.");
        return;
      }
      var done = function () {
        var box = document.createElement("div");
        box.className = "form-ok";
        box.setAttribute("role", "status");
        box.innerHTML = okHTML("Message received. We read everything and reply within a few days.");
        contact.replaceWith(box);
      };
      if (CFG.CONTACT_ENDPOINT) {
        postJSON(CFG.CONTACT_ENDPOINT, data)
          .then(function (res) {
            if (res && res.ok) { done(); }
            else {
              showFormError(contact,
                "Something went wrong sending your message. Please email us directly at " +
                (CFG.CONTACT_EMAIL || "our contact address") + " instead.");
            }
          })
          .catch(function () {
            showFormError(contact,
              "Could not reach our server. Please email us directly at " +
              (CFG.CONTACT_EMAIL || "our contact address") + " instead.");
          });
      } else { done(); }
    });
  }

  /* ---- scanner: email gate -> upload flow ---- */
  var gate = document.getElementById("scan-gate");
  var tool = document.getElementById("scan-tool");

  function getGateEmail() {
    return getSubscribedEmail();
  }
  function freeScanDone() {
    try { return localStorage.getItem("cr_free_scan_done") === "1"; }
    catch (err) { return false; }
  }
  /* First scan is free: tool shows immediately. After it completes, the gate
     appears to unlock unlimited scans. Returns "tool" or "gate". */
  function scannerViewState() {
    if (getGateEmail()) return "tool";
    if (freeScanDone()) return "gate";
    return "tool";
  }
  function unlockScanner(email) {
    setSubscribedEmail(email);
    if (gate) gate.hidden = true;
    if (tool) {
      tool.hidden = false;
      tool.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  function setPostScanGateCopy() {
    if (!gate) return;
    var h2 = gate.querySelector("h2");
    if (h2) h2.textContent = "Want unlimited scans?";
    var ps = gate.querySelectorAll("p");
    if (ps && ps.length) ps[0].textContent = "Your first scan is done. One email unlocks unlimited scans — free forever.";
  }
  function showPostScanGate() {
    if (!gate || !result) return;
    setPostScanGateCopy();
    result.parentNode.insertBefore(gate, result.nextSibling);
    gate.hidden = false;
  }

  if (gate && tool) {
    var gateForm = gate.querySelector("form");
    var gateMode = "subscribe"; /* or "lookup" — already subscribed elsewhere */
    var gateH2 = gate.querySelector("h2");
    var gateP = gate.querySelector("p");
    var gateBtn = gateForm.querySelector('button[type="submit"]');
    function renderGateMode() {
      if (gateMode === "lookup") {
        if (gateH2) gateH2.textContent = "Welcome back";
        if (gateP) gateP.textContent = "Enter the email you subscribed with and we will unlock the scanner on this device too.";
        if (gateBtn) gateBtn.innerHTML = "Unlock my scanner";
        if (gateToggle) gateToggle.innerHTML = "&#8592; Join free instead";
      } else if (!freeScanDone()) {
        if (gateH2) gateH2.textContent = "Unlock the scanner";
        if (gateP) gateP.textContent = "Join the free Consumer Rising community to scan as many food labels as you like.";
        if (gateBtn) gateBtn.innerHTML = "Join free &amp; scan now &rarr;";
        if (gateToggle) gateToggle.innerHTML = "Already subscribed on another device? Unlock with your email &rarr;";
      } else {
        setPostScanGateCopy();
        if (gateBtn) gateBtn.innerHTML = "Join free &amp; scan now &rarr;";
        if (gateToggle) gateToggle.innerHTML = "Already subscribed on another device? Unlock with your email &rarr;";
      }
    }
    var gateToggle = document.createElement("button");
    gateToggle.type = "button";
    gateToggle.style.cssText = "background:none;border:none;padding:0;margin:14px 0 0;font:inherit;color:var(--red,#c0392b);font-weight:700;cursor:pointer;text-decoration:underline;text-underline-offset:3px";
    gateToggle.addEventListener("click", function () {
      gateMode = gateMode === "lookup" ? "subscribe" : "lookup";
      clearFormError(gateForm);
      renderGateMode();
    });
    gateForm.insertAdjacentElement("afterend", gateToggle);
    gateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      clearFormError(gateForm);
      var input = gateForm.querySelector('input[type="email"]');
      var email = (input.value || "").trim();
      if (!EMAIL_RE.test(email)) {
        input.focus();
        showFormError(gateForm, "Please enter a valid email address.");
        return;
      }
      if (gateMode === "lookup") {
        /* Cross-device unlock: check D1 for this email. */
        gateBtn.disabled = true;
        postJSON("/api/check-subscription", { email: email })
          .then(function (res) {
            gateBtn.disabled = false;
            if (res && res.ok && res.subscribed) {
              unlockScanner(email);
            } else if (res && res.ok) {
              showFormError(gateForm, "We couldn't find that email. Check the spelling — or join free, it takes ten seconds.");
            } else {
              showFormError(gateForm, "Something went wrong checking. Please try again.");
            }
          })
          .catch(function () {
            gateBtn.disabled = false;
            showFormError(gateForm, "Something went wrong checking. Please try again.");
          });
        return;
      }
      /* Join the newsletter too (source "scanner"), then unlock — even if the
         API is down, the visitor still gets into the tool. */
      if (CFG.NEWSLETTER_ENDPOINT) {
        postJSON(CFG.NEWSLETTER_ENDPOINT, withRef({ email: email, source: "/scanner.html" }))
          .then(function () { unlockScanner(email); })
          .catch(function () { unlockScanner(email); });
      } else {
        unlockScanner(email);
      }
    });
    renderGateMode();
    if (scannerViewState() === "tool") {
      gate.hidden = true;
      tool.hidden = false;
    } else {
      if (gateMode === "subscribe") setPostScanGateCopy();
      tool.hidden = true;
      gate.hidden = false;
    }
  }

  var fileInput = document.getElementById("scan-file");
  var preview = document.getElementById("scan-preview");
  var analyzeBtn = document.getElementById("scan-analyze");
  var result = document.getElementById("scan-result");
  if (fileInput && preview) {
    fileInput.addEventListener("change", function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      preview.innerHTML = '<img src="' + url + '" alt="Your label photo" class="scan-preview">';
      if (analyzeBtn) analyzeBtn.disabled = false;
      if (result) result.innerHTML = "";
    });
  }

  /* ---- scanner modes: food / skin / home ---- */
  var SCAN_MODE_HINTS = {
    food: 'Take a clear photo of the <strong>ingredients panel</strong> — flat, well-lit, text readable.',
    pet: 'Take a clear photo of the <strong>pet food ingredients panel</strong> — flat, well-lit, text readable. They\'re family too.',
    skin: 'Take a clear photo of the <strong>INCI list</strong> on the back of the product — flat, well-lit, text readable.',
    home: 'Take a clear photo of the <strong>ingredients or warnings panel</strong> — flat, well-lit, text readable.'
  };
  var SCAN_MODE_PANEL = {
    food: "ingredients",
    pet: "pet food ingredients",
    skin: "INCI list",
    home: "ingredients or warnings"
  };
  var scanMode = "food";
  try {
    var modeParam = (new URLSearchParams(window.location.search)).get("mode");
    if (modeParam === "skin" || modeParam === "home" || modeParam === "pet") scanMode = modeParam;
  } catch (e) {}
  var modeHint = document.getElementById("scan-mode-hint");
  function setScanMode(m) {
    if (m !== "food" && m !== "skin" && m !== "home" && m !== "pet") m = "food";
    scanMode = m;
    var btns = document.querySelectorAll("#scan-mode [data-mode]");
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute("data-mode") === m;
      btns[i].classList.toggle("active", on);
      btns[i].setAttribute("aria-pressed", String(on));
    }
    if (modeHint) modeHint.innerHTML = SCAN_MODE_HINTS[m];
    /* Allergen alerts are a food feature only. Look up fresh each time in case
       of stale HTML; belt-and-braces via style as well as the hidden attribute. */
    var ab = document.getElementById("allergen-box");
    if (ab) {
      var hideAlg = (m !== "food");
      ab.hidden = hideAlg;
      ab.style.display = hideAlg ? "none" : "";
    }
    /* Barcode lookup needs a product database — none exists for household or
       pet products, so the barcode button hides in Home and Pet modes (photo label only). */
    var bcRow = document.getElementById("barcode-row");
    if (bcRow) bcRow.hidden = (m === "home" || m === "pet");
    /* Switching modes stops any active barcode camera. */
    if (typeof stopBarcodeScan === "function") stopBarcodeScan();
  }
  var modeCtl = document.getElementById("scan-mode");
  if (modeCtl) {
    modeCtl.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest("[data-mode]") : null;
      if (b) setScanMode(b.getAttribute("data-mode"));
    });
    setScanMode(scanMode);
  }

  /* ---- scanner: on-device OCR + ingredient matching. Free forever.
     The photo never leaves the reader's phone: Tesseract.js reads it locally,
     and only the matched ingredient IDs + score are sent to /api/scan. ---- */
  var TESS_CDN = "https://cdn.jsdelivr.net/npm/tesseract.js@6/dist/tesseract.min.js";
  var tessPromise = null;

  function loadTesseract() {
    if (window.Tesseract && window.Tesseract.recognize) return Promise.resolve();
    if (tessPromise) return tessPromise;
    tessPromise = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = TESS_CDN;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("tess-cdn")); };
      document.head.appendChild(s);
    });
    return tessPromise;
  }

  function normText(s) {
    return String(s || "").toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function escRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function cleanTerm(t) {
    return normText(String(t).replace(/\([^)]*\)/g, " ")).trim();
  }

  /* Match OCR text against the ingredient database. Returns [{ing, term}]. */
  /* Shared term matcher used by every scan mode. Returns the matched raw term or null. */
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

  function matchIngredients(ocrText) {
    var data = window.CR_INGREDIENTS || [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var hits = [];
    data.forEach(function (d) {
      var terms = [d.name].concat(d.aliases || []);
      if (d.e_number) terms.push(d.e_number);
      var found = findTerm(text, nospace, terms);
      if (found) hits.push({ ing: d, term: found });
    });
    return hits;
  }

  /* Pet mode: same shape as food hits, matched against the pet dossier set. */
  function matchPetIngredients(ocrText) {
    var data = window.CR_PET_INGREDIENTS || [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var hits = [];
    data.forEach(function (d) {
      var terms = [d.name].concat(d.aliases || []);
      if (d.e_number) terms.push(d.e_number);
      var found = findTerm(text, nospace, terms);
      if (found) hits.push({ ing: d, term: found });
    });
    return hits;
  }

  var invLoadPromise = null;
  function ensureInventory() {
    if (window.CR_INVENTORY) return Promise.resolve(window.CR_INVENTORY);
    if (invLoadPromise) return invLoadPromise;
    invLoadPromise = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "/js/inventory-data.js?v=2";
      s.onload = function () { resolve(window.CR_INVENTORY || []); };
      s.onerror = function () { resolve([]); };
      document.head.appendChild(s);
    });
    return invLoadPromise;
  }

  /* Tier 2 pass: neutral recognition only. Never affects the score,
     never shows risk badges. Skips anything Tier 1 already claimed. */
  function matchInventory(ocrText, tier1Hits) {
    var inv = window.CR_INVENTORY || [];
    if (!inv.length) return [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var claimed = {};
    tier1Hits.forEach(function (h) {
      claimed[normText(h.ing.name)] = 1;
      claimed[normText(h.term)] = 1;
      (h.ing.aliases || []).forEach(function (a) { claimed[cleanTerm(a)] = 1; });
    });
    var hits = [];
    for (var i = 0; i < inv.length; i++) {
      var r = inv[i];
      var terms = [r[0]].concat(r[2] ? r[2].split("|") : []);
      var found = null;
      for (var j = 0; j < terms.length && !found; j++) {
        var raw = terms[j];
        var t = cleanTerm(raw);
        if (!t || t.length < 3 || claimed[t]) continue;
        /* Paren-stripping must not reduce an alias to a lone generic word when the
           parens held the identity (e.g. "ACID(C8)" -> "acid" would match any
           "... acid" on a label). Descriptor parens like "SALT (INGREDIENT)" stay. */
        var pm = /\(([^)]*)\)/.exec(raw);
        if (pm && /\d/.test(pm[1]) && t.split(" ").length === 1 && t.length <= 5) continue;
        var tFlat = t.replace(/\s+/g, "");
        if (/^e\d+$/.test(tFlat)) {
          if (nospace.indexOf(tFlat) !== -1) found = terms[j];
        } else if (t.length <= 4) {
          if (new RegExp("(^|\\s)" + escRe(t) + "(\\s|$)").test(text)) found = terms[j];
        } else if (text.indexOf(t) !== -1) {
          found = terms[j];
        }
      }
      if (found && !claimed[normText(r[0])]) hits.push({ row: r, term: found });
    }
    return hits;
  }

  function scanScore(hits) {
    var w = 0;
    hits.forEach(function (h) { w += (h.ing.risk_weight || 0); });
    return Math.max(5, 100 - w);
  }

  /* ---- Skin mode: match OCR against the cosmetic inventory (7,138 INCI names).
     Neutral — returns ban flags only, no health scoring. ---- */
  var cosLoadPromise = null;
  function ensureCosmetics() {
    if (window.CR_COSMETICS) return Promise.resolve(window.CR_COSMETICS);
    if (cosLoadPromise) return cosLoadPromise;
    cosLoadPromise = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "/js/cosmetic-data.js?v=1";
      s.onload = function () { resolve(window.CR_COSMETICS || { items: [] }); };
      s.onerror = function () { resolve({ items: [] }); };
      document.head.appendChild(s);
    });
    return cosLoadPromise;
  }

  /* Common words that slipped into the crowdsourced cosmetic inventory as
     "ingredients" — never match these, they'd hit every label. */
  var SKIN_STOPWORDS = { a: 1, an: 1, and: 1, or: 1, the: 1, of: 1, "in": 1, on: 1, with: 1, "for": 1, to: 1, from: 1, by: 1, as: 1, at: 1 };

  function matchCosmetics(ocrText) {
    var items = (window.CR_COSMETICS && window.CR_COSMETICS.items) || [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var hits = [];
    for (var i = 0; i < items.length; i++) {
      var r = items[i];
      if (SKIN_STOPWORDS[cleanTerm(r[0])]) continue;
      var found = findTerm(text, nospace, [r[0]]);
      if (found) hits.push({ name: r[0], eu: !!r[2], us: !!r[3], ca: !!r[4], term: found });
    }
    /* Flagged entries first — the ones worth knowing about. */
    hits.sort(function (a, b) { return ((b.eu ? 1 : 0) + (b.us ? 1 : 0) + (b.ca ? 1 : 0)) - ((a.eu ? 1 : 0) + (a.us ? 1 : 0) + (a.ca ? 1 : 0)); });
    return hits;
  }

  /* ---- Home mode: match OCR against household chemicals (17 entries).
     Facts only — no scoring, no verdicts. ---- */
  var homeLoadPromise = null;
  function ensureHome() {
    if (window.CR_HOME) return Promise.resolve(window.CR_HOME);
    if (homeLoadPromise) return homeLoadPromise;
    homeLoadPromise = new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "/js/home-data.js?v=1";
      s.onload = function () { resolve(window.CR_HOME || { items: [] }); };
      s.onerror = function () { resolve({ items: [] }); };
      document.head.appendChild(s);
    });
    return homeLoadPromise;
  }

  function matchHome(ocrText) {
    var items = (window.CR_HOME && window.CR_HOME.items) || [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var hits = [];
    items.forEach(function (e) {
      var terms = [e.name].concat(e.aliases || []);
      var found = findTerm(text, nospace, terms);
      if (found) hits.push({ entry: e, term: found });
    });
    return hits;
  }
  function riskBadge(risk) {
    var labels = { avoid: "\u2715 Avoid", caution: "\u26A0 Caution", certain: "\u25D0 Certain people should avoid", cutback: "\u25D1 Cut back", lower: "\u2713 Lower concern" };
    return '<span class="risk risk-' + risk + '">' + (labels[risk] || risk) + "</span>";
  }
  function escHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---- allergen alerts (optional). Trigger words matched as case-insensitive
     substrings against matched ingredient names + aliases. ---- */
  var ALLERGENS = {
    "milk": ["milk", "whey", "casein", "caseinate", "lactose", "ghee", "nougat", "curd", "custard", "lactalbumin", "buttermilk", "cream", "butter", "cheese", "yogurt", "kefir", "recaldent"],
    "egg": ["egg", "albumin", "albumen", "lysozyme", "mayonnaise", "meringue", "ovalbumin"],
    "soy": ["soy", "soya", "edamame", "miso", "natto", "tempeh", "tofu", "tamari", "shoyu"],
    "wheat": ["wheat", "flour", "gluten", "semolina", "spelt", "farro", "einkorn", "kamut", "triticale", "malt", "couscous", "bulgur", "durum", "graham"],
    "peanut": ["peanut", "arachis", "groundnut"],
    "tree nuts": ["almond", "walnut", "cashew", "pecan", "pistachio", "hazelnut", "brazil nut", "macadamia", "pine nut", "chestnut", "coconut", "marzipan", "praline"],
    "fish": ["anchovy", "bass", "cod", "flounder", "haddock", "halibut", "salmon", "sardine", "sole", "tuna", "trout", "surimi"],
    "shellfish": ["shrimp", "crab", "lobster", "crayfish", "crawfish", "clam", "mussel", "oyster", "scallop", "squid", "octopus"],
    "sesame": ["sesame", "tahini", "benne", "gingelly"]
  };
  var ALLERGEN_LABELS = {
    "milk": "Milk", "egg": "Egg", "soy": "Soy", "wheat": "Wheat", "peanut": "Peanut",
    "tree nuts": "Tree Nuts", "fish": "Fish", "shellfish": "Shellfish", "sesame": "Sesame"
  };
  function getAllergens() {
    try {
      var list = JSON.parse(localStorage.getItem("cr_allergens") || "[]");
      return (Array.isArray(list) ? list : []).filter(function (k) { return !!ALLERGENS[k]; });
    } catch (err) { return []; }
  }
  function saveAllergens(list) {
    try { localStorage.setItem("cr_allergens", JSON.stringify(list)); } catch (err) {}
  }
  function checkAllergens(hits, invHits, ocrText) {
    var selected = getAllergens();
    if (!selected.length) return [];
    var corpus = [];
    /* Raw OCR text is the ground truth: normalized inventory names can lose
       tokens (e.g. "SOY LECITHIN" matched as "Lecithin"), so always scan it. */
    if (ocrText) corpus.push(String(ocrText).toLowerCase());
    (hits || []).forEach(function (h) {
      corpus.push(([h.ing.name].concat(h.ing.aliases || []).join(" ").toLowerCase()));
    });
    (invHits || []).forEach(function (x) {
      corpus.push(([x.row[0]].concat(x.row[2] ? x.row[2].split("|") : []).join(" ").toLowerCase()));
    });
    var alerts = [];
    selected.forEach(function (k) {
      var matchedTerms = [];
      ALLERGENS[k].forEach(function (t) {
        var found = corpus.some(function (c) { return c.indexOf(t) !== -1; });
        if (found && matchedTerms.indexOf(t) === -1) matchedTerms.push(t);
      });
      if (matchedTerms.length) alerts.push({ key: k, label: ALLERGEN_LABELS[k], terms: matchedTerms });
    });
    return alerts;
  }

  var chipBox = document.getElementById("allergen-chips");
  function paintChips() {
    if (!chipBox) return;
    var sel = getAllergens();
    chipBox.querySelectorAll(".alg-chip").forEach(function (c) {
      c.setAttribute("aria-pressed", sel.indexOf(c.getAttribute("data-alg")) !== -1 ? "true" : "false");
    });
  }
  if (chipBox) {
    paintChips();
    chipBox.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest(".alg-chip") : null;
      if (!b) return;
      var k = b.getAttribute("data-alg");
      var sel = getAllergens();
      var i = sel.indexOf(k);
      if (i === -1) sel.push(k); else sel.splice(i, 1);
      saveAllergens(sel);
      paintChips();
    });
  }

  function allergenAlertHTML(hits, invHits, ocrText) {
    var alerts = checkAllergens(hits, invHits, ocrText);
    if (!alerts.length) return "";
    return '<div role="alert" style="background:#fff8f0;border:2px solid var(--red);border-radius:var(--radius);padding:16px;margin-bottom:18px">' +
      '<strong style="font-size:16px">\u26A0 Allergen alert \u2014 this label mentions: ' +
      alerts.map(function (a) {
        return escHtml(a.label) + " (" + a.terms.map(function (t) { return escHtml(t); }).join(", ") + ")";
      }).join("; ") + "</strong>" +
      '<p style="font-size:13.5px;color:var(--ink-soft);margin:8px 0 0">A helper, not a medical device. Always read the label yourself \u2014 especially for severe allergies.</p></div>';
  }
  function shareButtonHTML(mode) {
    var tip = mode === "food"
      ? "Tip: screenshot your score, then send it to one friend directly — it works 10x better than posting. "
      : "Tip: send this to one friend directly — it works 10x better than posting. ";
    return '<p class="center" style="margin:10px 0 4px"><button class="btn" id="scan-share" type="button">Share this result</button></p>' +
      '<p class="center" style="font-size:13.5px;color:var(--ink-soft);margin:0 0 6px">' + tip + '<a href="/refer" style="font-weight:700">Refer friends, earn free tools →</a></p>';
  }
  function wireShare(mode, data, product) {
    var btn = document.getElementById("scan-share");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var viaBarcode = !!(product && product.barcode);
      var text;
      if (mode === "skin") {
        var eu = data.filter(function (x) { return x.eu; }).length;
        text = viaBarcode
          ? ("I scanned a cosmetics barcode" + (product.name ? " (" + product.name + ")" : "") + " with Consumer Rising: " + data.length + " ingredient" + (data.length === 1 ? "" : "s") + " matched" +
            (eu ? " — " + eu + " banned in the EU." : ".") + " Scan yours free: https://consumerrising.com/scanner?mode=skin")
          : ("I scanned a cosmetics label with Consumer Rising: " + data.length + " ingredient" + (data.length === 1 ? "" : "s") + " matched" +
            (eu ? " — " + eu + " banned in the EU." : ".") +
            " Scan yours free: https://consumerrising.com/scanner?mode=skin");
      } else if (mode === "home") {
        text = "I checked a household product with Consumer Rising: " + data.length + " chemical" + (data.length === 1 ? "" : "s") + " matched — read the facts yourself." +
          " Scan yours free: https://consumerrising.com/scanner?mode=home";
      } else {
        var names = data.hits.slice(0, 3).map(function (x) { return x.ing.name; });
        var altBit = (lastAlternatives && lastAlternatives.length)
          ? (" Better alternative: " + lastAlternatives[0].name + " (" + lastAlternatives[0].score + "/100).")
          : "";
        text = viaBarcode
          ? ("I scanned a barcode" + (product.name ? " (" + product.name + ")" : "") + " with Consumer Rising: " + data.score + "/100." +
            (names.length ? " Flagged: " + names.join(", ") + "." : " No flagged ingredients.") + altBit +
            " Scan yours free: https://consumerrising.com/scanner")
          : ("I scanned a food label with Consumer Rising: " + data.score + "/100." +
            (names.length ? " Flagged: " + names.join(", ") + "." : " No flagged ingredients.") + altBit +
            " Scan yours free: https://consumerrising.com/scanner");
      }
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = old; }, 1800);
      };
      if (navigator.share) {
        navigator.share({ title: "Consumer Rising label scan", text: text, url: "https://consumerrising.com/scanner" })
          .catch(function () { /* user dismissed — do nothing */ });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }

  function ocrDetailsHTML(ocrText) {
    return '<details style="margin-top:14px"><summary style="cursor:pointer;font-weight:700;font-size:14.5px">What we read from your photo</summary>' +
      '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:8px;white-space:pre-wrap">' + escHtml((ocrText || "").slice(0, 1200) || "(no text detected)") + "</p></details>";
  }
  function wireScanAgain() {
    var again = document.getElementById("scan-again");
    if (again) again.addEventListener("click", function () {
      result.innerHTML = "";
      if (fileInput) fileInput.value = "";
      if (preview) preview.innerHTML = "";
      if (analyzeBtn) analyzeBtn.disabled = true;
    });
  }

  /* ---- Barcode scans: product header + attribution (prepended/appended by renderers) ---- */
  function barcodeProductHTML(product) {
    if (!product) return "";
    var h = '<div class="quiz-step-tag">Barcode scan</div>';
    if (product.name) h += '<h3 style="font-weight:900;margin:0 0 4px">' + escHtml(product.name) + "</h3>";
    if (product.brands) h += '<p style="color:var(--ink-soft);font-size:14.5px;margin:0 0 12px">' + escHtml(product.brands) + "</p>";
    return h;
  }
  function barcodeAttributionHTML(product) {
    if (!product || !product.source) return "";
    return '<p style="font-size:13px;color:var(--ink-soft);margin-top:14px">Product data by ' + escHtml(product.source) +
      " — ingredients matched against our index on your device.</p>";
  }

  function renderScanResults(hits, invHits, ocrText, product) {
    var h = '<div class="dossier scan-result" role="status">';
    h += barcodeProductHTML(product);
    h += allergenAlertHTML(hits, invHits, ocrText);
    var shareScore = hits.length ? scanScore(hits) : 100;
    if (!hits.length) {
      h += '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">No flagged ingredients detected</h3>' +
        '<p style="color:var(--ink-soft)">We read your label and none of our 100 flagged ingredients showed up. ' +
        'That is good news as far as our database goes — it is not a verdict that the product is healthy overall.</p>' +
        shareButtonHTML("food");
    } else {
      var score = scanScore(hits);
      var band = score >= 85 ? "Mostly clear" : score >= 65 ? "A few flags" : score >= 40 ? "Several concerns" : "Many concerns";
      h += '<div class="quiz-step-tag">Label score</div>' +
        '<div class="quiz-result-score">' + score + '<span style="font-size:28px">/100</span></div>' +
        '<div class="quiz-result-label">' + band + "</div>" +
        shareButtonHTML("food") +
        '<p style="color:var(--ink-soft)">We found <strong>' + hits.length + " flagged ingredient" + (hits.length > 1 ? "s" : "") + "</strong> on this label:</p>";
      hits.sort(function (a, b) { return (b.ing.risk_weight || 0) - (a.ing.risk_weight || 0); });
      h += '<div style="display:flex;flex-direction:column;gap:12px;margin:16px 0">';
      hits.forEach(function (x) {
        var d = x.ing;
        h += '<div style="background:var(--paper);border:var(--line);border-radius:var(--radius);padding:14px 16px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px">' +
          "<strong>" + escHtml(d.name) + "</strong>" + riskBadge(d.risk) + "</div>" +
          (d.function ? '<p style="font-size:13px;color:var(--ink-soft);margin:0 0 6px">Function: ' + escHtml(d.function) + '</p>' : "") +
          '<p style="font-size:15px;color:var(--ink-soft);margin:0 0 8px">' + escHtml(d.description.split(".")[0]) + ".</p>" +
          '<a href="/ingredients.html#ing-' + escHtml(d.id) + '" style="font-weight:800;font-size:14.5px">Read the full dossier →</a></div>';
      });
      h += "</div>";
    }
    /* Better alternatives (barcode scans, Food mode only) — populated async. */
    h += '<div id="alt-box"></div>';
    if (invHits && invHits.length) {
      var shown = invHits.slice(0, 12);
      h += '<div style="margin-top:22px"><div class="quiz-step-tag">Also on this label</div>' +
        '<p style="font-size:14.5px;color:var(--ink-soft)">Recognized from FDA\u2019s inventory — listed for transparency, no verdict:</p>' +
        '<div style="display:flex;flex-direction:column;gap:8px;margin:12px 0">';
      shown.forEach(function (x) {
        var eff = x.row[3] === "\u2014" ? "Technical effect not specified in FDA records" : x.row[3];
        h += '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;padding:10px 14px;background:var(--paper);border:var(--line);border-radius:var(--radius)">' +
          '<div><strong style="font-size:15px">' + escHtml(x.row[0]) + "</strong>" +
          '<div style="font-size:13.5px;color:var(--ink-soft)">' + escHtml(eff) + "</div></div>" +
          '<span class="inv-status">' + escHtml(x.row[4]) + "</span></div>";
      });
      h += "</div>";
      if (invHits.length > 12) {
        h += '<p style="font-size:14px;color:var(--ink-soft)">+' + (invHits.length - 12) +
          ' more recognized — search them all in the <a href="/ingredients.html">Full Inventory</a>.</p>';
      }
      h += "</div>";
    }
    if (!product) h += ocrDetailsHTML(ocrText);
    h += barcodeAttributionHTML(product);
    h += '<p class="center mt"><button class="btn btn-ink" id="scan-again">Scan another label</button></p>';
    h += '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px">Flagged results cover our 100-ingredient index. The inventory section below lists FDA-recorded names with no verdict attached. Results depend on photo quality. General information only — <a href="/disclaimer">not medical advice</a>.</p></div>';
    result.innerHTML = h;
    wireShare("food", { score: shareScore, hits: hits }, product);
    wireScanAgain();
    loadAlternatives(product);
  }

  /* ---- Better alternatives: neutral, no purchase language.
     "Here's what scores better — you'll find it." ---- */
  var lastAlternatives = [];
  function loadAlternatives(product) {
    lastAlternatives = [];
    var box = document.getElementById("alt-box");
    if (!box || !product || !product.barcode) return;
    box.innerHTML = '<p style="font-size:14px;color:var(--ink-soft);margin-top:18px">Looking for better options in this category…</p>';
    fetch("/api/alternatives?barcode=" + encodeURIComponent(product.barcode) + "&db=food")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.ok || !d.alternatives || !d.alternatives.length) {
          var b2 = document.getElementById("alt-box");
          if (b2) b2.innerHTML = "";
          return;
        }
        lastAlternatives = d.alternatives;
        var html = '<div style="margin-top:22px"><div class="quiz-step-tag">Better alternatives</div>' +
          '<p style="font-size:14.5px;color:var(--ink-soft)">These scored higher in the same category. Our goal is to make you aware — you make the decision. You will find them where you shop.</p>' +
          '<div style="display:flex;flex-direction:column;gap:10px;margin:12px 0">';
        d.alternatives.forEach(function (a) {
          var why = (a.whyBetter && a.whyBetter.length)
            ? "No " + a.whyBetter.map(function (w) { return escHtml(w); }).join(", no ")
            : "Fewer flagged ingredients";
          html += '<div style="background:var(--paper);border:var(--line);border-radius:var(--radius);padding:14px 16px">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:4px">' +
            "<strong>" + escHtml(a.name || "Unnamed product") + "</strong>" +
            '<span class="quiz-result-score" style="font-size:26px">' + a.score + '<span style="font-size:15px">/100</span></span></div>' +
            (a.brands ? '<p style="font-size:13.5px;color:var(--ink-soft);margin:0 0 6px">' + escHtml(a.brands) + "</p>" : "") +
            '<p style="font-size:14.5px;color:var(--ink-soft);margin:0">' + why + ".</p></div>";
        });
        html += "</div></div>";
        var b3 = document.getElementById("alt-box");
        if (b3) b3.innerHTML = html;
      })
      .catch(function () {
        var b4 = document.getElementById("alt-box");
        if (b4) b4.innerHTML = "";
      });
  }

  /* ---- Skin mode results: neutral inventory matches, regulator flags only ---- */
  function skinBanBadges(x) {
    var b = "";
    if (x.eu) b += '<span class="risk risk-avoid">Banned in the EU</span>';
    if (x.us) b += '<span class="risk risk-caution">US restricted</span>';
    if (x.ca) b += '<span class="risk risk-caution">Banned in CA</span>';
    return b;
  }

  function renderSkinResults(hits, ocrText, product) {
    var h = '<div class="dossier scan-result" role="status">';
    h += barcodeProductHTML(product);
    if (!hits.length) {
      h += '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">No cosmetic ingredients matched</h3>' +
        '<p style="color:var(--ink-soft)">We read your label and none of our 7,138 cosmetic-ingredient names showed up. ' +
        'That only means none of the names we track appeared — it is not a verdict about the product.</p>' +
        shareButtonHTML("skin");
    } else {
      var euHits = hits.filter(function (x) { return x.eu; });
      h += '<div class="quiz-step-tag">Cosmetics scan</div>' +
        '<p style="color:var(--ink-soft)">We found <strong>' + hits.length + " ingredient" + (hits.length > 1 ? "s" : "") + "</strong> from the INCI list on this label" +
        (euHits.length
          ? ': <strong>' + euHits.length + "</strong> " + (euHits.length > 1 ? "are" : "is") + " banned in the EU.</p>"
          : ". None are banned in the EU.</p>");
      var shown = hits.slice(0, 25);
      h += '<div style="display:flex;flex-direction:column;gap:8px;margin:16px 0">';
      shown.forEach(function (x) {
        h += '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 14px;background:var(--paper);border:var(--line);border-radius:var(--radius)">' +
          "<strong>" + escHtml(x.name) + "</strong>" +
          '<span style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">' + skinBanBadges(x) + "</span></div>";
      });
      h += "</div>";
      if (hits.length > 25) {
        h += '<p style="font-size:14px;color:var(--ink-soft)">+' + (hits.length - 25) + " more matched.</p>";
      }
      h += shareButtonHTML("skin");
    }
    h += '<p style="margin-top:14px"><a href="/skin-index" style="font-weight:800;font-size:14.5px">Browse the full Skin Index &rarr;</a></p>';
    if (!product) h += ocrDetailsHTML(ocrText);
    h += barcodeAttributionHTML(product);
    h += '<p class="center mt"><button class="btn btn-ink" id="scan-again">Scan another label</button></p>';
    h += '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px">Ban flags reflect regulator action only — no Consumer Rising verdicts. Results depend on photo quality. General information only — <a href="/disclaimer">not medical advice</a>.</p></div>';
    result.innerHTML = h;
    wireShare("skin", hits, product);
    wireScanAgain();
  }

  /* ---- Home mode results: facts only, expandable, no verdicts ---- */
  function renderHomeResults(hits, ocrText) {
    var h = '<div class="dossier scan-result" role="status">';
    if (!hits.length) {
      h += '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">No household chemicals matched</h3>' +
        '<p style="color:var(--ink-soft)">We read your label and none of our 17 tracked household chemicals showed up. ' +
        'That only means none of the chemicals we track appeared — it is not a verdict about the product.</p>' +
        shareButtonHTML("home");
    } else {
      h += '<div class="quiz-step-tag">Home scan</div>' +
        '<p style="color:var(--ink-soft)">We found <strong>' + hits.length + " chemical" + (hits.length > 1 ? "s" : "") + "</strong> from the Home Index on this label. Facts only — no verdicts:</p>";
      h += '<div style="display:flex;flex-direction:column;gap:12px;margin:16px 0">';
      hits.forEach(function (x, i) {
        var e = x.entry;
        var detailId = "home-scan-detail-" + i;
        var facts = (e.facts || []).map(function (f) {
          return "<li>" + escHtml(f.text) + ' <a href="' + escHtml(f.source.url) + '" target="_blank" rel="noopener">[' + escHtml(f.source.label) + "]</a></li>";
        }).join("");
        h += '<div style="background:var(--paper);border:var(--line);border-radius:var(--radius);padding:14px 16px">' +
          '<button class="home-expand" aria-expanded="false" aria-controls="' + detailId + '" style="width:100%;text-align:left;background:none;border:none;padding:0;cursor:pointer;font:inherit;color:inherit">' +
          "<strong>" + escHtml(e.name) + "</strong>" +
          '<p style="font-size:14.5px;color:var(--ink-soft);margin:6px 0">' + escHtml(e.what_it_is || "") + "</p>" +
          '<span style="font-weight:800;font-size:14px">Read the facts +</span></button>' +
          '<div id="' + detailId + '" hidden>' +
          "<ul>" + facts + "</ul>" +
          '<p style="font-size:13.5px;color:var(--ink-soft)"><strong>US:</strong> ' + escHtml(e.us_status || "\u2014") +
          " &middot; <strong>EU:</strong> " + escHtml(e.eu_status || "\u2014") +
          " &middot; <strong>CA:</strong> " + escHtml(e.ca_status || "\u2014") + "</p>" +
          "</div></div>";
      });
      h += "</div>";
      h += shareButtonHTML("home");
    }
    h += '<p style="margin-top:14px"><a href="/home-index" style="font-weight:800;font-size:14.5px">Browse the full Home Index &rarr;</a></p>';
    h += ocrDetailsHTML(ocrText);
    h += '<p class="center mt"><button class="btn btn-ink" id="scan-again">Scan another label</button></p>';
    h += '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px">Results depend on photo quality. Facts and studies only — no verdicts. General information only — <a href="/disclaimer">not medical advice</a>.</p></div>';
    result.innerHTML = h;
    wireShare("home", hits);
    result.querySelectorAll(".home-expand").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var isOpen = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!isOpen));
        if (panel) panel.hidden = isOpen;
      });
    });
    wireScanAgain();
  }

  function scanError(msg) {
    result.innerHTML = '<div class="dossier scan-result" role="status">' +
      '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Could not read that photo</h3>' +
      '<p style="color:var(--ink-soft)">' + msg + "</p>" +
      '<p class="center mt"><button class=\"btn btn-ink\" id=\"scan-retry\">Try another photo</button></p></div>';
    var r = document.getElementById("scan-retry");
    if (r) r.addEventListener("click", function () {
      result.innerHTML = "";
      if (fileInput) fileInput.value = "";
      if (preview) preview.innerHTML = "";
      if (analyzeBtn) analyzeBtn.disabled = true;
    });
  }

  /* Downscale huge photos so OCR is fast on phones. */
  function prepImage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        try {
          var maxW = 1600;
          var scale = Math.min(1, maxW / img.naturalWidth);
          var cv = document.createElement("canvas");
          cv.width = Math.round(img.naturalWidth * scale);
          cv.height = Math.round(img.naturalHeight * scale);
          cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
          URL.revokeObjectURL(url);
          resolve(cv);
        } catch (e) { reject(e); }
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("img")); };
      img.src = url;
    });
  }

  function runOCR(file) {
    return loadTesseract().then(function () {
      return prepImage(file);
    }).then(function (canvas) {
      return window.Tesseract.recognize(canvas, "eng", {
        logger: function (m) {
          if (m && m.status === "recognizing text" && typeof m.progress === "number") {
            var pct = Math.round(m.progress * 100);
            result.innerHTML = '<div class="form-ok" role="status"><span class="big">Reading… ' + pct + '%</span>Decoding your label on this device. Nothing is uploaded.</div>';
          }
        }
      });
    }).then(function (res) {
      return (res && res.data && res.data.text) ? res.data.text : "";
    });
  }

  /* Shared finish for photo AND barcode scans: post the result, render, then
     show the post-scan gate for free scans. The API stores free scans under
     "free-scan". Barcode scans count exactly like photo scans. */
  function finishScan(email, summary, ids, renderFn) {
    var isFreeScan = !getGateEmail();
    function finish() {
      if (isFreeScan) {
        try { localStorage.setItem("cr_free_scan_done", "1"); } catch (e) {}
      }
      renderFn();
      if (isFreeScan) showPostScanGate();
    }
    if (CFG.SCAN_ENDPOINT) {
      postJSON(CFG.SCAN_ENDPOINT, { email: email, result_summary: summary, matches: ids })
        .then(finish)
        .catch(finish);
    } else {
      finish();
    }
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", function () {
      var email = getGateEmail();
      var file = fileInput && fileInput.files && fileInput.files[0];
      if (!file) return;
      analyzeBtn.disabled = true;

      function recordResult(hits, invHits, ocrText) {
        var ids = hits.map(function (x) { return x.ing.id; });
        var summary = ids.length
          ? ("score " + scanScore(hits) + " \u00b7 matched: " + ids.join(", "))
          : "score 100 \u00b7 no flagged ingredients";
        if (invHits && invHits.length) summary += " \u00b7 inv:" + invHits.length;
        finishScan(email, summary, ids, function () { renderScanResults(hits, invHits, ocrText); });
      }

      function recordSkinResult(hits, ocrText) {
        var names = hits.map(function (x) { return x.name; });
        var summary = "mode skin \u00b7 matched: " + (names.length ? names.join(", ") : "none");
        finishScan(email, summary, names, function () { renderSkinResults(hits, ocrText); });
      }

      function recordHomeResult(hits, ocrText) {
        var ids = hits.map(function (x) { return x.entry.id; });
        var summary = "mode home \u00b7 matched: " + (ids.length ? ids.join(", ") : "none");
        finishScan(email, summary, ids, function () { renderHomeResults(hits, ocrText); });
      }

      function doOCR() {
        result.innerHTML = '<div class="form-ok" role="status"><span class="big">Loading the reader…</span>First scan downloads a small reading engine. After that it is instant.</div>';
        runOCR(file).then(function (text) {
          if (!normText(text)) {
            analyzeBtn.disabled = false;
            var panelWord = SCAN_MODE_PANEL[scanMode] || "ingredients";
            scanError("We couldn't find any readable text in that photo. Try again: lay the package flat, get close to the <strong>" + panelWord + "</strong> panel (not the front), and avoid glare and shadows.");
            return;
          }
          if (scanMode === "skin") {
            ensureCosmetics().then(function () {
              recordSkinResult(matchCosmetics(text), text);
              analyzeBtn.disabled = false;
            });
            return;
          }
          if (scanMode === "home") {
            ensureHome().then(function () {
              recordHomeResult(matchHome(text), text);
              analyzeBtn.disabled = false;
            });
            return;
          }
          if (scanMode === "pet") {
            /* Pet mode: verdicts from the pet dossier set; no inventory pass
               (the FDA inventory is human-food substances). */
            recordResult(matchPetIngredients(text), [], text);
            analyzeBtn.disabled = false;
            return;
          }
          var hits = matchIngredients(text);
          ensureInventory().then(function () {
            var invHits = matchInventory(text, hits);
            recordResult(hits, invHits, text);
            analyzeBtn.disabled = false;
          });
        }).catch(function (err) {
          analyzeBtn.disabled = false;
          var panelWord2 = SCAN_MODE_PANEL[scanMode] || "ingredients";
          var msg = (err && err.message === "tess-cdn")
            ? "The reading engine couldn't download. Check your connection and try again — the photo never left your device."
            : "Something went wrong while reading the photo. Please try again with a clearer shot of the " + panelWord2 + " panel.";
          scanError(msg);
        });
      }

      doOCR();
    });
  }

  /* ---- Barcode scan: camera -> ZXing -> /api/product -> existing matchers ----
     Server-side lookup (never call Open Food Facts from the browser).
     Food mode -> Open Food Facts, Skin mode -> Open Beauty Facts.
     Home mode: barcode button is hidden (no household product database). */
  var zxingLoading = null;
  var barcodeReader = null;
  var barcodeStream = null;
  var barcodeActive = false;
  var barcodeBtn = document.getElementById("scan-barcode");
  var barcodeView = document.getElementById("barcode-view");
  var barcodeVideo = document.getElementById("barcode-video");
  var barcodeCancel = document.getElementById("barcode-cancel");

  function loadZXing() {
    if (window.ZXingBrowser && window.ZXingBrowser.BrowserMultiFormatReader) return Promise.resolve();
    if (zxingLoading) return zxingLoading;
    zxingLoading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@zxing/browser@0.1.5/umd/zxing-browser.min.js";
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("zxing-cdn")); };
      document.head.appendChild(s);
    });
    return zxingLoading;
  }

  function stopBarcodeScan() {
    barcodeActive = false;
    try { if (barcodeReader) barcodeReader.reset(); } catch (e) {}
    barcodeReader = null;
    if (barcodeStream) {
      try { barcodeStream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
      barcodeStream = null;
    }
    if (barcodeVideo) { try { barcodeVideo.srcObject = null; } catch (e) {} }
    if (barcodeView) barcodeView.hidden = true;
    if (barcodeBtn) barcodeBtn.disabled = false;
  }

  function barcodeCameraDenied() {
    result.innerHTML = '<div class="dossier scan-result" role="status">' +
      '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Camera unavailable</h3>' +
      '<p style="color:var(--ink-soft)">We couldn\'t access the camera — it may be blocked for this site. ' +
      "You can allow camera access in your browser settings, or photograph the label instead:</p>" +
      '<p class="center mt"><button class="btn btn-ink" id="barcode-photo-fallback">Photograph the label</button></p></div>';
    var fb = document.getElementById("barcode-photo-fallback");
    if (fb) fb.addEventListener("click", function () {
      result.innerHTML = "";
      if (fileInput) fileInput.click();
    });
  }

  function barcodeNotFound(barcode) {
    result.innerHTML = '<div class="dossier scan-result" role="status">' +
      '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Product not found</h3>' +
      '<p style="color:var(--ink-soft)">We couldn\'t find barcode <strong>' + escHtml(barcode) + "</strong> in the product database. " +
      "It may be a new or regional product. Photograph the ingredients label and we'll read it directly:</p>" +
      '<p class="center mt"><button class="btn btn-ink" id="barcode-photo-fallback2">Photograph the label instead</button></p></div>';
    var fb = document.getElementById("barcode-photo-fallback2");
    if (fb) fb.addEventListener("click", function () {
      result.innerHTML = "";
      if (fileInput) fileInput.click();
    });
  }

  function recordBarcodeResult(product) {
    var email = getGateEmail();
    var text = product.ingredients_text || "";
    var prod = { barcode: product.barcode, name: product.name, brands: product.brands, source: product.source };
    if (!normText(text)) {
      /* Product found but no usable ingredients text — fall back to photo. */
      result.innerHTML = '<div class="dossier scan-result" role="status">' +
        '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">' + escHtml(product.name || "Product found") + "</h3>" +
        '<p style="color:var(--ink-soft)">We found this product but its ingredient list isn\'t in the database yet. ' +
        "Photograph the label and we'll read it directly:</p>" +
        '<p class="center mt"><button class="btn btn-ink" id="barcode-photo-fallback3">Photograph the label instead</button></p></div>';
      var fb = document.getElementById("barcode-photo-fallback3");
      if (fb) fb.addEventListener("click", function () {
        result.innerHTML = "";
        if (fileInput) fileInput.click();
      });
      return;
    }
    if (scanMode === "skin") {
      ensureCosmetics().then(function () {
        var hits = matchCosmetics(text);
        var names = hits.map(function (x) { return x.name; });
        var summary = "barcode " + product.barcode + " \u00b7 " + (product.name || "") + " \u00b7 matched: " + (names.length ? names.join(", ") : "none");
        finishScan(email, summary, names, function () { renderSkinResults(hits, text, prod); });
      });
      return;
    }
    /* Food mode (default). */
    var hits = matchIngredients(text);
    ensureInventory().then(function () {
      var invHits = matchInventory(text, hits);
      var ids = hits.map(function (x) { return x.ing.id; });
      var summary = "barcode " + product.barcode + " \u00b7 " + (product.name || "") + " \u00b7 score " + scanScore(hits);
      if (invHits && invHits.length) summary += " \u00b7 inv:" + invHits.length;
      finishScan(email, summary, ids, function () { renderScanResults(hits, invHits, text, prod); });
    });
  }

  function lookupBarcode(barcode) {
    var db = scanMode === "skin" ? "beauty" : "food";
    result.innerHTML = '<div class="form-ok" role="status"><span class="big">Looking up…</span>Checking the product database for barcode ' + escHtml(barcode) + ".</div>";
    fetch("/api/product?barcode=" + encodeURIComponent(barcode) + "&db=" + db)
      .then(function (r) { return r.json().then(function (j) { return { status: r.status, body: j }; }); })
      .then(function (res) {
        if (res.status === 404 || (res.body && res.body.ok === false && res.body.reason === "not_found")) {
          barcodeNotFound(barcode);
          return;
        }
        if (!res.body || !res.body.ok || !res.body.product) throw new Error("lookup");
        recordBarcodeResult(res.body.product);
      })
      .catch(function () {
        result.innerHTML = '<div class="dossier scan-result" role="status">' +
          '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Lookup failed</h3>' +
          '<p style="color:var(--ink-soft)">We couldn\'t reach the product database. Check your connection and try again — or photograph the label directly:</p>' +
          '<p class="center mt"><button class="btn btn-ink" id="barcode-photo-fallback4">Photograph the label instead</button></p></div>';
        var fb = document.getElementById("barcode-photo-fallback4");
        if (fb) fb.addEventListener("click", function () {
          result.innerHTML = "";
          if (fileInput) fileInput.click();
        });
      });
  }

  function startBarcodeScan() {
    if (barcodeActive) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      barcodeCameraDenied();
      return;
    }
    if (barcodeBtn) barcodeBtn.disabled = true;
    if (barcodeView) barcodeView.hidden = false;
    result.innerHTML = '<div class="form-ok" role="status"><span class="big">Starting camera…</span>Point at the barcode.</div>';
    loadZXing().then(function () {
      var Z = window.ZXingBrowser;
      var hints = new Map();
      hints.set(Z.DecodeHintType.POSSIBLE_FORMATS, [
        Z.BarcodeFormat.UPC_A, Z.BarcodeFormat.UPC_E,
        Z.BarcodeFormat.EAN_13, Z.BarcodeFormat.EAN_8
      ]);
      barcodeReader = new Z.BrowserMultiFormatReader(hints, 400);
      return navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
    }).then(function (stream) {
      barcodeStream = stream;
      barcodeActive = true;
      return barcodeReader.decodeFromStream(stream, barcodeVideo, function (res, err) {
        if (!barcodeActive) return;
        if (res && res.getText) {
          var code = String(res.getText()).replace(/\D/g, "");
          if (/^[0-9]{8,14}$/.test(code)) {
            stopBarcodeScan();
            lookupBarcode(code);
          }
        }
        /* err is routine (no barcode in frame yet) — ignore. */
      });
    }).catch(function (err) {
      stopBarcodeScan();
      if (err && (err.name === "NotAllowedError" || err.name === "SecurityError")) {
        barcodeCameraDenied();
      } else if (err && err.message === "zxing-cdn") {
        result.innerHTML = '<div class="dossier scan-result" role="status">' +
          '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Scanner failed to load</h3>' +
          '<p style="color:var(--ink-soft)">The barcode reader couldn\'t download. Check your connection and try again — or photograph the label directly.</p></div>';
      } else {
        barcodeCameraDenied();
      }
    });
  }

  if (barcodeBtn) barcodeBtn.addEventListener("click", startBarcodeScan);
  if (barcodeCancel) barcodeCancel.addEventListener("click", function () {
    stopBarcodeScan();
    result.innerHTML = "";
  });

  /* ---- theme toggle ---- */
  var themeBtn = document.getElementById("theme-toggle");
  function syncThemeBtn() {
    if (!themeBtn) return;
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    var icon = themeBtn.querySelector(".tt-icon");
    var label = themeBtn.querySelector(".tt-label");
    if (icon) icon.textContent = dark ? "\u2600\uFE0F" : "\uD83C\uDF19";
    if (label) label.textContent = dark ? "Light" : "Dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var h = document.documentElement;
      var dark = h.getAttribute("data-theme") !== "dark";
      h.setAttribute("data-theme", dark ? "dark" : "light");
      try { localStorage.setItem("cr-theme", dark ? "dark" : "light"); } catch (e) {}
      syncThemeBtn();
    });
    syncThemeBtn();
  }
})();

/* ---- PWA install prompt: Android gets a one-tap install pill,
   iOS gets an Add-to-Home-Screen hint. Dismissible, once per device. ---- */
(function () {
  var KEY = "cr-install-dismissed";
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  /* Already running as the installed app — nothing to promote. */
  if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) return;
  if (window.navigator.standalone) return;

  function dismiss() {
    var el = document.getElementById("cr-install-pill");
    if (el && el.parentNode) el.parentNode.removeChild(el);
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
  }

  function showPill(html, onAction) {
    if (document.getElementById("cr-install-pill")) return;
    var pill = document.createElement("div");
    pill.id = "cr-install-pill";
    pill.setAttribute("role", "dialog");
    pill.setAttribute("aria-label", "Install the Consumer Rising app");
    pill.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;" +
      "background:#232A24;color:#F7F3EA;border-radius:14px;padding:12px 14px;" +
      "display:flex;align-items:center;gap:12px;box-shadow:0 8px 30px rgba(0,0,0,.35);" +
      "font-size:14.5px;line-height:1.4;max-width:520px;margin:0 auto;";
    pill.innerHTML = '<span style="flex:1">' + html + "</span>" +
      '<button type="button" id="cr-install-go" class="btn" style="white-space:nowrap">Install</button>' +
      '<button type="button" id="cr-install-no" aria-label="Dismiss" style="background:none;border:none;color:#F7F3EA;font-size:20px;cursor:pointer;line-height:1">&times;</button>';
    document.body.appendChild(pill);
    document.getElementById("cr-install-no").addEventListener("click", dismiss);
    document.getElementById("cr-install-go").addEventListener("click", function () {
      if (onAction) onAction();
    });
  }

  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || "");
  var deferred = null;

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    showPill("<b>Get the Consumer Rising app.</b><br>One tap — no app store needed.", function () {
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; dismiss(); });
    });
  });

  /* iOS has no install event — show the manual hint after a beat. */
  if (isIOS) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        showPill("<b>Get the Consumer Rising app.</b><br>Tap <b>Share</b>, then <b>Add to Home Screen</b>.", dismiss);
      }, 2500);
    });
  }
})();
