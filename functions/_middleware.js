/* Canonical host: consumerrising.com (apex). www serves the same site but
   browsers treat it as a DIFFERENT origin — localStorage (where the scanner
   remembers subscribers) does not carry across. 301 www -> apex so there is
   exactly one home for visitor state. */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.consumerrising.com") {
    url.hostname = "consumerrising.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
