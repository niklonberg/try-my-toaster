import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import FormToastMaker from "../Form/FormToastMaker";
import ToastDrawer from "../ToastDrawer";

import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
      <ToastDrawer />
      <FormToastMaker />
    </div>
  );
}

export default ToastingGround;
