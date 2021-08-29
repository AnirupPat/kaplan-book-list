import React, { useState } from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const handleAddNewBook = (event) => {
    event.preventDefault();
    setButtonHighlighted(true);
    setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    props.onClick();
  };
  const numberClass = `${styles.button} ${
    buttonHighlighted ? styles.bump : ""
  }`;
  return (
    <button
      onClick={handleAddNewBook}
      disabled={props.disabled}
      className={numberClass}
    >
      {props.label}
    </button>
  );
};

export default Button;
