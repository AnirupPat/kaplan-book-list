import Book from "../book/Book";
import styles from "./BookList.module.scss";

const BookList = ({ items, loading }) => {
  // if (props.error) {
  //   content = <button onClick={props.onFetch}>Try again</button>;
  // }
  let content;
  if (loading) {
    content = <p>Loading tasks...</p>;
  } else {
    content = items.map((item) => <Book info={item} />);
  }
  return (
    <div className={styles.bookList}>
      <p>All Books</p>
      <div className={styles.books}>{content}</div>
    </div>
  );
};

export default BookList;
