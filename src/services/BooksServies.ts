import axios from "axios";


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

//@desc DELETE a Book With idBook
//@route DELETE http://localhost:9000/books/idBook
export const deleteBook = (idBook: number) => {
  const url = `${SERVER_URL}/books/${idBook}`;
  return axios.delete(url);
};

