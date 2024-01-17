import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        JED creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
