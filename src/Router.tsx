import { Navigate, Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageContact from "./pages/PageContact";
import PageAbout from "./pages/PageAbout";
import PageCreateBooks from "./pages/PageCreateBooks";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/book" />} />
      <Route path="/book" element={<PageHome />} />
      <Route path="/book/:idBook" element={<PageHome />} />
      <Route path="/book/create-books" element={<PageCreateBooks />} />
      <Route path="/contact" element={<PageContact />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="*" element={<Navigate to="/book" />} />
    </Routes>
  );
};

export default Router;
