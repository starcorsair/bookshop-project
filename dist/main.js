(()=>{const e=document.querySelector(".category-list__architecture"),t=document.querySelector(".category-list__art-and-fashion");function n(e){e.preventDefault(),fetch('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDYN6BzMhLTqiOfRK5RpIWRRK9yW__2KVY&printType=books&startIndex=0&maxResults=6&langRestrict=en').then((e=>e.json())).then((e=>{console.log(e);const t=document.querySelector(".books");e.items.forEach((e=>{var n;bookTemplate=`<div class="books-list">\n                        <div class="books-list__cover" >\n                            <img src=${e.volumeInfo.imageLinks.thumbnail}></div>\n                            <div class="books-list__description">\n                                <p class="author">${e.volumeInfo.authors}</p>\n                                <p class="title">${e.volumeInfo.title}</p>\n                                <div class="raiting-list">\n                                <span class="average-raiting">${e.volumeInfo.averageRating}</span>\n                                <p class="count-raiting">${e.volumeInfo.ratingsCount}</p></div>\n                                <div class="desc">${n=e.volumeInfo.description,100,n.length<=100?n:n.substr(0,100)+"..."}</div>\n                                <p class="price">${e.saleInfo.retailPrice}</p>\n                                <div class="books-list__button">\n                                    <button class="button-buy">buy now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`,t.innerHTML+=bookTemplate}))}))}e.addEventListener("click",n),t.addEventListener("click",n),document.addEventListener("DOMContentLoaded",n);let s=[{url:"images/banner1.png"},{url:"images/banner2.png"},{url:"images/banner3.png"}],a={dots:!0,autoplay:!0,autoplayInterval:5e3};document.addEventListener("DOMContentLoaded",(function(){!function(e){if(!s||!s.length)return;e=e||{dots:!0,autoplay:!1};let t=document.querySelector(".slider__images"),n=document.querySelector(".slider__dots");function a(s){t.querySelector(".active").classList.remove("active"),t.querySelector(".n"+s).classList.add("active"),e.dots&&(n.querySelector(".active").classList.remove("active"),n.querySelector(".n"+s).classList.add("active"))}s.forEach(((e,n)=>{let a=`<div class="image n${n} ${0===n?"active":""}" style="background-image:url(${s[n].url});" data-index="${n}"></div>`;t.innerHTML+=a})),e.dots&&(s.forEach(((e,t)=>{let s=`<div class="slider__dots-item n${t} ${0===t?"active":""}" data-index="${t}"></div>`;n.innerHTML+=s})),n.querySelectorAll(".slider__dots-item").forEach((e=>{e.addEventListener("click",(function(){a(this.dataset.index)}))}))),e.autoplay&&setInterval((()=>{let e=+t.querySelector(".active").dataset.index;a(e===s.length-1?0:e+1)}),e.autoplayInterval)}(a)}))})();