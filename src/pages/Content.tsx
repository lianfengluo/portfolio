import React from "react";
import Home from "./Home";
import Careers from "./Careers";
import "./styles/Content.scss";


const Content: React.FC<{}> = () => {
    return (
    <div className="content">
        <div id="Home">
            <Home />
        </div>
        <div id="Careers">
            <Careers />
        </div>
        <div id="Projects">
        </div>
        <div id="About">
        </div>
    </div>)
}

export default Content;