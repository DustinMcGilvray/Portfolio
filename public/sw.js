/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-df994a296fcbe0884754.js"
  },
  {
    "url": "app-70aa0c03229e92baf135.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-834462eb16110953f3e9.js"
  },
  {
    "url": "index.html",
    "revision": "917036e95e5a5b08ab1ee17a8e4eb61d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "46569af6d8fcbb958ef83f5ff13df232"
  },
  {
    "url": "styles.dc534a5da5985ac1e176.css"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v14/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2",
    "revision": "496b0ee7c32c16da8c6289fa8aae5268"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v14/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2",
    "revision": "de8f0fad9511acf7b9f69d6ce453e946"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v15/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2",
    "revision": "496b0ee7c32c16da8c6289fa8aae5268"
  },
  {
    "url": "google-fonts/s/playfairdisplay/v15/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2",
    "revision": "de8f0fad9511acf7b9f69d6ce453e946"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v12/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7nsDI.woff2",
    "revision": "dac2fca7ba8512baa24172f1171c961f"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v12/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
    "revision": "899c8f78ce650d4009d42443897aa723"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7nsDI.woff2",
    "revision": "dac2fca7ba8512baa24172f1171c961f"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
    "revision": "899c8f78ce650d4009d42443897aa723"
  },
  {
    "url": "styles-06c61b35fe02f09cdd8d.js"
  },
  {
    "url": "1-d698dd8723e4e76ce791.js"
  },
  {
    "url": "component---src-pages-index-js-0964b5227a4f1edc8906.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ec23a0256be6d6923090179df62e284"
  },
  {
    "url": "component---src-pages-404-js-81ff8b2f219b8df2c75d.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "8bc291f233360d1334a28c5cfde8c23d"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "650a42e38f57bc1f2ddf5c4d1957f125"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1af25221641d4867001e11dfaf3daf16"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});