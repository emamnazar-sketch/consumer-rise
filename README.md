# ConsumerRise — new static site

Ground-up rebuild of consumerrising.com (previously a Base44 app). Inspired by the old
site's content and purpose; all design, layout, and wording are new.
Base44 app is untouched and kept as rollback.

**Live target:** https://consumerrising.com via Cloudflare Pages (repo-connected).
**Stack:** plain static HTML/CSS/JS — no build step, no backend, no Supabase (parked).

## Design

"Investigative dossier meets nutrition label" — editorial, bold, high-contrast,
print-inspired. Deliberately NOT The Family Ground's forest-green branding.

- Palette: warm paper `#FAF4E8`, ink `#181410`, signal red `#D93A2B`,
  caution amber `#E8960C`, low-risk green `#2F7D4E`
- Type: Archivo (900/800 display + UI), Source Serif 4 (article prose)
- Motifs: thick ink rules, rotated stamp badges, hard offset shadows,
  nutrition-label-style bordered data boxes, breaking-news ticker
- Images: CSS/SVG only — zero external images, zero stock

## Page map

| File | Page |
|---|---|
| `index.html` | Home — hero, newsletter, 6 latest investigation cards, Ingredient Index teaser, scanner teaser, Pro teaser |
| `about.html` | Mission + founder story (rewritten) |
| `investigations.html` | All 7 investigations, newest first |
| `investigations/truth-about-hfcs.html` | Issue #42 — The Truth About High Fructose Corn Syrup (8 min, May 15 2026) |
| `investigations/artificial-sweeteners.html` | Issue #41 — Artificial Sweeteners (8 min, May 7 2026) |
| `investigations/msg.html` | Issue #40 — MSG (5 min, Apr 16 2026) |
| `investigations/trans-fats-hiding.html` | Issue #39 — Trans Fats (7 min, Mar 26 2026) |
| `investigations/hfcs-vs-sugar.html` | Issue #38 — HFCS vs Sugar (6 min, Mar 5 2026) |
| `investigations/red-dye-40.html` | Issue #37 — Red Dye 40 (5 min, Feb 12 2026) |
| `investigations/carrageenan.html` | Issue #36 — Carrageenan (6 min, Jan 22 2026) |
| `ingredients.html` | Ingredient Index — 12 entries, live search + risk/category filters (`js/ingredients-data.js`) |
| `scanner.html` | Label scanner — email gate → upload/take-photo UI → analysis state |
| `pro.html` | Pricing — Free $0 vs Pro $12/mo (7-day trial CTA) |
| `resources.html` | Research links (FDA, PubMed, EFSA, CSPI, EWG, Consumer Reports), 4 coming-soon toolkits, 3 books |
| `faq.html` | 8-question accordion |
| `contact.html` | Contact form + hello@consumerrising.com |
| `privacy.html` / `terms.html` | Rewritten policies, dated May 2026 |
| `404.html`, `robots.txt`, `sitemap.xml` | Standard |

Shared: `css/style.css`, `js/config.js` (all backend endpoints in ONE place),
`js/site.js` (nav, newsletter/contact forms, scanner gate, pro notice).

## TODOs (backend hookups — all one-line changes in `js/config.js`)

1. **Newsletter endpoint** — `NEWSLETTER_ENDPOINT: null`. Set to the Kit/email
   form endpoint (POST JSON `{email, source}`). Until then, signups are stored
   in the visitor's own `localStorage` and show a success state.
2. **Scanner analysis API** — `SCANNER_API: null`. Needs a real image-analysis
   backend: accept a label photo, return flagged ingredients matched to the
   index. Until then, the scanner shows an honest "analysis being built" state
   and the photo never leaves the device.
3. **Pro checkout** — `PRO_CHECKOUT_URL: null`. Set to a Stripe Payment Link /
   Checkout URL for the $12/mo plan. Until then, the trial button shows an
   "opening soon" notice and captures the email via the newsletter form.
4. **Contact form delivery** — `CONTACT_ENDPOINT: null`. POST JSON
   `{name, email, subject, message}` to an inbox/forwarding endpoint.
   Until then, shows a success state without sending.
5. **Archive** — the old nav had a dead `/archive` link; the investigations
   index replaces it. Old `/home`, `/fast`, `/fast-admin` routes were 404s and
   are intentionally not carried over.
6. **Toolkit downloads** — the 4 resource downloads (Label Reader Checklist,
   Shopping List Template, Restaurant Guide, School Lunch Advocacy Toolkit)
   are "coming soon" cards; generate the PDFs when ready.
7. **Supabase** — parked (org at free-plan limit). If a project frees up, the
   scanner gate + newsletter could move to Supabase Auth/tables.

## Local preview

```
cd site && python3 -m http.server 8080
# open http://localhost:8080/
```

## Deploy

Push to `master` → Cloudflare Pages project `consumer-rise` (connected to
`emamnazar-sketch/consumer-rise`) auto-deploys. Custom domains:
consumerrising.com + www.consumerrising.com.
