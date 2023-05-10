let images = [{
    url: "images/banner1.png",
}, {
    url: "images/banner2.png",
}, {
    url: "images/banner3.png",
}];


function initSlider(options) {
    if (!images || !images.length) return;
    
    options = options || {
      dots: true,
      autoplay: false
    };
    
    let sliderImages = document.querySelector(".slider__images");
    
    let sliderDots = document.querySelector(".slider__dots");
    
    initImages();

    if (options.dots) {
      initDots();
    }
    
    if (options.autoplay) {
      initAutoplay();
    }
    
    function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
    }
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }
    
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      if (options.dots) {
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
      }
    }
    
    function initAutoplay() {
      setInterval(() => {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        moveSlider(nextNumber);
      }, options.autoplayInterval);
    }
  }
  
  let sliderOptions = {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
  });