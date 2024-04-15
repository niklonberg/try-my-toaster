import React from "react";
import Form from "./Form";
import Input from "../Input";

import styles from "./FormToastMaker.module.scss";

const TOAST_TYPES = ["notice", "warning", "success", "error"];

function FormToastMaker({ handleAddToast }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(TOAST_TYPES[0]);

  function handleSubmit(e) {
    e.preventDefault();
    handleAddToast(variant, message);
    setMessage("");
    setVariant(TOAST_TYPES[0]);
  }

  return (
    <Form submitCallback={(e) => handleSubmit(e)}>
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
          {TOAST_TYPES.map((option) => {
            const inputId = `variant-${option}`;
            return (
              <div key={inputId} className={styles.variantInputWrapper}>
                <Input
                  label={option}
                  type="radio"
                  name="toast-type"
                  id={inputId}
                  value={option}
                  checked={variant === option}
                  onChange={(e) => setVariant(e.target.value)}
                />
              </div>
            );
          })}
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
