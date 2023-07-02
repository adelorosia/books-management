import React, { createContext, useEffect, useState } from "react";


interface IApp {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;

  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;

  menuActiveHandler: () => void;

  books: IBooks[];
  setBooks: (books: IBooks[]) => void;

  book: IBooks;
  setBook: (book: IBooks) => void;

  setBookInfo: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;

  genres: IGenre[];
  setGenres: (genre: IGenre[]) => void;

  filter: string;
  setFilter: (filter: string) => void;

  getBook: (id: number) => IBooks | undefined;

  idBook: number;
  setIdBook: (idBook: number) => void;


  spinner: boolean;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;

  createBookForm: (event: React.FormEvent<HTMLFormElement>) => void;

  }
interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [books, setBooks] = useState<IBooks[]>([]);
  const [book, setBook] = useState<IBooks>({} as IBooks);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [filter, setFilter] = useState("");

  const menuActiveHandler = () => {
    setIsMenuActive(!isMenuActive);
  };
  const getBook = (idBook: number) => {
    return books.find((book) => book.id === idBook);
  };
  const setBookInfo = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const [idBook, setIdBook] = useState(0);
  const navigate = useNavigate();
  const createBookForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { status } = await createBook(book);
      console.log(status)
      if (status === 201) {
        setBook({} as IBooks);
        navigate("/book");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unknown error occurred");
        }

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
        book,
        setBook,
        genres,
        setGenres,
        filter,
        setFilter,
        getBook,
        idBook,
        setIdBook,
        spinner,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
