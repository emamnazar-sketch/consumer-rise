/* Consumer Rising — shared front-end config.
   API endpoints below are Cloudflare Pages Functions in /functions (repo).
   They need the D1 database + binding "DB" wired up in the Pages dashboard
   (see README). If a call fails, forms fall back gracefully — never lose a signup. */
window.CR_CONFIG = {
  // POST JSON {email, source} → /functions/api/subscribe.js (D1 subscribers table)
  NEWSLETTER_ENDPOINT: "/api/subscribe",

  // POST JSON {name, email, subject, message} → /functions/api/contact.js (D1)
  CONTACT_ENDPOINT: "/api/contact",

  // POST JSON {email} → /functions/api/scan.js — enforces 3 free scans/day per email (D1)
  SCAN_ENDPOINT: "/api/scan",

  // POST multipart/form-data {photo} -> {ingredients:[...]} for REAL label analysis.
  // null = scanner shows the honest "analysis being built" state (documented TODO).
  SCANNER_API: null,

  // Set to a Stripe Payment Link / Checkout URL when Pro billing is wired.
  // null = Pro trial button shows the "opening soon" notice (documented TODO).
  PRO_CHECKOUT_URL: null,

  CONTACT_EMAIL: "hello@consumerrising.com",
  SCANS_PER_DAY_FREE: 3
};
