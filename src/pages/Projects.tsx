import React from "react";
import styles from "./styles/Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC<{}> = () => {
  return (
    <div className={styles["projects"]}>
      <div className={styles["project__container"]}>
        <div className={styles["project1"]}>
          <div className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
              <div className={styles["flip-card-front"]}>
                <img
                  src="https://miro.medium.com/max/2800/0*qwkWXc-wzW2D8ggV.jpg"
                  alt="Sorting project"
                  className={styles["filp-card-image"]}
                />
              </div>
              <div className={styles["flip-card-back"]}>
                <div className={styles["card-title"]}>
                  Sorting project
                  <div className={styles["filp-card__icon"]}>
                    <a
                      href="https://github.com/lianfengluo/sorting_project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a
                      href="https://lianfengluo.github.io/sorting_project/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles["add-margin"]}
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                    </a>
                  </div>
                </div>
                <div className={styles["project-description"]}>
                  <div>This web project is about different sorting algorithms.</div>
                  <div>
                    <code>React, Typescript</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["project2"]}>
          <div className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
              <div className={styles["flip-card-front"]}>
                <img
                  src="https://www.communityhousing.com.au/wp-content/uploads/2018/09/Box-Hill-1024x624.jpg"
                  alt="Housing project"
                  className={styles["filp-card-image"]}
                />
              </div>
              <div className={styles["flip-card-back"]}>
                <div className={styles["card-title"]}>
                  Accommodating
                  <div className={styles["filp-card__icon"]}>
                    <a
                      href="https://github.com/lianfengluo/Accommodating"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
                <div className={styles["project-description"]}>
                  <div>A clone of Airbnb by React.</div>
                  <div>
                    <code>React, Django, Django REST Framework</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["project3"]}>
          <div className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
              <div className={styles["flip-card-front"]}>
                <img
                  src="https://systweak1.vo.llnwd.net/content/wp/systweakblogsnew/uploads/2018/05/compression-software.jpg"
                  alt="Compress project"
                  className={styles["filp-card-image"]}
                />
              </div>
              <div className={styles["flip-card-back"]}>
                <div className={styles["card-title"]}>
                  LZW <br /> Run-length BWT
                  <div className={styles["filp-card__icon"]}>
                    <a
                      href="https://github.com/lianfengluo/comp9319_2019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
                <div className={styles["project-description"]}>
                  <div>
                    LZW encode/decode and forward/backward BWT search methods on the Run-length BWT
                    encoded files.
                  </div>
                  <div>
                    <code>C++</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["project4"]}>
          <div className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
              <div className={styles["flip-card-front"]}>
                <img
                  src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/instagram-logo.png"
                  alt="Sharing posting project"
                  className={styles["filp-card-image"]}
                />
              </div>
              <div className={styles["flip-card-back"]}>
                <div className={styles["card-title"]}>
                  Instacram
                  <div className={styles["filp-card__icon"]}>
                    <a
                      href="https://github.com/lianfengluo/instacram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
                <div className={styles["project-description"]}>
                  <div>A simple clone of Instagram</div>
                  <div>
                    <code>vanilla JavaScript</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["project5"]}>
          <div className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
              <div className={styles["flip-card-front"]}>
                <img
                  src="https://miro.medium.com/max/2732/1*mtsk3fQ_BRemFidhkel3dA.png"
                  alt="Local Git project"
                  className={styles["filp-card-image"]}
                />
              </div>
              <div className={styles["flip-card-back"]}>
                <div className={styles["card-title"]}>
                  Legit
                  <div className={styles["filp-card__icon"]}>
                    <a
                      href="https://github.com/lianfengluo/comp9319/tree/master/ass1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
                <div className={styles["project-description"]}>
                  <div>
                    A simple local git clone. (init, add, rm, commit, branch, checkout, merge,
                    status, log, diff)
                  </div>
                  <div>
                    <code>Perl</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
