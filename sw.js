/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw-toolbox-scripts.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["./","1a676f054a8ec2a6550c1b9326d04a7d"],["bower_components/es6-promise/dist/es6-promise.min.js","239d8d58b48e714e652b98b51b4aa834"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","2c53f5231be8b6a0faefaa47d3e2137f"],["bower_components/webcomponentsjs/webcomponents.min.js","7ed13199f438d50e134e909f00eb4eec"],["data-worker-scripts.js","4c70c35911ff0945dc91b64d8483b3bb"],["elements/critical.html","4abca638bf392a82b4f70352a55564df"],["elements/elements.html","f0c8468c17be497179e0db8ae4527462"],["elements/elements.js","39ae74a5bff981cf21439dd80a767530"],["elements/embed-elements.html","12cfc661ebaa3ba3a53d271dcfc849f8"],["elements/embed-elements.js","7c694cf7ab46eea6e0c5db3e12dbc6c8"],["favicon.ico","bdd381fe7a8825bcf664b7f1ca96431f"],["humans.txt","f63669c9a2d29cd348c84fed113f750b"],["images/attend/after-hours-icon.svg","7d9018d4851b4d747ad1d83c68b30e91"],["images/attend/after-hours.jpg","6db57d0f9b0a7c0c38c4178b6dbef092"],["images/attend/airplane-icon.svg","a1f17662ab237b5133ef12fcf840f1ef"],["images/attend/code-labs-icon.svg","82dbb5bb261407a3869dfd3d8d78db7f"],["images/attend/hotels-icon.svg","26eeb883f66dbb4201d66b167650efd5"],["images/attend/io-attending-landscape.jpg","7ccf73b4d415959817ce250be347d987"],["images/attend/map-card.jpg","ee0a3b92d829312e817b8950d4bc5318"],["images/attend/office-hours-icon.svg","99905a3e9d2edd6ec76341318a70dfe4"],["images/attend/parking-icon.svg","d70cfc9a8c6299e2d2481bf5823ad358"],["images/attend/sandbox-icon.svg","8cd4e01a30a3de419e40a0ed7d4dd679"],["images/attend/tram-icon.svg","4119269c24b1c39bead3640e5f238138"],["images/extended/icon-embed.svg","3298aed892466dc34a0887ea7d247585"],["images/extended/icon-find.svg","ab74351002f2cf417870af837402bd57"],["images/extended/icon-host.svg","6a9c9709ddf28ef523ceb036883215b8"],["images/extended/io-extended-group.jpg","a883e4c69a66dcf13e35d0b4a02d32f3"],["images/extended/pin.svg","52f039ffbd018a8e602be697f0860221"],["images/google-logo.svg","1756bd6e5107dc4acef2f81f5157bd15"],["images/hash.png","abca25acebb323f337284d6c4619e801"],["images/hash2.png","882a3e1aa05d488df7266d435589c3c4"],["images/home/icons/ads.png","5dc1b276e2dda4e5e78da5595bd35928"],["images/home/icons/afterhours.png","2326834381ff679b31c96463e2f2464f"],["images/home/icons/android.png","60971ba251e48f2a81a27fac8f84a3da"],["images/home/icons/androidstudio.png","86764a5c639be823e0b74a41900dafbe"],["images/home/icons/auto.png","2d1ab982981c6a0e61d3748f830805db"],["images/home/icons/cloud.png","e7eca9b74812a247af1117048cd3a7bf"],["images/home/icons/design.png","d3e17d04912846ea980bf528ee1b1b66"],["images/home/icons/firebase.png","cea0bcf6746b5d8cf87de92e5f810c79"],["images/home/icons/games.png","e8178d9dc1d08209b1c7cb6bbbafe892"],["images/home/icons/grow-earn.png","c379e4a015da8ca9465edcf7b0c93e0f"],["images/home/icons/iot.png","e065ddb2215c784084304b9193c3cf94"],["images/home/icons/keynote.png","d88837e21ca3d198aecadb3754383b26"],["images/home/icons/location-maps.png","38d3e31345900f7d918e16901026e3f8"],["images/home/icons/misc.png","e056d881adc2c427e04362c3198ea7c9"],["images/home/icons/mobileweb.png","1e24df326190796d3b0dfe66d36ae430"],["images/home/icons/play.png","08e4bda68346598bd0d7b95312341574"],["images/home/icons/search.png","42c67796e8eb6291fab1554272fae5ba"],["images/home/icons/tv-livingroom.png","bdff1a7bd2f1be2e7c02d2199e19fc07"],["images/home/icons/video-playlist.png","471255c363355c5dc8f654562d8442fb"],["images/home/icons/vr.png","abb0cd2b8ec85a60466e408b26377cb5"],["images/home/icons/wear.png","8860856a04d2282d5865ee5d6f675e26"],["images/home/io16-youtube360_tout.png","e2a9a4c50be719e4a2cfb0cc7207bd0a"],["images/home/photo-1.jpg","149816dfc9df65e73d340a0d53116e72"],["images/home/photo-2.jpg","10d227489500d98476d7c37be56b8e5a"],["images/home/photo-3.jpg","8540816caa108f78faf8cfbaf6543ee6"],["images/home/photo-4.jpg","6ac9f7a7fc423b0f686e5f53acf19625"],["images/home/photo-5.jpg","6fa7bdf2236ec9c025b19df18b4fe119"],["images/home/sundar_key.jpg","8010f20b1f92f75bcdd332d65413db35"],["images/io-logo-grey-small.png","4c3836ca9ea2b75da599d5d92170c6fa"],["images/io-logo-grey.png","7101fa1d7210ce62ccb422bbbfa730f4"],["images/io-logo-white.png","d8fc2e3a50277c0ae3acc4cc5b58870e"],["images/io.png","e188f1f196e127439d6678d96e5052cc"],["images/io16-social.jpg","ddf76ad365938afbf432aa8ed7ca60a5"],["images/play-video-button.png","da276ad5d856cb37b4467caa1c768d68"],["images/schedule/channel1.png","b99c62d7324ba9ea03e66e3807f2e9bf"],["images/schedule/channel2.png","bd0dcab71781d69b5c3b2cbd90f02070"],["images/schedule/channel3.png","5a8b285e10b5559b52d655369bdaa807"],["images/schedule/channel4.png","c7650b6a2db62327578191c0b4f51150"],["images/schedule/profile_placeholder.png","c38fe831bf1432757e5d19331e88e95b"],["images/schedule/session_placeholder.jpg","3d51105294fa060a398121b75d962d3f"],["images/schedule/tracks/io16-track_icons-mobile-IoT.png","51787a01767abd0df7408a23b5a4001f"],["images/schedule/tracks/io16-track_icons-mobile-android.png","d248313c8a15c222cb53d555c6d0a844"],["images/schedule/tracks/io16-track_icons-mobile-android_studio.png","dc567754c9c2f92c986bf9762237fb06"],["images/schedule/tracks/io16-track_icons-mobile-auto.png","adcd2cd7ab24694472b0d164007b1301"],["images/schedule/tracks/io16-track_icons-mobile-cast_tv.png","178a8c71b7a7eaecfc27692f061b7b6d"],["images/schedule/tracks/io16-track_icons-mobile-cloud.png","d8b215e3d279705a45813c26ce50c0de"],["images/schedule/tracks/io16-track_icons-mobile-design.png","941227e49436e118778f3960703fb6be"],["images/schedule/tracks/io16-track_icons-mobile-firebase.png","19a2ffdc5289f1fb6904856f705802f2"],["images/schedule/tracks/io16-track_icons-mobile-firebase_newlogo.png","a492485048d6ecd55e84afc040e217ab"],["images/schedule/tracks/io16-track_icons-mobile-games.png","52422c04faabcca481b212ebae89ea7b"],["images/schedule/tracks/io16-track_icons-mobile-maps.png","968c40ddb683463402d36420dfb5fbc9"],["images/schedule/tracks/io16-track_icons-mobile-mobile_web.png","267aec512f89d2672f111bc8d351c09e"],["images/schedule/tracks/io16-track_icons-mobile-monetization.png","5729653842ed3d81088d6985ff202672"],["images/schedule/tracks/io16-track_icons-mobile-play.png","c20750a6c1adceb779f22733f693c259"],["images/schedule/tracks/io16-track_icons-mobile-search.png","09eedea77ef8b58404f5300ac4618b7c"],["images/schedule/tracks/io16-track_icons-mobile-vr.png","b792c867b290ecab000fe588b3194f5a"],["images/schedule/tracks/io16-track_icons-mobile-wear.png","43b661ecaa75398e6ee4182ee87e623b"],["images/share-twitter.svg","4bbd29384a998d765ed5929586f0cef0"],["images/touch/homescreen144.png","bf0eaa3c5c0b9c1f918859feca1c7c7e"],["images/touch/homescreen192.png","0112f23b082ec79f94ee61a7422c40b4"],["images/touch/homescreen256.png","ddb3d9bf8a529fd481d59706236a6fd8"],["images/touch/homescreen48.png","9d64ec879b40b5e5e1e95e0119176cb4"],["images/touch/homescreen72-fav.png","ba2cc710894f790ff2af2f9744d389c5"],["images/touch/homescreen72.png","ec26c58dc3eee95815dd7e3c91884af6"],["images/touch/homescreen96.png","9b03938099f09f0903605afa605931ff"],["scripts/site-libs.js","6b2c960af25503eaaf65ae9038bba7e8"],["scripts/site-scripts.js","0dbf7f034b56657ea921bead025b1722"],["scripts/sw-toolbox-scripts.js","d27348e40040b77ba730d87e6653640e"],["styles/main.css","9b0161149bfca0857aff9ae6880adc81"],["styles/pages/error.css","1c1a277d38fd10f4c948a82c366bd319"],["styles/pages/permissions.css","aa2cf63a6e17fd3cdb56be4b3edd8fb9"],["styles/pages/upgrade.css","9ba908e30935b142a46badcb1a16ad45"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-iowebapp2016-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = './';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted(["\\/attend$","\\/extended$","\\/faq$","\\/home$","\\/schedule$"], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});



