(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(212),c=t(216),s=t(213);t(290);var l=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{id:"bio-card",className:"card"},r.a.createElement("header",{className:"card-header is-shadowless"},r.a.createElement("p",{class:"card-header-title is-centered is-size-3 has-text-white custom-header"},"BIO"),r.a.createElement("div",{className:"card-header-icon"},r.a.createElement(i.a,{to:"/about"},r.a.createElement("span",{className:"icon"},r.a.createElement(s.a,{icon:"chevron-circle-left",color:"white"}))))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content has-text-center has-text-white"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur maxime et a officia, laborum deserunt quod. Excepturi mollitia eveniet qui tempore doloremque, eius rerum natus corporis soluta quisquam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur cumque ratione deleniti possimus voluptate soluta at id molestiae, fugit modi odio fuga pariatur tempora quibusdam facere. Facere, vel ex? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In culpa, distinctio enim non numquam dolores hic consectetur ab id, eligendi corrupti dolorum veritatis nisi error ipsa possimus sint? Facilis, sapiente!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde adipisci explicabo sapiente ducimus ullam velit accusamus sunt! Ipsa iusto sint aspernatur quia consequuntur minima ea assumenda incidunt excepturi ducimus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, dolores! Eveniet natus ut minus quia eos labore, pariatur unde facilis. Impedit distinctio temporibus dolores possimus quo, recusandae unde. Ea, excepturi."))))},n}(n.Component);a.default=l},212:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),i=t(66),c=t.n(i);t.d(a,"a",function(){return c.a});t(214),t(7).default.enqueue;var s=r.a.createContext({});function l(e){var a=e.staticQueryData,t=e.data,n=e.query,i=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var a=e.data,t=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(l,{data:a,query:t,render:n||i,staticQueryData:e})})}},214:function(e,a,t){var n;e.exports=(n=t(218))&&n.default||n},216:function(e,a,t){"use strict";var n=t(217),r=t(0),i=t.n(r),c=t(219),s=t.n(c),l=t(212),o=t(215),m=(t(220),function(e){var a=e.siteSymbol;return i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(o.b,{content:"Home",className:"Home",placement:"right",arrow:"true"},i.a.createElement(l.a,{to:"/",className:"navbar-item "},i.a.createElement("div",{className:"initials"},a)))))))}),u=t(213),d=(t(221),function(){return i.a.createElement("ul",null,i.a.createElement(o.a,{delay:1e3},i.a.createElement("li",{className:"is-hidden-mobile"},i.a.createElement(l.a,{to:"/dashboard",activeClassName:"active-link"},i.a.createElement(o.b,{content:"Dashboard",className:"Dashboard",placement:"right-end",arrow:"true"},i.a.createElement("span",{className:"icon"},i.a.createElement(u.a,{icon:"th-large",size:"lg",color:"black"}))))),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/projects",activeClassName:"active-link"},i.a.createElement(o.b,{content:"Projects",className:"Projects",placement:"right-end",arrow:"true"},i.a.createElement("span",{className:"icon"},i.a.createElement(u.a,{icon:"briefcase",size:"lg",color:"black"}))))),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about",activeClassName:"active-link"},i.a.createElement(o.b,{content:"About",className:"About",placement:"right-end",arrow:"true"},i.a.createElement("span",{className:"icon"},i.a.createElement(u.a,{icon:"brain",size:"lg",color:"black"}))))),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/contact",activeClassName:"active-link"},i.a.createElement(o.b,{content:"Contact",className:"Contact",placement:"right-end",arrow:"true"},i.a.createElement("span",{className:"icon"},i.a.createElement(u.a,{icon:"address-card",size:"lg",color:"black"})))))))}),p=function(){return i.a.createElement("div",{className:"hero-foot"},i.a.createElement("nav",{className:"tabs is-fullwidth"},i.a.createElement("div",{className:"container"},i.a.createElement(d,null))))};t(222),a.a=function(e){var a=e.children;return i.a.createElement(l.b,{query:"991711005",render:function(e){return i.a.createElement("div",null,i.a.createElement(s.a,{siteSymbol:e.site.siteMetadata.symbol,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("section",{className:"hero is-fullheight"},i.a.createElement(m,{siteSymbol:e.site.siteMetadata.symbol}),i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container has-text-centered"},i.a.createElement("div",{className:"site-content"},a))),i.a.createElement(p,null)))},data:n})}},217:function(e){e.exports={data:{site:{siteMetadata:{symbol:"D|M"}}}}},218:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),r=t.n(n),i=t(95);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=component---src-pages-bio-js-11fe5c9979e21b5aeb21.js.map