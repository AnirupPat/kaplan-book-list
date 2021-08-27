import Book from "../book/Book";
import styles from "./BookList.module.scss";

const BookList = () => {
  return (
    <div className={styles.bookList}>
      <p>All Books</p>
      <div className={styles.books}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Book />
        ))}
      </div>
    </div>
  );
};

export default BookList;
