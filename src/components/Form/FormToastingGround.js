import React from "react";
import Form from "./Form";

function FormToastingGround() {
  return (
    <Form>
      <label htmlFor="message">Message</label>
      <textarea id="message"></textarea>
      <label>Variant</label>
      <input type="radio"></input>
    </Form>
  );
}

export default FormToastingGround;
