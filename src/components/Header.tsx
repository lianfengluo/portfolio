import React, { useRef, useEffect } from 'react';
import './styles/Header.css';

interface Props {
  title: string;
  text: string[];
}

const Header: React.FC<Props> = ({title, text}) => {
//  const previousElement  = useRef<HTMLElement| null>(null);
 const navBar  = useRef<HTMLDivElement | null>(null);
 const activateLink  = useRef<HTMLAnchorElement | null>(null);

 useEffect(() => {
    // Setting default tab
    if (!window.location.hash) {
      (navBar.current?.firstChild?.firstChild as HTMLElement).click();
    } else {
      activateLink.current?.click();
    }
 }, [])

 return (
   <div className="header">
     <header className="header-content">
       <div className="header-title">
         {title}
       </div>
     </header>
     <div className="nav-bar" ref={ref => navBar.current = ref}>
        {text && text.map((v, k) => 
          <div key={k} className="nav-tab">
            <a href={`#${v}`}
            ref={ref => {
              if (window.location.hash === `#${v}`)
                activateLink.current = ref
            }}
              onClick={e => {
                activateLink.current?.classList.remove("active");
                activateLink.current = (e.target as HTMLAnchorElement);
                (e.target as HTMLElement).classList.add("active");
            }}>{v}</a>
          </div>) }
    </div>
   </div>
 )
}

export default Header;