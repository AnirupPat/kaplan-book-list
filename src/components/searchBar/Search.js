import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.div}>
      <i className="fa fa-search"></i>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
