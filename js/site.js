/* ConsumerRise — shared site JS: nav, newsletter forms, scanner gate, misc. */
(function () {
  "use strict";
  var CFG = window.CR_CONFIG || {};

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

  /* ---- newsletter forms (shared) ---- */
  function okHTML(msg) {
    return '<span class="big">You are in.</span>' + msg;
  }
  document.querySelectorAll("form.newsletter-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var email = (input.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        input.focus();
        input.setAttribute("aria-invalid", "true");
        return;
      }
      var done = function () {
        var box = document.createElement("div");
        box.className = "form-ok";
        box.setAttribute("role", "status");
        box.innerHTML = okHTML(
          "Watch your inbox every Tuesday at 7am. First investigation lands this week."
        );
        form.replaceWith(box);
      };
      if (CFG.NEWSLETTER_ENDPOINT) {
        fetch(CFG.NEWSLETTER_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, source: location.pathname })
        }).then(done).catch(done);
      } else {
        try {
          var list = JSON.parse(localStorage.getItem("cr_newsletter") || "[]");
          if (list.indexOf(email) === -1) list.push(email);
          localStorage.setItem("cr_newsletter", JSON.stringify(list));
        } catch (err) { /* storage unavailable — still show success */ }
        done();
      }
    });
  });

  /* ---- contact form ---- */
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {};
      ["name", "email", "subject", "message"].forEach(function (n) {
        var f = contact.querySelector('[name="' + n + '"]');
        data[n] = f ? f.value.trim() : "";
      });
      if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !data.message) {
        alert("Please fill in your name, a valid email, and your message.");
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
        fetch(CFG.CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).then(done).catch(done);
      } else { done(); }
    });
  }

  /* ---- scanner: email gate -> upload flow ---- */
  var gate = document.getElementById("scan-gate");
  var tool = document.getElementById("scan-tool");
  if (gate && tool) {
    var gateForm = gate.querySelector("form");
    gateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = gateForm.querySelector('input[type="email"]');
      var email = (input.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { input.focus(); return; }
      try { localStorage.setItem("cr_scanner_email", email); } catch (err) {}
      gate.hidden = true;
      tool.hidden = false;
      tool.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    try {
      if (localStorage.getItem("cr_scanner_email")) {
        gate.hidden = true;
        tool.hidden = false;
      }
    } catch (err) {}
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
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", function () {
      if (CFG.SCANNER_API) {
        result.innerHTML = '<div class="form-ok" role="status"><span class="big">Scanning…</span>Reading your label now.</div>';
        /* Real analysis call goes here once SCANNER_API is set (see README). */
      } else {
        result.innerHTML =
          '<div class="dossier scan-result" role="status">' +
          '<h3 style="font-weight:900;text-transform:uppercase;margin-bottom:10px">Analysis is being built</h3>' +
          '<p style="color:var(--ink-soft)">The photo stays on your device — nothing was uploaded. ' +
          'Automatic label decoding is not connected yet. Until then, compare what you see ' +
          'against the <a href="/ingredients.html">Ingredient Index</a>: search any word from the ' +
          'ingredients list and check its risk rating.</p></div>';
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
