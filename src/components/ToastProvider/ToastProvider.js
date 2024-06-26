import React from "react";
import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleAddToast(variant, message) {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), variant, message },
    ];
    setToasts(nextToasts);
  }

  function handleDismissToast(toastId) {
    const nextToasts = [...toasts].filter((toast) => toast.id !== toastId);
    setToasts(nextToasts);
  }

  const handleEscapeKeydown = React.useCallback(() => setToasts([]), []);
  useKeydown("Escape", handleEscapeKeydown);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleAddToast,
        handleDismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
