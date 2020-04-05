import React, { useRef } from "react";
import styles from "./styles/Header.module.scss";

interface Props {
  v: string;
  activateLink: React.MutableRefObject<HTMLAnchorElement | null>;
}

const NavTab: React.FC<Props> = ({ v, activateLink }) => {
  const currentRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div className={styles["nav-tab"]}>
      <a
        href={`#${v}`}
        ref={(ref) => {
          if (window.location.hash === `#${v}`) {
            activateLink.current = ref;
          }
          currentRef.current = ref;
        }}
        onClick={() => {
          activateLink.current?.classList.remove(styles["active"]);
          document.body.setAttribute("class", v.toLowerCase());
          activateLink.current = currentRef.current;
          currentRef.current?.classList.add(styles["active"]);
        }}
      >
        <span className={styles["nav-tab-text"]}>{v}</span>
      </a>
    </div>
  );
};

export default NavTab;
