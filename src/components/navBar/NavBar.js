import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <h2>Books</h2>
      <button>Click</button>
    </nav>
  );
};

export default NavBar;
