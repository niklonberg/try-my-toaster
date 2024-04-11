import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import Form from "../Form";
import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
      <Form />
    </div>
  );
}

export default ToastingGround;
