import { useContext, useEffect } from "react";


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

      ) : (
        <Book />
      )}
    </div>
  );
};

export default PageHome;
