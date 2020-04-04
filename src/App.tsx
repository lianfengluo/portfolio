import React from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";
import About from "./pages/About";

import styles from "./App.module.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.scss";

library.add(fab);
const navTab: string[] = ["Home", "Careers", "Projects", "About"];

const App: React.FC<{}> = () => {
  return (
    <div className={styles["App"]}>
      <Header title={"Richard's Portfolio"} text={navTab} />
      <div className={styles["Content"]}>
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
