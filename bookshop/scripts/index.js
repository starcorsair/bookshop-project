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
    fetch(`${apiUrl}?q="subject:Architecture"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            const bookList = document.querySelector('.books');

            data.items.forEach(book => {
                bookTemplate =
                    `<div class="books-list">
                        <div class="books-list__cover" >
                            <img src=${book.volumeInfo.imageLinks.thumbnail}></div>
                            <div class="books-list__description">
                                <p>${book.volumeInfo.authors}</p>
                                <p class="title">${book.volumeInfo.title}</p>
                                <p class="average-raiting">${book.volumeInfo.averageRating}</p>
                                <p class="count-raiting">${book.volumeInfo.ratingsCount}</p>
                                <div class="desc">${cropDescription(book.volumeInfo.description, 100)}</div>
                                <p class="price">${book.saleInfo.retailPrice}</p>
                                <div class="books-list__button">
                                    <button class="button-buy">buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>`

                bookList.innerHTML += bookTemplate
        })
    })
}


document.addEventListener("DOMContentLoaded", submitForm);

