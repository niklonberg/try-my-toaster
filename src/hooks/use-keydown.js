import React from "react";

function useKeydown(key, callback) {
  if (typeof key !== "string")
    throw Error(
      `Invalid value for key parameter, ${key}. Expected string corresponding to a key code`
    );

  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.code === key) callback(e);
    }

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [key, callback]);
}

export default useKeydown;
