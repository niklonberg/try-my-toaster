import React from "react";
import Toast from "../Toast";

import styles from "./ToastDrawer.module.scss";

function ToastDrawer({ toasts, handleDismissToast }) {
  return (
    <ol className={styles.toastsWrapper}>
      {toasts.map((toast) => (
        <li className={styles.slideIn}>
          <Toast
            key={toast.id}
            toast={toast}
            handleDismissToast={handleDismissToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastDrawer;
