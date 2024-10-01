(function(){"use strict";var e={9413:function(e,t,n){var o=n(5130),i=n(6768);function r(e,t,n,o,r,c){const a=(0,i.g2)("Header"),s=(0,i.g2)("router-view"),l=(0,i.g2)("Footer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(a),(0,i.bF)(s),(0,i.bF)(l)],64)}var c=n(4232);const a={class:"header"},s={class:"header__menu"},l={class:"header__text"},u={class:"header__description"},d={class:"header__title"};function f(e,t,n,o,r,f){const m=(0,i.g2)("Menu");return(0,i.uX)(),(0,i.CE)("header",a,[(0,i.Lk)("div",s,[(0,i.bF)(m,{onGetTitleInfo:f.getTitleInfo},null,8,["onGetTitleInfo"])]),(0,i.Lk)("div",l,[(0,i.Lk)("div",u,[(0,i.Lk)("p",null,(0,c.v_)(r.description),1)]),(0,i.Lk)("div",d,[(0,i.Lk)("h1",null,(0,c.v_)(r.title),1)])])])}var m=n.p+"img/logo-blue.43412c48.svg",v=n.p+"img/search-icon.ae59dce8.svg",p=n.p+"img/arrow-icon.ab4040c5.svg";const _={class:"menu"},h={class:"menu__block"},b={class:"menu__items"};function g(e,t,n,o,r,a){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",_,[(0,i.Lk)("div",h,[t[6]||(t[6]=(0,i.Lk)("div",{class:"menu__logo"},[(0,i.Lk)("img",{class:"menu__logo--image",src:m,alt:""})],-1)),(0,i.Lk)("ul",b,[(0,i.bF)(s,{to:"/",class:"menu__item",onClick:t[0]||(t[0]=e=>a.setActive("home"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"home"===r.activeItem})},"Home",2)])),_:1}),(0,i.bF)(s,{to:"/about",class:"menu__item",onClick:t[1]||(t[1]=e=>a.setActive("about"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"about"===r.activeItem})},"About",2)])),_:1}),(0,i.bF)(s,{to:"/aso",class:"menu__item",onClick:t[2]||(t[2]=e=>a.setActive("aso"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"aso"===r.activeItem})},"Aso",2)])),_:1}),(0,i.bF)(s,{to:"/technologies",class:"menu__item",onClick:t[3]||(t[3]=e=>a.setActive("technologies"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"technologies"===r.activeItem})}," Technologies ",2)])),_:1}),(0,i.bF)(s,{to:"/ourteam",class:"menu__item",onClick:t[4]||(t[4]=e=>a.setActive("our_team"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"our_team"===r.activeItem})},"OUR TEAM",2)])),_:1}),(0,i.bF)(s,{to:"/contact",class:"menu__item",onClick:t[5]||(t[5]=e=>a.setActive("contact"))},{default:(0,i.k6)((()=>[(0,i.Lk)("li",{class:(0,c.C4)({active__item:"contact"===r.activeItem})},"Contact",2)])),_:1})]),t[7]||(t[7]=(0,i.Lk)("div",{class:"menu__search"},[(0,i.Lk)("img",{class:"menu__search--image",src:v,alt:""})],-1)),t[8]||(t[8]=(0,i.Lk)("div",{class:"menu__btn"},[(0,i.Lk)("button",null,"Get Started"),(0,i.Lk)("img",{src:p,alt:""})],-1))])])}var k={data(){return{activeItem:"home"}},methods:{setActive(e){this.activeItem=e,this.emitTitleInfo(e)},emitTitleInfo(e){let t={};switch(e){case"home":t={description:"perfection in one app",title:"Success Start With nMNH"};break;case"about":t={description:"The Most Effective App",title:"About Us"};break;case"aso":t={description:"The Most Effective App",title:"App Store Optimization"};break;case"technologies":t={description:"The Most Effective App",title:"Our technology"};break;case"our_team":t={description:"The Most Effective App",title:"Our Team"};break;case"contact":t={description:"The Most Effective App",title:"Connection"};break}this.$emit("getTitleInfo",t)}},mounted(){this.setActive(this.activeItem)}},y=n(1241);const A=(0,y.A)(k,[["render",g]]);var C=A,L={data(){return{title:"",description:""}},components:{Menu:C},methods:{getTitleInfo(e){this.title=e.title,this.description=e.description}}};const T=(0,y.A)(L,[["render",f]]);var E=T,O=n.p+"img/logo-white.f213e86a.svg";const w={class:"footer"};function F(e,t,n,o,r,c){return(0,i.uX)(),(0,i.CE)("footer",w,t[0]||(t[0]=[(0,i.Fv)('<div class="footer__info"><div class="footer__logo"><img src="'+O+'" alt=""></div><div class="footer__items"><div class="footer__block"><div class="block__title"><h5>Company</h5></div><div class="block__items"><div class="block__item"><img src="'+p+'" alt=""><p>About us</p></div><div class="block__item"><img src="'+p+'" alt=""><p>ASO</p></div><div class="block__item"><img src="'+p+'" alt=""><p>Team</p></div><div class="block__item"><img src="'+p+'" alt=""><p>Contact Us</p></div></div></div><div class="footer__block"><div class="block__title"><h5>Pool</h5></div><div class="block__items"><div class="block__item"><img src="'+p+'" alt=""><p>Technology</p></div><div class="block__item"><img src="'+p+'" alt=""><p>Projects</p></div><div class="block__item"><img src="'+p+'" alt=""><p>Main Page</p></div></div></div></div><div class="footer__copyright"><p>Copyright © 2024 Appfit</p></div></div>',1)]))}var I={};const S=(0,y.A)(I,[["render",F]]);var j=S,M={components:{Header:E,Footer:j}};const N=(0,y.A)(M,[["render",r]]);var P=N,x=n(1387);const H=[{path:"/",name:"home",component:()=>n.e(973).then(n.bind(n,9973))},{path:"/ourteam",name:"our_team",component:()=>n.e(766).then(n.bind(n,2755))},{path:"/about",name:"about",component:()=>n.e(719).then(n.bind(n,2142))}],B=(0,x.aE)({history:(0,x.LA)("/"),routes:H});var U=B,X=n(782),G=(0,X.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.Ef)(P).use(G).use(U).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var a=!0,s=0;s<o.length;s++)(!1&r||c>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,r<c&&(c=r));if(a){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{719:"a2e32783",766:"a25c7e12",973:"42e0ba05"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{719:"87108f00",766:"9b3d9e58"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nmnh-front:";n.l=function(o,i,r,c){if(e[o])e[o].push(i);else{var a,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,i,r){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",n.nc&&(c.nonce=n.nc);var a=function(n){if(c.onerror=c.onload=null,"load"===n.type)i();else{var o=n&&n.type,a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=a,c.parentNode&&c.parentNode.removeChild(c),r(s)}};return c.onerror=c.onload=a,c.href=t,o?o.parentNode.insertBefore(c,o.nextSibling):document.head.appendChild(c),c},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){i=c[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var c=n.miniCssF(o),a=n.p+c;if(t(c,a))return i();e(o,a,null,i,r)}))},i={524:0};n.f.miniCss=function(e,t){var n={719:1,766:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var c=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,i[1](a)}};n.l(c,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,c=o[0],a=o[1],s=o[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var u=s(n)}for(t&&t(o);l<c.length;l++)r=c[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunknmnh_front"]=self["webpackChunknmnh_front"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9413)}));o=n.O(o)})();
//# sourceMappingURL=app.45314a9e.js.map