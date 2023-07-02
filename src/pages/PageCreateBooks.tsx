import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";
const PageCreateBooks = () => {
  const {
    isLight,
    genres,
    setBookInfo,
    book,
    createBookForm,
  } = useContext(AppContext);
  return (
    <section className="flex justify-center items-center h-screen container px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <img className="w-1/3 md:w-4/5" src="../images/book.png" alt="" />
        <form className="flex flex-col gap-5" onSubmit={createBookForm}>
          <input
            className={`input-pages-create-books ${
              isLight
                ? "bg-BACKGROUND text-FOREGROUND"
                : "bg-FOREGROUND text-BACKGROUND"
            }`}
            type="text"
            name="name"
            placeholder="Name:"
            value={book.name}
            onChange={setBookInfo}
            required={true}
          />
          <input
            className={`input-pages-create-books ${
              isLight
                ? "bg-BACKGROUND text-FOREGROUND"
                : "bg-FOREGROUND text-BACKGROUND"
            }`}
            type="text"
            name="due"
            placeholder="Date:"
            value={book.due}
            onChange={setBookInfo}
            required={true}
          />
          <input
            className={`input-pages-create-books ${
              isLight
                ? "bg-BACKGROUND text-FOREGROUND"
                : "bg-FOREGROUND text-BACKGROUND"
            }`}
            type="text"
            name="amount"
            placeholder="Price:"
            value={book.amount}
            onChange={setBookInfo}
            required={true}
          />
          <input
            className={`input-pages-create-books ${
              isLight
                ? "bg-BACKGROUND text-FOREGROUND"
                : "bg-FOREGROUND text-BACKGROUND"
            }`}
            type="text"
            name="imgUrl"
            placeholder="image url:"
            value={book.imgUrl}
            onChange={setBookInfo}
            required={true}
          />
          <textarea
            className={`input-pages-create-books ${
              isLight
                ? "bg-BACKGROUND text-FOREGROUND"
                : "bg-FOREGROUND text-BACKGROUND"
            }`}
            rows={7}
            name="desc"
            placeholder="Write something here…"
            value={book.desc}
            onChange={setBookInfo}
            required={true}
          ></textarea>
          <select
            name="idGenre"
            value={book.idGenre}
            onChange={setBookInfo}
            required={true}
          >
            <option>Genres</option>
            {genres.length > 0 &&
              genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.genre}
                </option>
              ))}
          </select>
          <div className="flex justify-center gap-4">
            <div className="flex btn-create-book gap-2 text-sm cursor-pointer">
              <input type="submit" className="" value="Add" />

              <FaBookMedical />
            </div>
            <Link className="btn-create-book flex gap-2 text-sm" to="/book">
              <GiCancel />
              Cancle
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PageCreateBooks;
