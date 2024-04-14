import React from "react";
import Form from "./Form";
import Input from "../Input";

import styles from "./FormToastMaker.module.scss";

const ToastTypes = ["notice", "warning", "success", "error"];

function FormToastMaker() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  return (
    <Form>
      <div className={`${styles.row} ${styles.messageWrapper}`}>
        <Input
          id={"toast-message"}
          label={"Message"}
          inputType={"textarea"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <fieldset className={`${styles.row} ${styles.fieldsetWrapper}`}>
        <legend>Variant</legend>
        <div className={styles.variantOptionsWrapper}>
          {ToastTypes.map((option, index) => (
            <div key={index} className={styles.variantInputWrapper}>
              <Input
                label={option}
                type="radio"
                name="toast-type"
                id={option}
                value={option}
                checked={variant === option}
                onChange={(e) => setVariant(e.target.value)}
              />
            </div>
          ))}
          <p>Message: {message || "undefined"}</p>
          <p>Checked value: {variant || "undefined"}</p>
        </div>
      </fieldset>
      <div className={styles.row}>
        <div></div>
        <div>
          <button>Pop Toast!</button>
        </div>
      </div>
    </Form>
  );
}

export default FormToastMaker;
