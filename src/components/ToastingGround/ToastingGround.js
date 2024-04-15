import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import FormToastMaker from "../Form/FormToastMaker";
import ToastDrawer from "../ToastDrawer";

import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  const [toasts, setToasts] = React.useState([]);

  function handleAddToastSubmit(e, variant, message) {
    e.preventDefault();
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), variant, message },
    ];
    setToasts(nextToasts);
  }

  function handleDismissToast(toastId) {
    const nextToasts = [...toasts].filter((toast) => toast.id !== toastId);
    setToasts(nextToasts);
  }

  console.log(toasts);
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
      <ToastDrawer toasts={toasts} handleDismissToast={handleDismissToast} />
      <FormToastMaker handleAddToastSubmit={handleAddToastSubmit} />
    </div>
  );
}

export default ToastingGround;
