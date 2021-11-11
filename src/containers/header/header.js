import React from 'react';
import "./header.css";
import menu from '../../images/lines.png';
import logo from '../../images/logo.png';

const Header=(props)=>{
    const {lightFn,light}=props;

    const onClickAction=(lightFn,light)=>{
        switch(light.value){
            case "swiched_on":
                lightFn("SWITCH_OFF");
                break;
            case "swiched_off":
                lightFn("SWITCH_ON");
                break;
            default:
                lightFn("SWITCH_ON");
        }
    }
    return(
       <div>
           <nav>
               <img src={menu} className="menu-img" />
               <img src={logo} className="logo" />
               <ul>
                   <li><a href=''>Re-toggle the bulb</a></li>
               </ul>
               <button type='button' onClick={()=>onClickAction(lightFn,light)}><span/></button>
           </nav>
       </div>
    );
}

export default Header;