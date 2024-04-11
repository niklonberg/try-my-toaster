import React from "react";

function Header({ title, headingLevel = 1 }) {
  const HeadingLvlTag = `h${headingLevel}`;
  if (typeof headingLevel !== "number" || headingLevel < 1 || headingLevel > 6)
    throw Error(
      `Unrecognized value for '${headingLevel}'. Expected number between 1 - 6`
    );
  return (
    <header>
      <HeadingLvlTag>{title}</HeadingLvlTag>
    </header>
  );
}

export default Header;
