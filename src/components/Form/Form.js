import React from "react";

function Form() {
  return (
    <form>
      <label htmlFor="message">Message</label>
      <textarea id="message"></textarea>
      <label>Variant</label>
      <input type="radio"></input>
    </form>
  );
}

export default Form;
