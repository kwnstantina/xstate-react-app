import React from 'react';
import './mainTextHOC.css';

const MainTextHOC=({smoothScroll,multiform})=>{

    return(
        <div className="text-container">
            <h1>An app using XState & React  </h1>
            <p>Explore XState library with React through a light state button with animanion and multi-step form</p>
            <a onClick={() => smoothScroll(multiform.current)}>Contribute</a>
        </div>

    )
}

export default MainTextHOC;