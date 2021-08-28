import Button from "../UI/button/Button";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <h2>Books</h2>
      <Button label="Create New Book" onClick={props.onAddBook} />
    </nav>
  );
};

export default NavBar;
