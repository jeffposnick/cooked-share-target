self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (
    event.request.method === "GET" &&
    url.pathname.endsWith("/share-target/")
  ) {
    event.respondWith(
      Response.redirect(`https://cooked.wiki/${url.searchParams.get("url")}`)
    );
  }
});
