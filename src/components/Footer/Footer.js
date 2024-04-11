import React from "react";
import styles from "./Footer.module.scss";

function Footer({ text, address }) {
  return (
    <footer className={styles.wrapper}>
      {text}
      {address}
    </footer>
  );
}

export default Footer;
