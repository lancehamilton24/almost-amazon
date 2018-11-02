import {printToDom} from "../helpers/util.js"

let bookstore = {
  books: [
    {
      imageUrl: "../img/LETC.jpg",
      title: "The Little Engine That Could",
      year: "1930"
    }
  ]
};

const bookStringBuilder = () => {
  let newString = "";
  for (let i = 0; i < bookstore.books.length; i++) {
    newString += `<div class="container">`;
    newString += `<div class="row">`;
    newString += `<div class="col-sm">`;
    newString += `<div class="card  book-cards">`;
    newString += `<img class="card-img-top" src="${bookstore.books[i].imageUrl}">`;
    newString += `<h2>${bookstore.books[i].title}</h2>`;
    newString += `<h5>${bookstore.books[i].year}</h5>`;
    newString += `<button type="button" class="btn btn-primary">Add To Cart</button>`;
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
  }
  printToDom(newString, "book-store");
};

bookStringBuilder();
