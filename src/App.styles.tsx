import { css } from "@emotion/react";

export const globalCss = css`
  #root {
    width: 100%;
    height: 100%;
  }

  #Home,
  #Careers,
  #Projects,
  #About {
    transition: transform 0.5s linear;
    transform-origin: bottom bottom;
    position: fixed;
    display: flex;
    height: 100%;
    width: 100%;
    transform: translate3d(0, -100%, 0);
    overflow-y: hidden;
  }

  #Home:target,
  #Careers:target,
  #Projects:target,
  #About:target {
    transform: translate3d(0, 0, 0);
  }
`;

export const appCss = css`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
