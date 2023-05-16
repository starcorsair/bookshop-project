(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap);"]),a.push([n.id,'html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nbody * {\r\n  box-sizing: border-box;\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.navigation-panel {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.navigation-panel__logo {\r\n  font-size: 24px;\r\n  line-height: 29px;\r\n  color: #1c2a39;\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  margin-top: 47px;\r\n}\r\n\r\n.navigation-links {\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 10px;\r\n  line-height: 12px;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  list-style: none;\r\n  margin-top: 56px;\r\n  margin-left: 243px;\r\n  width: 391px;\r\n  color: #5c6a79;\r\n}\r\n\r\n.navigation-links__books_active {\r\n  font-weight: 900;\r\n  color: #1c2a39;\r\n}\r\n\r\n.navigation-icons {\r\n  margin-top: 54px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 120px;\r\n  margin-left: 232px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.slider {\r\n  /* position: relative; */\r\n  margin: 20px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.slider__images {\r\n  position: relative;\r\n  width: 1120px;\r\n  height: 702px;\r\n}\r\n/*  МОБИЛЬНЕАЯ ВЕРСИЯ*/\r\n@media (max-width: 768px) {\r\n  .slider {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 680px;\r\n  }\r\n  .slider__images {\r\n    position: relative;\r\n    width: 420px;\r\n    height: 202px;\r\n  }\r\n  .category_books {\r\n    position: relative;\r\n    width: 680px;\r\n  }\r\n  .books {\r\n    position: relative;\r\n    width: 300px;\r\n  }\r\n  .books-list__cover > img {\r\n    height: 50px;\r\n    width: 100px;\r\n  }\r\n  .category {\r\n    position: relative;\r\n  }\r\n  .changebook {\r\n    z-index: 1;\r\n    margin-top: -2%;\r\n    margin-left: 93%;\r\n  }\r\n}\r\n.slider__images .image {\r\n  background-size: cover;\r\n  background-position: center center;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n  transition: opacity 800ms ease;\r\n  margin-top: 25px;\r\n}\r\n\r\n.slider__images .image.active {\r\n  opacity: 1;\r\n}\r\n\r\n.slider__dots {\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  width: 100%;\r\n  margin-top: 40px;\r\n}\r\n\r\n.slider__dots-item {\r\n  width: 10px;\r\n  height: 10px;\r\n  background: #ccc;\r\n  border-radius: 50%;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n  transition: background 0.4s ease;\r\n}\r\n\r\n.slider__dots-item:hover,\r\n.slider__dots-item.active {\r\n  background: #000;\r\n}\r\n\r\n.changebook {\r\n  z-index: 1;\r\n  margin-top: -58%;\r\n  margin-left: 93%;\r\n}\r\n\r\n.topbook {\r\n  z-index: 1;\r\n  margin-left: 100%;\r\n}\r\n.category_books {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.category {\r\n  position: absolute;\r\n  left: 0px;\r\n  width: 416px;\r\n  height: 710px;\r\n  background-color: #efeef6;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 128px;\r\n}\r\n\r\n.category-list__item {\r\n  padding-bottom: 25px;\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  line-height: 15px;\r\n  color: #5c6a79;\r\n  list-style: none;\r\n}\r\n\r\n.category-list__item_active {\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  color: #1c2a39;\r\n  list-style: disc;\r\n}\r\n\r\n.books-list {\r\n  display: flex;\r\n  height: 300px;\r\n  width: 424px;\r\n  margin-bottom: 85px;\r\n}\r\n.books-list:nth-child(odd) {\r\n  margin-right: 76px;\r\n}\r\n.books {\r\n  position: absolute;\r\n  left: 365px;\r\n  top: 155px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.books-list__cover > img {\r\n  height: 327px;\r\n  width: 212px;\r\n}\r\n.books-list__description {\r\n  margin-left: 36px;\r\n  margin-top: 50px;\r\n}\r\n.author {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n  font-size: 10px;\r\n  font-weight: 400;\r\n  line-height: 14px;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n  margin-bottom: 4px;\r\n}\r\n.title {\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  line-height: 20px;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.raiting-list {\r\n  display: flex;\r\n  height: 14px;\r\n  width: 121px;\r\n  border-radius: 0px;\r\n\r\n  margin-bottom: 17px;\r\n}\r\n\r\n.average-raiting {\r\n  height: 12px;\r\n  width: 12px;\r\n  background-color: #f2c94c;\r\n  content: "★";\r\n}\r\n.count-raiting {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n  font-size: 10px;\r\n  font-weight: 400;\r\n  line-height: 14px;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n}\r\n.desc {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n  font-size: 10px;\r\n  font-weight: 400;\r\n  line-height: 14px;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n  color: #5c6a79;\r\n  height: 38px;\r\n  width: 176px;\r\n  margin-bottom: 16px;\r\n}\r\n.price {\r\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  letter-spacing: 0em;\r\n  text-align: left;\r\n  color: #1c2a39;\r\n  margin-bottom: 16px;\r\n}\r\n.button-buy {\r\n  height: 45px;\r\n  width: 176px;\r\n  border: 1px solid #4c3db2;\r\n  color: #4c3db2;\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},a=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],p=o[c]||0,d="".concat(c," ").concat(p);o[c]=p+1;var u=e(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var g=i(f,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function i(n,r){var e=r.domAPI(r);e.update(n);return function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);r[s].references--}for(var l=t(n,i),c=0;c<o.length;c++){var p=e(o[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!n;)n=t[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),i=e.n(t),o=e(569),a=e.n(o),s=e(565),l=e.n(s),c=e(216),p=e.n(c),d=e(589),u=e.n(d),f=e(426),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();r()(f.Z,g);f.Z&&f.Z.locals&&f.Z.locals,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;const m=document.querySelector(".category-list__architecture"),h=document.querySelector(".category-list__art-and-fashion");function v(n){n.preventDefault(),fetch('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDYN6BzMhLTqiOfRK5RpIWRRK9yW__2KVY&printType=books&startIndex=0&maxResults=6&langRestrict=en').then((n=>n.json())).then((n=>{console.log(n);const r=document.querySelector(".books");n.items.forEach((n=>{let e=`<div class="books-list">\n                        <div class="books-list__cover" >\n                            <img src=${n.volumeInfo.imageLinks.thumbnail}></div>\n                            <div class="books-list__description">\n                                <p class="author">${n.volumeInfo.authors}</p>\n                                <p class="title">${n.volumeInfo.title}</p>\n                                <div class="raiting-list">\n                                <span class="average-raiting">${n.volumeInfo.averageRating}</span>\n                                <p class="count-raiting">${n.volumeInfo.ratingsCount}</p></div>\n                                <div class="desc">${t=n.volumeInfo.description,i=100,t.length<=i?t:t.substr(0,i)+"..."}</div>\n                                <p class="price">${n.saleInfo.retailPrice}</p>\n                                <div class="books-list__button">\n                                    <button class="button-buy">buy now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`;var t,i;r.innerHTML+=e}))}))}m.addEventListener("click",v),h.addEventListener("click",v),document.addEventListener("DOMContentLoaded",v);let x=[{url:"images/banner1.png"},{url:"images/banner2.png"},{url:"images/banner3.png"}];let y={dots:!0,autoplay:!0,autoplayInterval:5e3};document.addEventListener("DOMContentLoaded",(function(){!function(n){if(!x||!x.length)return;n=n||{dots:!0,autoplay:!1};let r=document.querySelector(".slider__images"),e=document.querySelector(".slider__dots");function t(t){r.querySelector(".active").classList.remove("active"),r.querySelector(".n"+t).classList.add("active"),n.dots&&(e.querySelector(".active").classList.remove("active"),e.querySelector(".n"+t).classList.add("active"))}x.forEach(((n,e)=>{let t=`<div class="image n${e} ${0===e?"active":""}" style="background-image:url(${x[e].url});" data-index="${e}"></div>`;r.innerHTML+=t})),n.dots&&(x.forEach(((n,r)=>{let t=`<div class="slider__dots-item n${r} ${0===r?"active":""}" data-index="${r}"></div>`;e.innerHTML+=t})),e.querySelectorAll(".slider__dots-item").forEach((n=>{n.addEventListener("click",(function(){t(this.dataset.index)}))}))),n.autoplay&&setInterval((()=>{let n=+r.querySelector(".active").dataset.index;t(n===x.length-1?0:n+1)}),n.autoplayInterval)}(y)}))})()})();