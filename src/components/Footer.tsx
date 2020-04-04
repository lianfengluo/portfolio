import React from "react";
import styles from "./styles/Footer.module.scss";

const Footer: React.FC<{}> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.author}>
        Author: <span>Richard Luo</span>
      </div>
    </div>
  );
};

export default Footer;
