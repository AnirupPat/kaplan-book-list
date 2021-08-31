import { Fragment } from "react";
import Book from "../book/Book";
import FallBack from "../fallBack/FallBack";
import styles from "./BookList.module.scss";

const BookList = ({ items, loading, error }) => {
  let content, fallback;
  if (error) {
    let errorElement = (
      <p>We are facing some issues. Crash Landing. Moving out of orbit.</p>
    );
    fallback = <FallBack>{errorElement} </FallBack>;
  } else {
    if (loading || !items) {
      let loadingElement = <p>Loading Books...Hold on tight</p>;
      content = <FallBack>{loadingElement} </FallBack>;
    } else {
      content = items.map((item) => <Book key={item.id} info={item} />);
    }
  }

  return (
    <Fragment>
      {content && (
        <section className={styles.bookList}>
          <p>All Books</p>
          <div className={styles.books}>{content}</div>
        </section>
      )}
      {error && fallback}
    </Fragment>
  );
};

export default BookList;
