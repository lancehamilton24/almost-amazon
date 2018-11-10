import { printToDom } from "../helpers/util.js";
import {cartBuilder} from "./cart.js";

let books = [];

const setBooks = (newArray) => {
  books = newArray;
}

const getBooks = () => {
  return books;
}

const addToCart = () => {
  const addToCartButton = document.getElementById("addToCartBtn");
 addToCartButton.addEventListener("click", () => {
    cartBuilder(getBooks());
 });
 }
 
 const bookCardBuilder = () => {
  let newString = "";
  for (let i = 0; i < books.length; i++) {
    newString += `<div class="container">`;
    newString += `<div class="row">`;
    newString += `<div class="col-sm">`;
    newString += `<div class="card  book-cards">`;
    newString += `<img class="card-img-top" src="${
      books[i].imageUrl
    }">`;
    newString += `<h2>${books[i].title}</h2>`;
    newString += `<h5>Release Date: ${books[i].year}</h5>`;
    newString += `<button type="button" id="addToCartBtn" class="btn btn-primary">Add To Cart</button>`;
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
  }
  printToDom(newString, "book-store");
  addToCart();
};



export {bookCardBuilder, setBooks, getBooks }

