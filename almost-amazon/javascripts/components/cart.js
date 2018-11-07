import {printToDom} from "../helpers/util.js";
import {bookCardBuilder, getBooks} from './store.js';

const removeFromCart = () => {
  const removeButton = document.getElementById('remove');
  removeButton.addEventListener('click', () => {
    bookCardBuilder(getBooks());
  });
};

const cartBuilder = (books) => {
    let newString = "";
      newString += `<div class="container">`;
      newString += `<div class="row">`;
      newString += `<div class="col-sm">`;
      newString += `<div class="card  book-cards">`;
      newString += `<img class="card-img-top" src="${
        books.imageUrl
      }">`;
      newString += `<h2>${books.title}</h2>`;
      newString += `<h5>${books.year}</h5>`;
      newString += `<h5>${books.year}</h5>`;
      newString += `<h5>${books.price}</h5>`;
      newString += `<button type="button" id="remove" class="btn btn-danger">Remove From Cart</button>`;
      newString += `</div>`;
      newString += `</div>`;
      newString += `</div>`;
      newString += `</div>`;

    printToDom(newString, "book-store");
    removeFromCart();
    };

export {cartBuilder}



