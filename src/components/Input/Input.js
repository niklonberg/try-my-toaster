import React from "react";

function Input({ id, label, inputType, styles = {}, ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  const inputStyles = {
    ...styles,
    // Add any additional styles or overrides here if needed
  };

  if (inputType === "textarea")
    return (
      <>
        <label htmlFor={appliedId}>{label}</label>
        <textarea id={appliedId} style={inputStyles} {...delegated}></textarea>
      </>
    );

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input
        id={appliedId}
        type={inputType}
        style={inputStyles}
        {...delegated}
      ></input>
    </>
  );
}

export default Input;
