import axios from "axios";
import { IBooks, IGenre } from "../interface";

const SERVER_URL = "http://localhost:9000";

//@desc Get All Books
//@route GET http://localhost:9000/books
export const getAllBooks = () => {
  const url = `${SERVER_URL}/books`;
  return axios.get(url);
};

//@desc Get All Genres
//@route GET http://localhost:9000/genres
export const getAllGenres = () => {
  const url = `${SERVER_URL}/genres`;
  return axios.get(url);
};

//@desc Get Book With idBook
//@route GET http://localhost:9000/books/idBook
export const getBook = (idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.get(url);
};

//@desc Get Genre With idGenre
//@route GET http://localhost:9000/genres/idGenre
export const getGenre = (idGenre: number) => {
  const url = `${SERVER_URL}/genres/${idGenre}`;
  return axios.get(url);
};


//@desc Create a new Book
//@route POST http://localhost:9000/books/
export const createBook = (book: IBooks) => {
  const url = `${SERVER_URL}/books`;
  return axios.post(url, book);
};

//@desc Create a new Genre
//@route POST http://localhost:9000/genres/
export const createGenre = (genre: IGenre) => {
  const url = `${SERVER_URL}/genres`;
  return axios.post(url, genre);
};


//@desc Edit a Book With idBook
//@route PUT http://localhost:9000/books/idBook
export const updateBook = (book: IBooks, idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.put(url, book);
};

//@desc Edit a Genre With idGenre
//@route PUT http://localhost:9000/genres/idGenre
export const updateGenre = (genre: IGenre, idGenre: number) => {
  const url = `${SERVER_URL}/genres/${idGenre}`;
  return axios.put(url, genre);
};

//@desc DELETE a Book With idBook
//@route DELETE http://localhost:9000/books/idBook
export const deleteBook = (idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.delete(url);
};

//@desc DELETE a Genre With idGenre
//@route DELETE http://localhost:9000/genres/idGenre
export const deleteGenre = (idGenre: number) => {
  const url = `${SERVER_URL}/genres/${idGenre}`;
  return axios.delete(url);
};
