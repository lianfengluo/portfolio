import React, { useRef, useEffect } from "react";
import styles from "./styles/About.module.scss";

const About: React.FC<{}> = () => {
  const skillRef = useRef<HTMLDivElement | null>();
  const otherRef = useRef<HTMLDivElement | null>();
  const hashChangeCallback = () => {
    if (window.location.hash === "#About") {
      skillRef.current?.classList.add(styles["skill--animation"]);
      otherRef.current?.classList.add(styles["other--animation"]);
    } else {
      skillRef.current?.classList.remove(styles["skill--animation"]);
      otherRef.current?.classList.remove(styles["other--animation"]);
    }
  };

  useEffect(() => {
    skillRef.current?.classList.add(styles["skill--animation"]);
    otherRef.current?.classList.add(styles["other--animation"]);
    window.addEventListener("hashchange", hashChangeCallback);
    return () => window.removeEventListener("hashchange", hashChangeCallback);
  }, []);

  return (
    <div className={styles["about"]}>
      <div className={styles["skill"]} ref={(ref) => (skillRef.current = ref)}>
        <div className={styles["skill__title"]}>Skills</div>
        <section className={styles["skill__content"]}>
          <div className={styles["skill__content__col1"]}>
            <h3 className={styles["skill__content__title"]}>LANGUAGES</h3>
            <ul className={styles["skill__content__detail"]}>
              <li>
                <strong>Python, JavaScript, CSS, C/C++, HTML</strong>
              </li>
              <li>Java, Scala, Perl, Linux Shell, Erlang, SQL</li>
            </ul>
          </div>
          <div className={styles["skill__content__col2"]}>
            <h3 className={styles["skill__content__title"]}>Packages</h3>
            <ul className={styles["skill__content__detail"]}>
              <li>
                <strong>React, Django, Django REST framework, Typescript, Jest, Enzyme</strong>
              </li>
              <li>Node.js, Redux</li>
            </ul>
          </div>
          <div className={styles["skill__content__col3"]}>
            <h3 className={styles["skill__content__title"]}>TOOLS</h3>
            <ul className={styles["skill__content__detail"]}>
              <li>
                <strong>Git, Postman</strong>
              </li>
              <li>Docker, Nginx, Jira, Redis, Webpack, Elasticsearch</li>
            </ul>
          </div>
          <div className={styles["skill__content__col4"]}>
            <h3 className={styles["skill__content__title"]}>KNOWLEDGE</h3>
            <ul className={styles["skill__content__detail"]}>
              <li>
                <strong>OOP, REST-API, RDBMS</strong>
              </li>
              <li>
                Data Science, Machine Learning, Security, Networking, NoSql, Operating System,
                Networks, AWS, Functional Oriented Programming, MapReduce, Spark/Hadoop
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className={styles["other"]} ref={(ref) => (otherRef.current = ref)}>
        <section className={styles["education"]}>
          <div className={styles["title"]}>EDUCATION</div>
          <div className={styles["info"]}>
            <div>
              <time className={styles["time"]}>2018 - 2019</time>
              <div>
                <strong>Degree:</strong> Information Technology MASTER DEGREE
                <br />
                <strong>School:</strong> University of New South Wales (UNSW)
                <br />
                <strong>GPA:</strong> 3.5
              </div>
            </div>
            <div>
              <time className={styles["time"]}>2015 - 2018</time>
              <div>
                <strong>Degree:</strong> Information Security Bachelor DEGREE
                <br />
                <strong>School:</strong> Guangzhou University
                <br />
                <strong>GPA:</strong> 3.22
              </div>
            </div>
          </div>
        </section>
        <section className={styles["communication"]}>
          <div className={styles["title"]}>COMMUNICATION SKILLS</div>
          <div>
            <strong>CANTONESE:</strong> Native speaker
          </div>
          <div>
            <strong>MANDARIN:</strong> Native speaker
          </div>
          <div>
            <strong>ENGLISH:</strong> Advanced
          </div>
        </section>
        <section className={styles["community"]}>
          <div className={styles["title"]}>SCHOOL COMMUNITY</div>
          <div>
            <time>2019</time>&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Data Science Society</strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A member of
            education team at UNSW data science
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
