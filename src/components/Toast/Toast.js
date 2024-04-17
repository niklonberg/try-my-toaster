import React from "react";
import {
  X,
  Info,
  CheckCircle,
  AlertOctagon,
  AlertTriangle,
} from "react-feather";
import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.scss";

const ICONS_BY_VARIANT = {
  notice: Info,
  success: CheckCircle,
  error: AlertOctagon,
  warning: AlertTriangle,
};

function Toast({ toast }) {
  const { handleDismissToast } = React.useContext(ToastContext);
  const { id, variant, message } = toast;
  const VariantIcon = ICONS_BY_VARIANT[variant];

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => handleDismissToast(id), 8000);

    return () => window.clearTimeout(timeoutId);
  }, [handleDismissToast, id]);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconWrapper}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.message}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button
        onClick={() => handleDismissToast(id)}
        className={styles.iconBtn}
        aria-label="Dismiss notification"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
