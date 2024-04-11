import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
    </div>
  );
}

export default ToastingGround;
