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
      newString += `<h5>Price: ${books[i].price}</h5>`;
      newString += `<button type="button" id="remove" class="btn btn-danger">Remove From Cart</button>`;
      newString += `</div>`;
      newString += `</div>`;
      newString += `</div>`;
      newString += `</div>`;
    }
    printToDom(newString, "book-store");
    removeFromCart();
    };

export {cartBuilder}



