import { useContext, useEffect } from "react";
import { GrAddCircle } from "react-icons/gr";

import { AppContext } from "../AppContext";
import { useParams, NavLink } from "react-router-dom";
import { Book, Books, SearchBooks } from "../helper";
import Spinner from "../components/Spinner";

const PageHome = () => {
  const { idBook, setIdBook, isLight, spinner } = useContext(AppContext);
  const params = useParams();

  useEffect(() => {
    setIdBook(params.idBook ? parseInt(params.idBook) : 0);
  });
  return (
    <div className="container px-5 flex flex-col items-center">
      {idBook === 0 ? (
        <>
          <section className="w-full mt-24 flex flex-col justify-center items-center my-4">
            <NavLink
              to="/book/create-books"
              className="flex items-center gap-4 bg-PINK py-2 px-8 rounded-full cursor-pointer hover:bg-RED duration-500"
            >
              <p className="hidden md:flex">Create a book</p>
              <GrAddCircle
                className={`text-xl ${
                  isLight ? "text-FOREGROUND" : "text-BACKGROUND"
                }`}
              />
            </NavLink>
            <SearchBooks />
          </section>
          {spinner ? (
            <Spinner />
          ) : (
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 justify-items-center mb-12">
              <Books />
            </section>
          )}
        </>
      ) : spinner ? (
        <Spinner />
      ) : (
        <Book />
      )}
    </div>
  );
};

export default PageHome;
