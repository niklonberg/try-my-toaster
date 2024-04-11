import React from "react";
import styles from "./Header.module.scss";

function Header({ title, headingLevel = 1, fontSize = 32, children }) {
  const HeadingLvlTag = `h${headingLevel}`;
  if (typeof headingLevel !== "number" || headingLevel < 1 || headingLevel > 6)
    throw Error(
      `Unrecognized value for '${headingLevel}'. Expected number between 1 - 6`
    );
  if (typeof fontSize !== "number")
    throw Error(`Invalid type '${fontSize}' for fontSize. Expected number`);
  return (
    <header>
      <HeadingLvlTag style={{ fontSize }}>{title}</HeadingLvlTag>
      {children}
    </header>
  );
}

export default Header;
