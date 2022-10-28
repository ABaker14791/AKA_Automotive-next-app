import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_copyright}>
      Copyright AKA Automotive © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
