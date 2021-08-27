import React, { useState } from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const handleAddNewBook = () => {
    setButtonHighlighted(true);
    setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
  };
  const numberClass = `${styles.button} ${
    buttonHighlighted ? styles.bump : ""
  }`;
  return (
    <button onClick={handleAddNewBook} className={numberClass}>
      {props.label}
    </button>
  );
};

export default Button;