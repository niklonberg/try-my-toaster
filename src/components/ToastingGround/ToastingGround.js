import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import FormToastingGround from "../Form/FormToastingGround";
import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
      <FormToastingGround />
    </div>
  );
}

export default ToastingGround;
