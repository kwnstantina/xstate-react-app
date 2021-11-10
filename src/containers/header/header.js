import React from 'react';
import "./header.css";
import menu from '../../images/lines.png';
import logo from '../../images/logo.png';
const Header=()=>{
    return(
       <div>
           <nav>
               <img src={menu} className="menu-img" />
               <img src={logo} className="logo" />
               <ul>
                   <li><a href=''>Contribute</a></li>
                
               </ul>
               <button type='button' onClick={()=>alert('h1')}><span></span></button>
           </nav>
       </div>
    );
}

export default Header;