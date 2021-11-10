import React, { useState } from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import Header from "./containers/header/header";
import './App.css';
import LampHOC from './containers/lamp/lampHOC';
import MainTextHOC from './containers/mainText/mainTextHOC'

const toggleMachine = createMachine({
  initial: "untoggled",
  context: {
    count: 0
  },
  states: {
    untoggled: {
      on: { TOGGLE: "toggled" }
    },
    toggled: {
      entry: assign({
        count: context => context.count + 1
      }),
      on: {
        TOGGLE: "untoggled"
      },
      after: {
        1000: "untoggled"
      }
    }
  }
});

function App() {
  const [state, send] = useMachine(toggleMachine, { devTools: true });
  console.log(state);
  const [toggled, setToggled] = useState(false);

  return (
    // <div className="App">
    //   <h1>{toggled ? "Toggled" : "Nope"}</h1>
    //   <h2>
    //     {state.value} ({state.context.count})
    //   </h2>
    //   <button
    //     onClick={() => {
    //       send("TOGGLE");
    //     }}
    //   >
    //     Toggle
    //   </button>
    // </div>

    <div className='hero' >
      <Header/>
      <LampHOC/>
      <MainTextHOC/>
    </div>
  );
}


export default App;

