if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,a)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=a(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-eef9d767"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"04fdfa32.js",revision:"2b73fc84361ba9ba9e790daf8d05952b"},{url:"0f11c048.js",revision:"b2a45078897a6cf690b2185f35c84d24"},{url:"13813e6e.js",revision:"c5a39e7326a4f3876d7b3d5abbae2894"},{url:"404.html",revision:"f754f475bda448401ea71dea4e3cae6e"},{url:"48f989b2.js",revision:"8c8cf8bb5b719c408c324148548545bc"},{url:"4a029451.js",revision:"3172cedbd3580d87f3123f27e06ae153"},{url:"7ce667dc.js",revision:"c7906c13b938ee2958f8e41b571080cb"},{url:"d6051293.js",revision:"694f0e71f7716f2ce219431e93b92f29"},{url:"e6aee5cd.js",revision:"d3a646a49310e36e72501a1397ab2b86"},{url:"f2504a0a.js",revision:"0a7eeb80514bb4b195a4be9ec821a548"},{url:"index.css",revision:"b9208c5659304529ecb358b2a88ae8e9"},{url:"index.html",revision:"ccc71f939974e8fdc157023ddaa1c54c"},{url:"manifest.webmanifest",revision:"a17f53bc714f63aaac5724975a4acab0"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET"),e.registerRoute("images/**/*",new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET")}));
