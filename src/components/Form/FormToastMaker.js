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
      <Input
        id={"toast-message"}
        label={"Message"}
        inputType={"textarea"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <fieldset>
        <legend>Variant</legend>
        {ToastTypes.map((type, index) => (
          <div key={index} className={styles.variantInputWrapper}>
            <Input
              label={type}
              type="radio"
              name="warning-type"
              value={type}
              onChange={(e) => setVariant(e.target.value)}
            />
          </div>
        ))}
      </fieldset>
      <button>Pop Toast!</button>
    </Form>
  );
}

export default FormToastMaker;
