import React from "react";
import Form from "./Form";

function FormToastingGround() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  return (
    <Form>
      <label>Variant</label>
      <input type="radio"></input>
    </Form>
  );
}

export default FormToastingGround;
