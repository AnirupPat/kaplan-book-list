import React, { Fragment, useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/UI/searchBar/Search";
import BookList from "./components/bookList/BookList";
import Modal from "./components/UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [newBook, setNewBook] = useState(false);
  let books = useSelector((state) => state.books);
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
  }, [fetchBooks]);

  const handleModalClose = () => {};

  const handleAddBook = () => {
    setNewBook(true);
  };

  const handleCloseBookModal = () => {
    setNewBook(false);
  };

  const cartModalContent = (
    <React.Fragment>
      <div>
        <span>Amount</span>
        <span>100</span>
        <button onClick={handleCloseBookModal}>Close</button>
      </div>
    </React.Fragment>
  );

  return (
    <Fragment>
      <NavBar onAddBook={handleAddBook} />
      <main>
        <Search />
        <BookList items={books} />
        {newBook && (
          <Modal onClose={handleModalClose}>{cartModalContent}</Modal>
        )}
      </main>
    </Fragment>
  );
}

export default App;
