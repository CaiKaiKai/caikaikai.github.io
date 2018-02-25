var CACHE_NAME = 'mycache-v1';
var urlsToCache = [
	'/',
	'assets/css/main.css',
	'assets/css/font-awesome.min.css',
	'assets/js/main.js'
];

self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache){
			console.log('Open cache')
			return cache.addAll(urlsToCache);
		})
	)
})

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			caches.open(CACHE_NAME).then(function(cache){
				cache.put(event.request,responseToCache);
			});
			return response;
		})
	)
})

self.addEventListener('active',function(event){
	var cacheWhitelist = ['page1-v1','page2-v2'];
	event.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(
				cacheNames.map(function(cacheName){
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
})