import React from "react";
import styles from "./Form.module.scss";

function Form({ submitCallback, children }) {
  return (
    <form onSubmit={submitCallback} className={styles.wrapper}>
      {children}
    </form>
  );
}

export default Form;
