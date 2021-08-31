import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/button/Button";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch({ type: "MODAL", value: true });
  };
  return (
    <header className={styles.nav}>
      <h1>Books</h1>
      <Button label="Create New Book" onClick={handleAddBook} />
    </header>
  );
};

export default NavBar;
