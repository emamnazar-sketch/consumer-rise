/* Consumer Rising — shared front-end config.
   API endpoints below are Cloudflare Pages Functions in /functions (repo).
   They need the D1 database + binding "DB" wired up in the Pages dashboard
   (see README). If a call fails, forms fall back gracefully — never lose a signup. */
window.CR_CONFIG = {
  // POST JSON {email, source} → /functions/api/subscribe.js (D1 subscribers table)
  NEWSLETTER_ENDPOINT: "/api/subscribe",

  // POST JSON {name, email, subject, message} → /functions/api/contact.js (D1)
  CONTACT_ENDPOINT: "/api/contact",

  // POST JSON {email} → /functions/api/scan.js — records scans per email (D1) — unlimited, free forever
  SCAN_ENDPOINT: "/api/scan",

  // OCR runs on-device (Tesseract.js) — the photo never leaves the phone.
  // /api/scan only counts scans + stores the matched ingredient IDs and score.

  CONTACT_EMAIL: "consumerrising@gmail.com",
};
