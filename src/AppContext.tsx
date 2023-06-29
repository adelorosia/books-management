import React, { createContext, useEffect, useState } from "react";
import { IBook } from "./interface";
import { getAllBooks } from "./services/BooksServies";

interface IApp {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  menuActiveHandler: () => void;
  books: IBook[];
  setBooks: (books: IBook[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  getBook: (id: number) => IBook | undefined;
  idBook: number;
  setIdBook: (idBook: number) => void;
  spinner:boolean
  setSpinner:React.Dispatch<React.SetStateAction<boolean>>
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [books, setBooks] = useState<IBook[]>([]);
  const [filter, setFilter] = useState("");
  const [spinner,setSpinner]=useState(false)
  const menuActiveHandler = () => {
    setIsMenuActive(!isMenuActive);
  };
  const getBook = (idBook: number) => {
    return books.find((book) => book.id === idBook);
  };
  const [idBook, setIdBook] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true)
        const { data: booksData } =await getAllBooks()
        setBooks(booksData);
        setSpinner(false)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unknown error occurred");
        }
        setSpinner(false)
      }
    };
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        isLight,
        setIsLight,
        isMenuActive,
        setIsMenuActive,
        menuActiveHandler,
        books,
        setBooks,
        filter,
        setFilter,
        getBook,
        idBook,
        setIdBook,
        spinner,
        setSpinner
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
