import styles from "./Book.module.scss";

const Book = ({ info }) => {
  let authors = info.volumeInfo.authors.join(", ");
  return (
    <div className={styles.book}>
      <span className={styles.title}>{info.volumeInfo.title}</span>
      <span>Authors: {authors}</span>
      <span>publisher: {info.volumeInfo.publisher}</span>
      <span>Published Date: {info.volumeInfo.publishedDate}</span>
    </div>
  );
};

export default Book;
