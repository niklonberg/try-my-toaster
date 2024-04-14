import React from "react";
import { X } from "react-feather";

import styles from "./Toast.module.scss";

function Toast({ toast }) {
  const { variant, message } = toast;
  return (
    <div className={styles.wrapper}>
      {/* <svg></svg> */}
      <span>IconVariantHere</span>
      <span>{message}</span>
      <button>
        <X />
      </button>
    </div>
  );
}

export default Toast;
