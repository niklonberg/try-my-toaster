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
    <div className={styles.wrapper}>
      <svg></svg>
      <span>{message}</span>
      <button>
        <X />
      </button>
      <button>
        <AlertTriangle />
      </button>
    </div>
  );
}

export default Toast;
