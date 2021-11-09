import React from "react";
import ReactDOM from "react-dom";
/** @jsx jsx */
import { Global, jsx } from "@emotion/react";
import { globalCss } from "./index.styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalCss} />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
