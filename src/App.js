import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";
import Header from "./containers/header/header";
import './App.css';
import LampHOC from './containers/lamp/lampHOC';
import MainTextHOC from './containers/mainText/mainTextHOC'
import { LightCheckbox } from "./models/statecharts/states";
import MultiFormHOC from './containers/multiForm/multiFormHOC';
import StaticFooter from "./containers/staticFooter/staticFooter";
import { useNavigate,} from "react-router-dom";

const App=()=> {
  const [light,lightFn ] = useMachine(LightCheckbox, { devTools: true });
  const multiform = React.useRef();
  let navigate = useNavigate();

  const smoothScroll=(target)=> {
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
   navigate(`/form/${1}`);
  }
  
  return (
    <div>
    <div className='hero' >
      <Header lightFn={lightFn} light={light}/>
      <LampHOC stateLight={light}/>
      <MainTextHOC smoothScroll={smoothScroll} multiform={multiform}/>
    </div>
    <div ref={multiform}>
    <MultiFormHOC />
    <StaticFooter/>
    </div>
    </div>
  );
}


export default App;

