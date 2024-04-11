import React from "react";
import Header from "./Header";
import styles from "./HeaderToastingGround.module.scss";

function HeaderToastingGround() {
  return (
    <div className={styles.wrapper}>
      <Header title="Try-My-Toaster!" fontSize={48}></Header>
    </div>
  );
}

export default HeaderToastingGround;
