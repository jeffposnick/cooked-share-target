self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("fetch", (event) => {
  console.log(event);
  const url = new URL(event.request.url);
  console.log(url);
  if (
    event.request.method === "GET" &&
    url.pathname.endsWith("/share-target/")
  ) {
    const redirectUrl = new URL(
      `/${url.searchParams.get("recipeUrl")}`,
      "https://cooked.wiki"
    );
    event.respondWith(Response.redirect(redirectUrl.href));
  }
});
