import {setBooks, bookCardBuilder, getBooks} from '../components/store.js';

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  setBooks(data.books);
  bookCardBuilder(getBooks());
}

function executeThisCodeIfXhrFails () {
  console.log('shit broke');
}

const getBookData = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
  myRequest.addEventListener('error', executeThisCodeIfXhrFails);
  myRequest.open('GET', './db/book.json');
  myRequest.send();
};

export {getBookData};