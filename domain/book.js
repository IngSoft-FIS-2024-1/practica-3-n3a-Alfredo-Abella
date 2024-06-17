class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
   }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error('El título debe ser un string');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('El titulo no puede estar vacio');
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error('El autor debe ser un string');
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error('El número de páginas debe ser un número mayor a 0');
    }
    if (pages < 1) {
      throw new Error('El número de páginas no puede ser menor a 1');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error('El campo words debe ser un número');
    }
    if (words < 1) {
      throw new Error('El número de palabras debe ser al menos 1');
    }
    words = Math.trunc(words);
    this.#words = words;
  }

  wordsPerPage() {
    if (this.#pages === 0) {
      return 0;
  }
  return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Words: ${this.#words}`;
  }
}

export default Book;
