import React from "react";
import Toast from "../Toast";

function ToastDrawer({ toasts }) {
  return (
    <div>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

export default ToastDrawer;
