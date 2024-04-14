import React from "react";
import { X } from "react-feather";

function Toast({ toast }) {
  const { variant, message } = toast;
  return (
    <div>
      <svg></svg>
      <span>{variant}</span>
      <span>{message}</span>
      <button>
        <X />
      </button>
    </div>
  );
}

export default Toast;
