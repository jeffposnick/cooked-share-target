self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (
    event.request.method === "GET" &&
    url.pathname === "/share-target/" &&
    url.searchParams.get("url")
  ) {
    event.respondWith(
      Response.redirect(`https://cooked.wiki/${url.searchParams.get("url")}`)
    );
  }
});
