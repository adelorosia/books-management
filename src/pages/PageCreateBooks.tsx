import  { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import {GiCancel} from "react-icons/gi"
import {FaBookMedical} from "react-icons/fa"
const PageCreateBooks = () => {
  const { isLight } = useContext(AppContext);
  return (
    <section className="flex justify-center items-center h-screen container px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <img className="w-1/3 md:w-4/5" src="../public/images/book.png" alt="" />
        <form className="flex flex-col gap-5">
          <input className={`input-pages-create-books ${isLight?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`} type="text" placeholder="Name:"/>
          <input className={`input-pages-create-books ${isLight?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`} type="text" placeholder="Date:"/>
          <input className={`input-pages-create-books ${isLight?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`} type="text" placeholder="Price:"/>
          <input className={`input-pages-create-books ${isLight?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`} type="text" 
          placeholder="image url:"/>
          <textarea className={`input-pages-create-books ${isLight?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`} rows={7} placeholder="Write something here…"></textarea>
          <div className="flex justify-center gap-4">
            <NavLink to="/book" className="btn-create-book flex gap-2 text-GREEN text-sm"><FaBookMedical />Add</NavLink>
            <NavLink className="btn-create-book flex gap-2 text-BACKGROUND text-sm" to="/book"><GiCancel />Cancle</NavLink>
          </div>
        </form>
      </div>
      
    </section>
  )
}

export default PageCreateBooks;
