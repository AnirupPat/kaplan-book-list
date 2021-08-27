import React, { Fragment, useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/searchBar/Search";
import BookList from "./components/bookList/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      console.log("fetch call-----------");
      console.log(tasksObj);

      setBooks(tasksObj.items);
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
