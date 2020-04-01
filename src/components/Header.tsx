import React, { useRef, useEffect } from 'react';
import NavTab from "./NavTab";
import './styles/Header.scss';

interface Props {
  title: string;
  text: string[];
}

const Header: React.FC<Props> = ( {title, text} ) => {
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
        {text && text.map((v, k) => <NavTab key={k} v={v} activateLink={activateLink} />) }
    </div>
   </div>
 )
}

export default Header;