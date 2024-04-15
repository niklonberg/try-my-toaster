import React from "react";
import Toast from "../Toast";

function ToastDrawer({ toasts, handleDismissToast }) {
  return (
    <ol>
      {toasts.map((toast) => (
        <li>
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
