import React from "react";
import styles from "./styles/Footer.module.scss";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.author}>
        Author: <span>Richard Luo</span>
      </div>
    </footer>
  );
};

export default Footer;
