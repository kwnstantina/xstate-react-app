import React from 'react';
import "./lampHOC.css";
import lamp from '../../images/lamp.png'
import light from '../../images/light.png'
const LampHOC=({stateLight})=>{

    return(
     <div className="lamp-container">
         <img src={lamp} href="lamp" className="lamp"/>
         { stateLight.value==="swiched_on" && 
         <img src={light} href="lamp" className="light"/>
         }
     </div>
);

}

export default LampHOC;