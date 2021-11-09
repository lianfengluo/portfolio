/** @jsx jsx */
import { Global, jsx } from "@emotion/react";
import { globalCss, appCss } from "./App.styles";
import React from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import EnterAnimation from "./components/EnterAnimation";

// pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";
import About from "./pages/About";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
const navTab: string[] = ["Home", "Careers", "Projects", "About"];

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Global styles={globalCss} />
      <EnterAnimation />
      <div css={appCss}>
        <Header title={"Richard's Portfolio"} text={navTab} />
        <main>
          <div id="Home">
            <Home />
          </div>
          <div id="Careers">
            <Careers />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <div id="About">
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
