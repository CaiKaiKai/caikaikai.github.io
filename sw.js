var CACHE_NAME = 'my-cache-v1.1'
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                "/"
            ]);
        }).then(function(){
        	self.skipWaiting();
        })
    );
});
self.addEventListener('activate', function (event) {
    event.waitUntil(
        Promise.all([

            // 更新客户端
            self.clients.claim(),
			
            // 清理旧版本
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {

            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if (response) {
                return response;
            }

            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            var request = event.request.clone(); // 把原始请求拷过来
        	return fetch(request).then(function (httpRes) {

                // 请求失败了，直接返回失败的结果
                if (!httpRes || httpRes.status !== 200||!httpRes.headers.get('Content-type').match(/image|javascript|font\/woff2|text\/css/i)) {
                    return httpRes;
                }
                // 请求成功的话，将请求缓存起来。
                var responseClone = httpRes.clone();
                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return httpRes;
            });   
        })
    );
});
