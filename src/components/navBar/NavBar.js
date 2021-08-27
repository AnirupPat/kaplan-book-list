import Button from "../button/Button";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <h2>Books</h2>
      <Button label="Create New Book" />
    </nav>
  );
};

export default NavBar;
