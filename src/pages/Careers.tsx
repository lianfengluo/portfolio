import React, { useRef } from "react";
import styles from "./styles/Careers.module.scss";

const Careers: React.FC<{}> = () => {
  const atlassianRef = useRef<HTMLDivElement | null>(null);
  const hiveryRef = useRef<HTMLDivElement | null>(null);
  const UNSWRef = useRef<HTMLDivElement | null>(null);
  const NetEaseRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={styles["careers"]}>
      <div className={styles["info"]}>
        <div
          className={styles["atlassian"]}
          onMouseOver={() => {
            atlassianRef.current?.classList.add(styles["active"]);
          }}
          onMouseOut={() => {
            atlassianRef.current?.classList.remove(styles["active"]);
          }}
        >
          <div className={styles["company"]}>Atlassian</div>
          <div className={styles["job-title"]}>Full Stack Software Engineer</div>
          <div className={styles["description"]}>
            <p>
              Working on some feature in Jira. React in the frontend and kotlin spring backend work
              micro service
            </p>
            <div className={styles["date"]}>AUG 2021 - Present</div>
          </div>
        </div>

        <div
          className={styles["hivery"]}
          onMouseOver={() => {
            hiveryRef.current?.classList.add(styles["active"]);
          }}
          onMouseOut={() => {
            hiveryRef.current?.classList.remove(styles["active"]);
          }}
        >
          <div className={styles["company"]}>Hivery</div>
          <div className={styles["job-title"]}>Full Stack Software Engineer</div>
          <div className={styles["description"]}>
            <p>
              I am working with React Hook, Redux and Typescript in the fronend and some backend
              development related to Django REST framework.
            </p>
            <div className={styles["date"]}>FEB 2020 – AUG 2021</div>
          </div>
        </div>

        <div
          className={styles["UNSW"]}
          onMouseOver={() => {
            UNSWRef.current?.classList.add(styles["active"]);
          }}
          onMouseOut={() => {
            UNSWRef.current?.classList.remove(styles["active"]);
          }}
        >
          <div className={styles["company"]}>UNSW</div>
          <div className={styles["job-title"]}>Course Developer / Student Tutor</div>
          <div className={styles["description"]}>
            <p>
              I worked with professor Eric Martin to design the structure of a UNSW online data
              science course (ZZEN9021).
              <br />
              I helped my students improve their Python skills by programming code practices and
              solving quizze and as- signments together during the consultation.
              <br />I tried different strategies to help my students come up with efficient
              solutions under strict memory limit requirements in a course about Data Compression
              and Web Search.
            </p>
            <div className={styles["date"]}>JUL 2018 – JUN 2019</div>
          </div>
        </div>

        <div
          className={styles["NetEase"]}
          onMouseOver={() => {
            NetEaseRef.current?.classList.add(styles["active"]);
          }}
          onMouseOut={() => {
            NetEaseRef.current?.classList.remove(styles["active"]);
          }}
        >
          <div className={styles["company"]}>NetEase</div>
          <div className={styles["job-title"]}>Software Engineer</div>
          <div className={styles["description"]}>
            <p>
              I worked on both frontend and backend to build the OA system for the company. <br />I
              used Django REST framework (DRF) for the backend development and provided API for
              frontend.
            </p>
            <div className={styles["date"]}>JUL 2017 - OCT 2017</div>
          </div>
        </div>
      </div>

      <div className={styles["career-logos"]}>
        <div ref={atlassianRef}>
          <img
            src="https://images.ctfassets.net/8j5aqoy0ts8s/4jySPaEh2mr01RvfkuQoKf/4fe9e1602b683afb023d7a475f19bda1/logo-guideline-2_2x_170912_043411.png"
            alt="Atlassian"
          />
        </div>
        <div ref={hiveryRef}>
          <img src="https://s3.amazonaws.com/hivery-images/icon_hivery-logo.svg" alt="Hivery" />
        </div>
        <div ref={UNSWRef}>
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/01/unsw-sydney-vector-logo.png"
            alt="UNSW"
          />
        </div>
        <div ref={NetEaseRef}>
          <img
            src="https://netease-na.com/wp-content/uploads/2015/08/netease-logo.jpg"
            alt="NetEase"
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
