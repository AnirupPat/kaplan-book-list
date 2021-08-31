import React from "react";
import Button from "../UI/button/Button";
import styles from "./NewBook.module.scss";
import useForm from "../../hooks/use-form";
import Modal from "../UI/modal/Modal";
import { useDispatch } from "react-redux";

const NewBook = () => {
  const dispatch = useDispatch();
  const {
    value: titleInputValue,
    reset: titleResetHandler,
    hasError: titleHasError,
    isValid: nameIsValid,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: authorInputValue,
    reset: authorResetHandler,
    hasError: authorHasError,
    isValid: authorIsValid,
    valueChangeHandler: authorChangeHandler,
    inputBlurHandler: authorBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: publisherInputValue,
    reset: publisherResetHandler,
    hasError: publisherHasError,
    isValid: publisherIsValid,
    valueChangeHandler: publisherChangeHandler,
    inputBlurHandler: publisherBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: publishedDateInputValue,
    reset: publishedDateResetHandler,
    hasError: publishedDateHasError,
    isValid: publishedDateIsValid,
    valueChangeHandler: publishedDateChangeHandler,
    inputBlurHandler: publishedDateBlurHandler,
  } = useForm((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    nameIsValid &&
    authorIsValid &&
    publisherIsValid &&
    publishedDateIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = () => {
    if (!formIsValid) {
      return;
    }

    titleResetHandler();
    authorResetHandler();
    publisherResetHandler();
    publishedDateResetHandler();
    setTimeout(() => {
      dispatch({
        type: "ADD",
        value: {
          titleInputValue,
          authorInputValue,
          publisherInputValue,
          publishedDateInputValue,
        },
      });
    }, 300);
  };

  const titleClass = titleHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const authorClass = authorHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const publisherClass = publisherHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const publishedDateClass = publishedDateHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];

  const handleModalClose = () => {
    setTimeout(() => {
      dispatch({ type: "MODAL", value: false });
    }, 300);
  };

  return (
    <Modal>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["control-group"]}>
          <div className={titleClass}>
            <label htmlFor="title">Book Title</label>
            <input
              value={titleInputValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
              type="text"
              id="title"
            />
            {titleHasError && (
              <span className={styles["error-text"]}>
                Book Title is not entered
              </span>
            )}
          </div>
          <div className={authorClass}>
            <label htmlFor="author">Author</label>
            <input
              value={authorInputValue}
              onChange={authorChangeHandler}
              onBlur={authorBlurHandler}
              type="text"
              id="author"
            />
            {authorHasError && (
              <span className={styles["error-text"]}>
                Author is not entered
              </span>
            )}
          </div>
          <div className={publisherClass}>
            <label htmlFor="email">Publisher</label>
            <input
              value={publisherInputValue}
              onChange={publisherChangeHandler}
              onBlur={publisherBlurHandler}
              type="email"
              id="email"
            />
            {publisherHasError && (
              <span className={styles["error-text"]}>
                Publisher is not entered
              </span>
            )}
          </div>
          <div className={publishedDateClass}>
            <label htmlFor="date">Published Date</label>
            <input
              value={publishedDateInputValue}
              onChange={publishedDateChangeHandler}
              onBlur={publishedDateBlurHandler}
              type="date"
              id="date"
            />
            {publishedDateHasError && (
              <span className={styles["error-text"]}>
                Published Date is not entered
              </span>
            )}
          </div>
        </div>

        <div className={styles["form-actions"]}>
          <Button
            label="Submit"
            disabled={!formIsValid}
            onClick={formSubmitHandler}
          />
          <Button label="Close" onClick={handleModalClose} />
        </div>
      </form>
    </Modal>
  );
};

export default React.memo(NewBook);
