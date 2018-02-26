


self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-cache-v1').then(function (cache) {
            return caches.addAll(
                "/",
				"/assets/css/main.css",
				"/images/banner.jpg",
				"/images/spotlight01.jpg",
				"/images/spotlight02.jpg",
				"/images/spotlight03.jpg",
				"/images/gallery/fulls/01.jpg",
				"/images/gallery/fulls/02.jpg",
				"/images/gallery/fulls/03.jpg",
				"/images/gallery/fulls/04.jpg",
				"/assets/css/font-awesome.min.css",
				"/assets/js/jquery.min.js",
				"/assets/js/jquery.scrollex.min.js",
				"/assets/js/jquery.scrolly.min.js",
				"/assets/js/skel.min.js",
				"/assets/js/util.js",
				"/assets/js/main.js"
            );
        })
    );
});




self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // 来来来，代理可以搞一些代理的事情

            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if (response) {
                return response;
            }

            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            var request = event.request.clone(); // 把原始请求拷过来
            return fetch(request).then(function (httpRes) {

                // http请求的返回已被抓到，可以处置了。

                // 请求失败了，直接返回失败的结果就好了。。
                if (!httpRes || httpRes.status !== 200) {
                    return httpRes;
                }

                // 请求成功的话，将请求缓存起来。
                var responseClone = httpRes.clone();
                caches.open('my-cache-v1').then(function (cache) {
                    caches.put(event.request, responseClone);
                });

                return httpRes;
            });
        })
    );
});
