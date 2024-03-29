import { css } from "@emotion/react";

export const globalCss = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .home {
    background-color: rgb(90, 90, 90);
  }

  .careers {
    background-color: salmon;
  }

  .projects {
    background-color: rgb(98, 175, 251);
  }

  .about {
    background-color: #fff5ee;
  }
`;
