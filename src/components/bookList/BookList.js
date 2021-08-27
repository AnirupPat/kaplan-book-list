import Book from "../book/Book";
import styles from "./BookList.module.scss";

const BookList = ({ items }) => {
  return (
    <div className={styles.bookList}>
      <p>All Books</p>
      <div className={styles.books}>
        {items.map((item) => (
          <Book info={item} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
