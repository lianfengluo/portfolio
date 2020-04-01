import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles/Projects.scss";

const Home: React.FC<{}> = () => {
    return (
      <div className="home">
        <div className="intro">Hi,</div>
        <div className="intro">I'm <span className="name">Richard</span></div>
        <div className="bio">
          Web developer (Frontend focus)
        </div>
        <div className="intro">Javascript / React / HTML / CSS / Python / REST-API</div>
        <div className="icons">
          <a href="https://github.com/lianfengluo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="https://www.linkedin.com/in/richard-luo-849a87103/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="mailto:lianfengluo28@gmail.com" target="_top"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
    )
}

export default Home;