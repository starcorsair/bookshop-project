import "./style.css";
import "./images/banner1.png";
import "./images/banner2.png";
import "./images/banner3.png";
import "./images/changebook.png";
import "./images/cover.png";
import "./images/topbooks.png";
import "./images/search.png";
import "./images/shop-bag.png";
import "./images/user.png";
const apiKey = "AIzaSyDYN6BzMhLTqiOfRK5RpIWRRK9yW__2KVY";
const apiUrl = "https://www.googleapis.com/books/v1/volumes";

const architecture = document.querySelector(".category-list__architecture");
const artAndFashion = document.querySelector(".category-list__art-and-fashion");
architecture.addEventListener("click", submitForm);
artAndFashion.addEventListener("click", submitForm);

function cropDescription(description, size) {
  if (description.length <= size) {
    return description;
  } else {
    return description.substr(0, size) + "...";
  }
}

function submitForm(e) {
  e.preventDefault();
  fetch(
    `${apiUrl}?q="subject:Architecture"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const bookList = document.querySelector(".books");

      data.items.forEach((book) => {
        let bookTemplate = `<div class="books-list">
                        <div class="books-list__cover" >
                            <img src=${
                              book.volumeInfo.imageLinks.thumbnail
                            }></div>
                            <div class="books-list__description">
                                <p class="author">${book.volumeInfo.authors}</p>
                                <p class="title">${book.volumeInfo.title}</p>
                                <div class="raiting-list">
                                <span class="average-raiting">${
                                  book.volumeInfo.averageRating
                                }</span>
                                <p class="count-raiting">${
                                  book.volumeInfo.ratingsCount
                                }</p></div>
                                <div class="desc">${cropDescription(
                                  book.volumeInfo.description,
                                  100
                                )}</div>
                                <p class="price">${
                                  book.saleInfo.retailPrice
                                }</p>
                                <div class="books-list__button">
                                    <button class="button-buy">buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

        bookList.innerHTML += bookTemplate;
      });
    });
}

document.addEventListener("DOMContentLoaded", submitForm);
//slider

let images = [
  {
    url: "images/banner1.png",
  },
  {
    url: "images/banner2.png",
  },
  {
    url: "images/banner3.png",
  },
];

function initSlider(options) {
  if (!images || !images.length) return;

  options = options || {
    dots: true,
    autoplay: false,
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
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
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
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  autoplay: true,
  autoplayInterval: 5000,
};

document.addEventListener("DOMContentLoaded", function () {
  initSlider(sliderOptions);
});
