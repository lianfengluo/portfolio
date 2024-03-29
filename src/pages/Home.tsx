import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Home.module.scss";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles["home"]}>
      <p className={styles["intro"]}>
        Hi,
        <br />
        I'm <span className={styles["name"]}>Richard</span>
        <div className={styles["bio"]}>Web developer (Frontend focus)</div>
        Javascript / React / HTML / CSS / Python / REST-API
      </p>
      <section className={styles["icons"]}>
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
        <a
          href="https://richardluo-gatsby-blog.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBlog} />
        </a>
        <a href="mailto:lianfengluo28@gmail.com" target="_top">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </section>
    </div>
  );
};

export default Home;
