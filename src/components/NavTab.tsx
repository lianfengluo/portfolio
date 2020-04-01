import React, { useRef } from 'react';
import './styles/Header.scss';

interface Props {
  v: string; 
  activateLink: React.MutableRefObject<HTMLAnchorElement | null>;
}


const NavTab: React.FC<Props> = ( {v, activateLink} ) => {
  const currentRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div className="nav-tab">
      <a href={`#${v}`}
        ref={ref => {
          if (window.location.hash === `#${v}`) {
            activateLink.current = ref
          }
          currentRef.current = ref;
        }}
        onClick={() => {
          activateLink.current?.classList.remove("active");
          activateLink.current = currentRef.current;
          currentRef.current?.classList.add("active");
      }}>
        <span className="nav-tab-text">{v}</span>
      </a>
    </div>
  )
}

export default NavTab;