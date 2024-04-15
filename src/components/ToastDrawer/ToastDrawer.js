import React from "react";
import Toast from "../Toast";

function ToastDrawer({ toasts, handleDismissToast }) {
  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          handleDismissToast={handleDismissToast}
        />
      ))}
    </div>
  );
}

export default ToastDrawer;
