import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/button/Button";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch({ type: "MODAL", value: true });
  };
  return (
    <nav className={styles.nav}>
      <h2>Books</h2>
      <Button label="Create New Book" onClick={handleAddBook} />
    </nav>
  );
};

export default NavBar;
