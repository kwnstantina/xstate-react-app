import React, { useState,useRef} from "react";
import { useMachine } from "@xstate/react";
import Header from "./containers/header/header";
import './App.css';
import LampHOC from './containers/lamp/lampHOC';
import MainTextHOC from './containers/mainText/mainTextHOC'
import { LightCheckbox } from "./models/statecharts/states";
import MultiFormHOC from './containers/multiForm/multiFormHOC';
import AnimatedFooter from './containers/animatedFooter/animatedFooter';
const App=()=> {
  const [light,lightFn ] = useMachine(LightCheckbox, { devTools: true });
  const multiform = React.useRef();

  const smoothScroll=(target)=> {
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
  }
  return (
    <div>
    <div className='hero' >
      <Header lightFn={lightFn} light={light}/>
      <LampHOC stateLight={light}/>
      <MainTextHOC smoothScroll={smoothScroll} multiform={multiform}/>
      <AnimatedFooter/>
    </div>
    <div ref={multiform}>
    <MultiFormHOC />
    </div>
    </div>
  );
}


export default App;

