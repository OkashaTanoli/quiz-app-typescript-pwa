const cache_name = "quiz_cache";
const cache_files = [
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    'index.html',
    '/'
]

self.addEventListener('activate', () => {

})

self.addEventListener('install', (e) => {
    e.waitUntill(
        caches.open(cache_name).then((cache) => {
            return cache.addAll(cache_files)
        })
            .catch((err) => {
                console.log(err)
            })
    )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    )
})