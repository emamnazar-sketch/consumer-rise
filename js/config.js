/* ConsumerRise — shared front-end config.
   Hook up real backends later by filling in these values (one-line changes).
   All values default to null = static/demo behavior with graceful fallbacks. */
window.CR_CONFIG = {
  // POST JSON {email, source} — e.g. a Kit/ConvertKit form endpoint or
  // Cloudflare Pages Function URL. null = store locally + show success state.
  NEWSLETTER_ENDPOINT: null,

  // POST JSON {name, email, subject, message} for the contact form.
  // null = show success state without sending (demo).
  CONTACT_ENDPOINT: null,

  // POST multipart/form-data {photo} -> {ingredients:[...]} for the scanner.
  // null = scanner shows the "analysis coming soon" state (documented TODO).
  SCANNER_API: null,

  // Set to a Stripe Payment Link / Checkout URL when Pro billing is wired.
  // null = Pro trial button shows the "opening soon" notice (documented TODO).
  PRO_CHECKOUT_URL: null,

  CONTACT_EMAIL: "hello@consumerrising.com",
  SCANS_PER_DAY_FREE: 3
};
