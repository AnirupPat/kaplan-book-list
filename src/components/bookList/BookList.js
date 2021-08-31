import Book from "../book/Book";
import styles from "./BookList.module.scss";

const BookList = ({ items, loading }) => {
  let content;
  if (loading) {
    content = <p>Loading tasks...</p>;
  } else {
    content = items.map((item) => <Book key={item.id} info={item} />);
  }
  return (
    <section className={styles.bookList}>
      <p>All Books</p>
      <div className={styles.books}>{content}</div>
    </section>
  );
};

export default BookList;
