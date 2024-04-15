import React from "react";
import {
  X,
  Info,
  CheckCircle,
  AlertOctagon,
  AlertTriangle,
} from "react-feather";

import styles from "./Toast.module.scss";

const ICONS_BY_VARIANT = {
  notice: Info,
  success: CheckCircle,
  error: AlertOctagon,
  warning: AlertTriangle,
};

function Toast({ toast, handleDismissToast }) {
  const { variant, message } = toast;
  const VariantIcon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconWrapper}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.message}>{message}</p>
      <button onClick={handleDismissToast} className={styles.iconBtn}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
