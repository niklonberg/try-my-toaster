import React from "react";
import styles from "./Form.module.scss";

function Form({ children, callback }) {
  function defaultSubmit() {
    console.log("form submitted");
  }

  function handleSubmit(e) {
    e.preventDefault();
    (callback || defaultSubmit)();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      {children}
    </form>
  );
}

export default Form;
