import React from "react";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastDrawer.module.scss";

function ToastDrawer() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleEscapeKey(e) {
      if (e.key === "Escape") setToasts([]);
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [setToasts]);

  return (
    <ol className={styles.toastsWrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.slideIn}>
          <Toast toast={toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastDrawer;
