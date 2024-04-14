import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import FormToastMaker from "../Form/FormToastMaker";
import Toast from "../Toast";

import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  const [toasts, setToasts] = React.useState([]);

  function handleAddToastSubmit(e, variant, message) {
    e.preventDefault();
    const nextToasts = [...toasts, { variant, message }];
    setToasts(nextToasts);
  }

  console.log(toasts);
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />
      {toasts.map((toast) => (
        <Toast toast={toast} />
      ))}
      <FormToastMaker handleAddToastSubmit={handleAddToastSubmit} />
    </div>
  );
}

export default ToastingGround;
