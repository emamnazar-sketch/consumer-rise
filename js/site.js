/* ConsumerRise — shared site JS: nav, newsletter forms, contact, scanner gate, misc. */
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

  /* ---- newsletter forms (shared): home, pro page ---- */
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
          "Watch your inbox every Tuesday at 7am. First finding lands this week."
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

  function analysisComingSoon(extra) {
    return '<div class="dossier scan-result" role="status">' +
      '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Analysis is being built</h3>' +
      '<p style="color:var(--ink-soft)">The photo stays on your device — nothing was uploaded. ' +
      'Automatic label decoding is not connected yet. Until then, compare what you see ' +
      'against the <a href="/ingredients.html">Ingredient Index</a>: search any word from the ' +
      'ingredients list and check its risk rating.</p>' +
      (extra || "") + "</div>";
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", function () {
      var email = getGateEmail();
      var finish = function (remaining) {
        var note = (typeof remaining === "number")
          ? '<p style="color:var(--ink-soft);margin-top:12px"><strong>Free scans left today: ' + remaining + '.</strong></p>'
          : "";
        result.innerHTML = analysisComingSoon(note);
      };
      if (CFG.SCAN_ENDPOINT && email) {
        result.innerHTML = '<div class="form-ok" role="status"><span class="big">One moment…</span>Checking your free scans.</div>';
        analyzeBtn.disabled = true;
        postJSON(CFG.SCAN_ENDPOINT, { email: email })
          .then(function (res) {
            analyzeBtn.disabled = false;
            if (res && res.ok) { finish(res.remaining); }
            else if (res && res.reason === "limit") {
              result.innerHTML = '<div class="dossier scan-result" role="status">' +
                '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Daily limit reached</h3>' +
                '<p style="color:var(--ink-soft)">You have used your 3 free scans for today. ' +
                'Come back tomorrow — the counter resets every 24 hours. ' +
                'Want unlimited scans? <a href="/pro.html">Pro is coming soon.</a></p></div>';
            }
            else { finish(); }
          })
          .catch(function () { analyzeBtn.disabled = false; finish(); });
      } else if (CFG.SCANNER_API) {
        result.innerHTML = '<div class="form-ok" role="status"><span class="big">Scanning…</span>Reading your label now.</div>';
        /* Real analysis call goes here once SCANNER_API is set (see README). */
      } else {
        finish();
      }
    });
  }

  /* ---- pro trial button ---- */
  var proBtn = document.getElementById("pro-trial");
  if (proBtn) {
    proBtn.addEventListener("click", function (e) {
      if (CFG.PRO_CHECKOUT_URL) return; /* let the link work */
      e.preventDefault();
      var note = document.getElementById("pro-note");
      if (note) {
        note.hidden = false;
        note.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
})();
