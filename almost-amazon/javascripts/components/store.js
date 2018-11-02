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
    newString += `<div class="col-md book-card" id="">`;
    newString += `<div class="card">`;
    newString += `<div class="book-card">`;
    newString += `<img src="${bookstore.books[i].imageUrl}">`;
    newString += `<h2>${bookstore.books[i].title}</h2>`;
    newString += `<h5>${bookstore.books[i].year}</h5>`;
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
  }
  printToDom(newString, "bookContainer");
};

bookStringBuilder();
