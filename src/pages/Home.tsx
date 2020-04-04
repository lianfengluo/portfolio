import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Home.module.scss";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["intro"]}>Hi,</div>
      <div className={styles["intro"]}>
        I'm <span className={styles["name"]}>Richard</span>
      </div>
      <div className={styles["bio"]}>Web developer (Frontend focus)</div>
      <div className={styles["intro"]}>Javascript / React / HTML / CSS / Python / REST-API</div>
      <div className={styles["icons"]}>
        <a href="https://github.com/lianfengluo/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-luo-849a87103/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="mailto:lianfengluo28@gmail.com" target="_top">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Home;
