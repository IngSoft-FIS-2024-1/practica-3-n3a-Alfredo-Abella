import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  //#totalWords;
  //#wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    newBook.setWords(500); //agregado
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  // TO DO
  totalWords() {
    let total = 0;
    for (const book of this.#inventory) {
      total += book.getWords();
    }
    return total;
  }
}

export default Library;
