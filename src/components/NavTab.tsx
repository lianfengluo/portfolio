import React, { useRef } from "react";
import styles from "./styles/Header.module.scss";

interface Props {
  v: string;
  activateLink: React.MutableRefObject<HTMLAnchorElement | null>;
}

const NavTab: React.FC<Props> = ({ v, activateLink }) => {
  const currentRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <nav className={styles["nav-tab"]}>
      <a
        href={`#${v}`}
        ref={(ref) => {
          if (window.location.hash === `#${v}`) {
            activateLink.current = ref;
          }
          currentRef.current = ref;
        }}
        onClick={() => {
          activateLink.current?.classList.remove(styles["nav-tab--active"]);
          document.body.setAttribute("class", v.toLowerCase());
          activateLink.current = currentRef.current;
          currentRef.current?.classList.add(styles["nav-tab--active"]);
          window.history.pushState(null, v, `#${v}`);
        }}
      >
        <span className={styles["nav-tab__text"]}>{v}</span>
      </a>
    </nav>
  );
};

export default NavTab;
