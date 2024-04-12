import React from "react";

function Input({ id, label, inputType, ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id | generatedId;

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} type={inputType} {...delegated}></input>
    </>
  );
}

export default Input;
