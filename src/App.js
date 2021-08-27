import React, { Fragment, useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/searchBar/Search";
import BookList from "./components/bookList/BookList";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      dispatch({ type: "SET", value: tasksObj.items });
    };
    fetchTasks(
      {
        url: "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep",
      },
      transformTasks
    );
  }, [fetchTasks]);

  return (
    <Fragment>
      <NavBar />
      <Search />
      <BookList items={books} />
    </Fragment>
  );
}

export default App;
