import React, { Fragment } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/searchBar/Search";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Search />
    </Fragment>
  );
}

export default App;
