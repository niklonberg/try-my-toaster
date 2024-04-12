import React from "react";
import Form from "./Form";
import Input from "../Input";

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
        {ToastTypes.map((type) => (
          <Input
            label={type}
            type="radio"
            name="warning-type"
            value={type}
            onChange={(e) => setVariant(e.target.value)}
          />
        ))}
      </fieldset>
    </Form>
  );
}

export default FormToastMaker;
