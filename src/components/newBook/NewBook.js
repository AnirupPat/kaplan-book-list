import React from "react";
import Button from "../UI/button/Button";
import styles from "./NewBook.module.scss";
import useForm from "../../hooks/use-form";

const NewBook = (props) => {
  const {
    value: titleInputValue,
    reset: titleResetHandler,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: authorInputValue,
    reset: authorResetHandler,
    hasError: authorHasError,
    isValid: authorIsValid,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
  } = useForm((value) => value.trim() !== "");

  const {
    value: publisherInputValue,
    reset: emailResetHandler,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useForm((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && authorIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
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

  const nameClass = nameHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const lastnameClass = authorHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const emailClass = emailHasError
    ? `${styles["form-control"]} ${styles["invalid"]}`
    : styles["form-control"];
  const submitHandler = () => {};

  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["control-group"]}>
          <div className={nameClass}>
            <label htmlFor="name">Book Title</label>
            <input
              value={titleInputValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              type="text"
              id="name"
            />
            {nameHasError && (
              <p className={styles["error-text"]}>Book Title is not entered</p>
            )}
          </div>
          <div className={lastnameClass}>
            <label htmlFor="lastname">Author</label>
            <input
              value={authorInputValue}
              onChange={lastnameChangeHandler}
              onBlur={lastnameBlurHandler}
              type="text"
              id="lastname"
            />
            {authorHasError && (
              <p className={styles["error-text"]}>Author is not entered</p>
            )}
          </div>
          <div className={emailClass}>
            <label htmlFor="email">Publisher</label>
            <input
              value={publisherInputValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              type="email"
              id="email"
            />
            {emailHasError && (
              <p className={styles["error-text"]}>Publisher is not entered</p>
            )}
          </div>
        </div>

        <div className={styles["form-actions"]}>
          <button disabled={!formIsValid}>Submit</button>
          <Button label="Close" onClick={props.onModalClose} />
        </div>
      </form>
    </React.Fragment>
  );
};

export default NewBook;
