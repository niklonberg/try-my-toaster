import React from "react";

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

  React.useEffect(() => {
    function handleEscapeKey(e) {
      if (e.code === "Escape") setToasts([]);
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [setToasts]);

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
