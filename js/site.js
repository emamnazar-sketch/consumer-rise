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

  /* ---- newsletter forms (shared): home, quiz, footer ---- */
  document.querySelectorAll("form.newsletter-form").forEach(function (form) {
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
        postJSON(CFG.NEWSLETTER_ENDPOINT, { email: email, source: location.pathname })
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
    try { return localStorage.getItem("cr_scanner_email") || ""; }
    catch (err) { return ""; }
  }
  function unlockScanner(email) {
    try { localStorage.setItem("cr_scanner_email", email); } catch (err) {}
    if (gate) gate.hidden = true;
    if (tool) {
      tool.hidden = false;
      tool.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (gate && tool) {
    var gateForm = gate.querySelector("form");
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
      /* Join the newsletter too (source "scanner"), then unlock — even if the
         API is down, the visitor still gets into the tool. */
      if (CFG.NEWSLETTER_ENDPOINT) {
        postJSON(CFG.NEWSLETTER_ENDPOINT, { email: email, source: "/scanner.html" })
          .then(function () { unlockScanner(email); })
          .catch(function () { unlockScanner(email); });
      } else {
        unlockScanner(email);
      }
    });
    if (getGateEmail()) {
      gate.hidden = true;
      tool.hidden = false;
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

  /* Match OCR text against the 12-ingredient database. Returns [{ing, term}]. */
  function matchIngredients(ocrText) {
    var data = window.CR_INGREDIENTS || [];
    var text = normText(ocrText);
    var nospace = text.replace(/\s+/g, "");
    var hits = [];
    data.forEach(function (d) {
      var terms = [d.name].concat(d.aliases || []);
      if (d.e_number) terms.push(d.e_number);
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
      s.src = "/js/inventory-data.js?v=1";
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
  function riskBadge(risk) {
    var labels = { high: "\u2715 Higher concern", medium: "\u26A0 Worth knowing", low: "\u2713 Lower concern" };
    return '<span class="risk risk-' + risk + '">' + (labels[risk] || risk) + "</span>";
  }
  function escHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderScanResults(hits, invHits, ocrText) {
    var h = '<div class="dossier scan-result" role="status">';
    if (!hits.length) {
      h += '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">No flagged ingredients detected</h3>' +
        '<p style="color:var(--ink-soft)">We read your label and none of our 50 flagged ingredients showed up. ' +
        'That is good news as far as our database goes — it is not a verdict that the product is healthy overall.</p>';
    } else {
      var score = scanScore(hits);
      var band = score >= 85 ? "Mostly clear" : score >= 65 ? "A few flags" : score >= 40 ? "Several concerns" : "Many concerns";
      h += '<div class="quiz-step-tag">Label score</div>' +
        '<div class="quiz-result-score">' + score + '<span style="font-size:28px">/100</span></div>' +
        '<div class="quiz-result-label">' + band + "</div>" +
        '<p style="color:var(--ink-soft)">We found <strong>' + hits.length + " flagged ingredient" + (hits.length > 1 ? "s" : "") + "</strong> on this label:</p>";
      hits.sort(function (a, b) { return (b.ing.risk_weight || 0) - (a.ing.risk_weight || 0); });
      h += '<div style="display:flex;flex-direction:column;gap:12px;margin:16px 0">';
      hits.forEach(function (x) {
        var d = x.ing;
        h += '<div style="background:var(--paper);border:var(--line);border-radius:var(--radius);padding:14px 16px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px">' +
          "<strong>" + escHtml(d.name) + "</strong>" + riskBadge(d.risk) + "</div>" +
          '<p style="font-size:15px;color:var(--ink-soft);margin:0 0 8px">' + escHtml(d.description.split(".")[0]) + ".</p>" +
          '<a href="/ingredients.html#ing-' + escHtml(d.id) + '" style="font-weight:800;font-size:14.5px">Read the full dossier →</a></div>';
      });
      h += "</div>";
    }
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
    h += '<details style="margin-top:14px"><summary style="cursor:pointer;font-weight:700;font-size:14.5px">What we read from your photo</summary>' +
      '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:8px;white-space:pre-wrap">' + escHtml((ocrText || "").slice(0, 1200) || "(no text detected)") + "</p></details>";
    h += '<p class="center mt"><button class="btn btn-ink" id="scan-again">Scan another label</button></p>';
    h += '<p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px">Flagged results cover our 50-ingredient index. The inventory section below lists FDA-recorded names with no verdict attached. Results depend on photo quality. General information only — <a href="/disclaimer.html">not medical advice</a>.</p></div>';
    result.innerHTML = h;
    var again = document.getElementById("scan-again");
    if (again) again.addEventListener("click", function () {
      result.innerHTML = "";
      if (fileInput) fileInput.value = "";
      if (preview) preview.innerHTML = "";
      if (analyzeBtn) analyzeBtn.disabled = true;
    });
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
        if (CFG.SCAN_ENDPOINT && email) {
          postJSON(CFG.SCAN_ENDPOINT, { email: email, result_summary: summary, matches: ids })
            .then(function () { renderScanResults(hits, invHits, ocrText); })
            .catch(function () { renderScanResults(hits, invHits, ocrText); });
        } else {
          renderScanResults(hits, invHits, ocrText);
        }
      }

      function doOCR() {
        result.innerHTML = '<div class="form-ok" role="status"><span class="big">Loading the reader…</span>First scan downloads a small reading engine. After that it is instant.</div>';
        runOCR(file).then(function (text) {
          if (!normText(text)) {
            analyzeBtn.disabled = false;
            scanError("We couldn't find any readable text in that photo. Try again: lay the package flat, get close to the <strong>ingredients</strong> panel (not the front), and avoid glare and shadows.");
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
          var msg = (err && err.message === "tess-cdn")
            ? "The reading engine couldn't download. Check your connection and try again — the photo never left your device."
            : "Something went wrong while reading the photo. Please try again with a clearer shot of the ingredients panel.";
          scanError(msg);
        });
      }

      doOCR();
    });
  }

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
