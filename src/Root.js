import React from 'react';
import {
    Routes,
    Route,

  } from "react-router-dom";
  import App from './App';
  import MultiFormHOC from './containers/multiForm/multiFormHOC';
  import FormStepOne from './components/multiForm/formStepOne';
  import FormStepTwo from './components/multiForm/formStepTwo';
  import FormStepThree from './components/multiForm/formStepThree';
  import FormStepLast from './components/multiForm/formStepLast';

const Root= ()=>{
  const routes = [

  {
    path: '/form/1',
    element: <FormStepOne/>
  }, {
    path: '/form/2',
    element: <FormStepTwo/>,
  }, {
    path: '/form/3',
    element: <FormStepThree/>,
  }, {
    path: '/form/4',
    element: <FormStepLast/>,
  }]

  const routeComponents = routes.map(({path, element}, key) => <Route  path={path} element={element} key={key} />);

    return(
     <Routes>
    <Route path="/"  element={<App />}> 
      <Route path='/form'  element={<MultiFormHOC/>} > 
      {routeComponents}
      </Route>
      </Route>


    </Routes>
   
    )
}


export default Root;