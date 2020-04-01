import React from "react";
import "./styles/Careers.scss";

const Careers: React.FC<{}> = () => {
    return (
      <div className="careers">
        <div className="info">
          <div className="hivery">
            <div className="company">Hivery</div>
            <div className="job-title">Full Stack Software Engineer</div>
            <div className="description">
              <p>
                I am working with React Hook, Redux and Typescript in the fronend 
                and some backend development related to Django REST framework.
              </p>
              <div className="date">
                FEB 2020 – PRESENT
              </div>
            </div>
          </div>

          <div className="UNSW">
            <div className="company">UNSW</div>
            <div className="job-title">Course Developer</div>
            <div className="description">
              <p>
                I worked with professor Eric Martin to design the structure of a UNSW online data science course (ZZEN9021).
              </p>
              <div className="date">
                FEB 2019 – JUN 2019
              </div>
            </div>
          </div>

          <div className="UNSW">
            <div className="company">UNSW</div>
            <div className="job-title">Student Tutor</div>
            <div className="description">
              <p>
                I helped my students improve their Python skills by programming code practices and solving quizze and as- signments 
                together during the consultation.<br/>
                I tried different strategies to help my students come up with efficient solutions under strict memory limit 
                requirements in a course about Data Compression and Web Search.
              </p>
              <div className="date">
                JUL 2018 – AUG 2019
              </div>
            </div>
          </div>

          <div className="NetEase">
            <div className="company">NetEase</div>
            <div className="job-title">Software Engineer</div>
            <div className="description">
              <p>
                I worked on both frontend and backend to build the OA system for the company. <br/>
                I used Django REST framework (DRF) for the backend development and provided API for frontend.
              </p>
              <div className="date">
                JUL 2017 - OCT 2017
              </div>
            </div>
          </div>
        </div>

        <div className="career-logos">
        </div>
      </div>
    )
}

export default Careers;