import React from "react";
import styles from "./Form.module.scss";

function Form({ children }) {
  return <form className={styles.wrapper}>{children}</form>;
}

export default Form;
