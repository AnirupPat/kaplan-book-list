import React, { Fragment, useEffect } from "react";
import useHttp from "./hooks/use-http";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/UI/searchBar/Search";
import BookList from "./components/bookList/BookList";
import { useDispatch, useSelector } from "react-redux";
import NewBook from "./components/newBook/NewBook";

function App() {
  let books = useSelector((state) => state.books);
  let newBook = useSelector((state) => state.modalShow);
  const searchQuery = useSelector((state) => state.search);
  if (searchQuery !== "" && books.length > 0) {
    books = books.filter((book) => {
      return (
        book.volumeInfo.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        book.volumeInfo.publisher
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        book.volumeInfo.authors
          .join(", ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    });
  }
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest: fetchBooks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      dispatch({ type: "SET", value: tasksObj.items });
    };
    fetchBooks(
      {
        url: "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep",
      },
      transformTasks
    );
  }, [fetchBooks, dispatch]);
  return (
    <Fragment>
      <NavBar />
      <main>
        <Search />
        <BookList items={books} loading={isLoading} error={error} />
        {newBook && <NewBook />}
      </main>
    </Fragment>
  );
}

export default App;
