import React from "react";
import HeaderToastingGround from "../Header/HeaderToastingGround";
import FormToastMaker from "../Form/FormToastMaker";
import styles from "./ToastingGround.module.scss";

function ToastingGround() {
  const [toasts, setToasts] = React.useState([]);

  function handleAddToast(variant, message) {
    const nextToasts = [...toasts, { variant, message }];
    setToasts(nextToasts);
  }

  console.log({ toasts });
  return (
    <div className={styles.wrapper}>
      <HeaderToastingGround />

      <FormToastMaker handleAddToast={handleAddToast} />
    </div>
  );
}

export default ToastingGround;
