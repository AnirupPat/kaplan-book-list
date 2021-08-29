import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import styles from "./NewBook.module.scss";
import useForm from "../../hooks/use-form";
import Modal from "../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";

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
    reset: emailResetHandler,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: publisherChangeHandler,
    inputBlurHandler: publisherBlurHandler,
  } = useForm((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && authorIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    // event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(titleInputValue);
    console.log(authorInputValue);
    console.log(publisherInputValue);

    titleResetHandler();
    authorResetHandler();
    emailResetHandler();
  };

  const titleClass = titleHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const authorClass = authorHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const publisherClass = emailHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const submitHandler = () => {};

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
              <p className={styles["error-text"]}>Book Title is not entered</p>
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
              <p className={styles["error-text"]}>Author is not entered</p>
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
            {emailHasError && (
              <p className={styles["error-text"]}>Publisher is not entered</p>
            )}
          </div>
        </div>

        <div className={styles["form-actions"]}>
          {/* <button disabled={!formIsValid}>Submit</button> */}
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
