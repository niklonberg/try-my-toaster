import React from "react";
import {
  X,
  Info,
  CheckCircle,
  AlertOctagon,
  AlertTriangle,
} from "react-feather";

import styles from "./Toast.module.scss";

function Toast({ toast }) {
  const { variant, message } = toast;
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconWrapper}>
        <Info size={24} />
      </div>
      <p className={styles.message}>{message}</p>
      <button className={styles.iconBtn}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
