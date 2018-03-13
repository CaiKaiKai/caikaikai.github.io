var CACHE_NAME = 'my-cache-v1'
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                "/"
            ]);
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

// 联网状态下执行
function onlineRequest(fetchRequest) {
    // 使用 fecth API 获取资源，以实现对资源请求控制
    return fetch(fetchRequest).then(response => {
        // 在资源请求成功后，将 image、js、css 资源加入缓存列表
        if (
            !response
            || response.status !== 200
            || !response.headers.get('Content-type').match(/image|javascript|test\/css/i)
        ) {
            return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
            .then(function (cache) {
                cache.put(event.request, responseToCache);
            });
        return response;
    })
}

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {

            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if (response) {
                return response;
            }

            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            var request = event.request.clone(); // 把原始请求拷过来
            return onlineRequest(request)
        })
    );
});
