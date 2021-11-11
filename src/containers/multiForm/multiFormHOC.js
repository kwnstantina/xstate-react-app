import React from 'react'
import'./multiFormHOC.css';
import ProgressBar from '../../components/multiForm/ProgressBar';
import FormStepOne from '../../components/multiForm/formStepOne';

const MultiFormHOC=()=> {
    return (
        <div className="form-container">
              <h3 className="form__title">Create your software team and join us!</h3>
              <div className="form__wrapper">
              <ProgressBar/>
              <FormStepOne/>
              </div>
        </div>
    )
}


export default  MultiFormHOC;
