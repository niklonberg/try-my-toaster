import React from "react";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastDrawer.module.scss";

function ToastDrawer() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notifications"
      className={styles.toastsWrapper}
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.slideIn}>
          <Toast toast={toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastDrawer;
