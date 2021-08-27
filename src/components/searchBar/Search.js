import { useRef } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch({ type: "SEARCH", value: searchRef.current.value });
  };
  return (
    <div className={styles.div}>
      <i className="fa fa-search"></i>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default Search;
