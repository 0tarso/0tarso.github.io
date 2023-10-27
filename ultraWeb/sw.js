const CACHE_NAME = 'cacheTesteV2.0'
const urlsToCache = [
    './',
    './index.html',
    './ofertas.html',
    './selenio.html',
    './ultracaps.html',
    './index.js',
    './assets/css/index.css',
    './assets/css/ofertas.css',
    './assets/css/selenio.css',
    './assets/css/ultracaps.css'
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    )
    return self.skipWaiting()
})


// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.map(function(cacheName) {
//               console.log(cacheName)
//                   // Verifica se o nome do cache mudou
//               if(cacheName !== CACHE_NAME){
//                   return caches.delete(cacheName);
//               }
//           })
//         );
//       })
//     );
//   });

// self.addEventListener('activate', event => {
//     event.waitUntil(self.clients.claim())
// })


// self.addEventListener('fetch', event =>{
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             return response || fetch(event.request)
//         })
//     )
// })

// self.addEventListener('install', function(event){
//     event.waitUntil(
//         caches.open(cacheName).then(function (cache){
//             cache.addAll([
//                 './',
//                 './index.html',
//                 './manifest.webmanifest',
//                 './index.js',
//                 './ofertas.html',
//                 './selenio.html',
//                 './ultracaps.html'
//             ])
//         })
//     )
//     return self.skipWaiting()
// })

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(CACHE_NAME);
    try{
        const refresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}