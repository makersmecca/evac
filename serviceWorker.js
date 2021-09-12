const staticChargeSpot = "chargespot_v3.6"
console.log('hello from service worker');
const assets = [
    "/",
    "/index.html",
    "/about.html",
    "/contact.html",

    "/css/style.css",
    "/css/about.css",
    "/css/contact.css",
  
    "/js/script.js",

    "https://code.jquery.com/jquery-3.4.1.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    
    "https://fonts.googleapis.com/css?family=Syncopate",
    "https://fonts.googleapis.com/css?family=Nanum Gothic",
    "https://fonts.googleapis.com/css?family=Prompt",

    "/images/icon/512px.png",
    "/images/icon/384px.png",
    "/images/icon/256px.png",
    "/images/icon/192px.png",
    "/images/icon/144px.png",
    "/images/icon/128px.png",
    "/images/icon/96px.png",
    "/images/icon/72px.png",
    "/images/icon/64px.png",
    "/images/icon/48px.png",
    "/images/icon/32px.png",
    "/images/icon/24px.png",
    "/images/icon/16px.png"

]

//install event
self.addEventListener("install", installEvent =>
{
    installEvent.waitUntil
    (
        caches.open(staticChargeSpot).then(cache=>
            {
                cache.addAll(assets)
                console.log('caching assets')
            })
    );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticChargeSpot)
        .map(key => caches.delete(key))
      );
    })
  );
});

//fetch event

self.addEventListener("fetch", fetchEvent =>
{
    fetchEvent.respondWith
    (
        caches.match(fetchEvent.request).then(res=>
            {
                return res||fetch(fetchEvent.request)
            })
    );
});
