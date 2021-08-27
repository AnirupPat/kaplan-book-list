import React, { Fragment, useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/searchBar/Search";
import BookList from "./components/bookList/BookList";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let books = useSelector((state) => state.books);
  const searchQuery = useSelector((state) => state.search);
  if (searchQuery !== "" && books.length > 0) {
    books = books.filter((book) => {
      return (
        book.volumeInfo.title.toLowerCase().includes(searchQuery) ||
        book.volumeInfo.publisher?.toLowerCase().includes(searchQuery) ||
        book.volumeInfo.authors.join(", ").toLowerCase().includes(searchQuery)
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

  return (
    <Fragment>
      <NavBar />
      <Search />
      <BookList items={books} />
    </Fragment>
  );
}

export default App;
