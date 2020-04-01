import React from 'react';
import './styles/Footer.scss';


const Footer: React.FC<{}> = () => {
 return (
   <div className="footer">
       <div className="Author">
           Author: <span>Richard Luo</span>
       </div>
   </div>
 )
}

export default Footer;