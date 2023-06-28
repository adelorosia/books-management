import axios from "axios";
import { IBook } from "../interface";

const SERVER_URL = "http://localhost:9000";

//@desc Get All Books
//@route GET http://localhost:9000/books
export const getAllBooks = () => {
  const url = `${SERVER_URL}/books`;
  return axios.get(url);
};
//@desc Get Book With idBook
//@route GET http://localhost:9000/books/idBook
export const getBook = (idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.get(url);
};
//@desc Create a new Book
//@route POST http://localhost:9000/books/
export const createBook = (book: IBook) => {
  const url = `${SERVER_URL}/books`;
  return axios.post(url, book);
};
//@desc Edit a Book With idBook
//@route PUT http://localhost:9000/books/idBook
export const updateBook = (book: IBook, idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.put(url, book);
};
//@desc DELETE a Book With idBook
//@route DELETE http://localhost:9000/books/idBook
export const deleteBook = (idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.delete(url);
};
