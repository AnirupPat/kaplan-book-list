import styles from "./Book.module.scss";

const Book = () => {
  return (
    <div className={styles.book}>
      <span className={styles.title}>ACT Prep 2019</span>
      <span>Authors: Kaplan Test Prep</span>
      <span>publisher: Simon and Schulster</span>
      <span>Published Date: 2018-06-05</span>
    </div>
  );
};

export default Book;
