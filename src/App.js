import React, { Fragment } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/searchBar/Search";
import BookList from "./components/bookList/BookList";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Search />
      <BookList />
    </Fragment>
  );
}

export default App;
