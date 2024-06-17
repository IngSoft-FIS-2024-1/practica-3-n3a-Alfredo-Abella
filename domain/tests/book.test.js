import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    //myBook.setWords(500); // Agregamos algunas palabras para las pruebas
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  // TODO
  it('check author is a string', () => {
    expect(() => myBook.setAuthor(123)).toThrow();
  });

  // TODO
  it('check page param is a number', () => {
    expect(() => myBook.setPages('abc')).toThrow();
  });

  // TODO
  it('check pages not < 1', () => {
    expect(() => myBook.setPages(0)).toThrow();
  });

  // TODO
  it('toString()', () => {
    myBook.setWords(500);
    const expectedString = 'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Words: 500';
    expect(myBook.toString()).toBe(expectedString);
  });


    // TODO
  it('wordsPerPage() debería calcular correctamente el promedio de palabras por página', () => {
      myBook.setWords(500); // Establece las palabras antes de calcular wordsPerPage
      expect(myBook.wordsPerPage()).toBeCloseTo(500/350,1);
  });

  it('setWords should throw an error for non-numeric values', () => {
    expect(() => myBook.setWords('not-a-number')).toThrow('El campo words debe ser un número');
    expect(() => myBook.setWords(-10)).toThrow('El número de palabras debe ser al menos 1');
  });
  
  it('toString should return the correct string representation of the book', () => {
    myBook.setWords(500); // Asegúrate de establecer las palabras antes de llamar a toString
    const expectedString = 'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Words: 500';
    expect(myBook.toString()).toBe(expectedString);
  });

});
