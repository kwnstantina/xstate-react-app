import React from 'react'
import './formStepStyles.css';
const FormStepTwo=({nextStep})=> {
    
    const handleSubmit=()=>{
        nextStep("NEXT");
   }
    return (
        <div className="form__group">
            <p>Fill details of the third person of crew </p>
                <form className="form__question">
                    <input className="form__input" type="text" maxLength="4" placeholder="Name" onChange={()=>null} required/>
                    <input className="form__input" type="text" maxLength="4" placeholder="Email" onChange={()=>null} required/>
                    <button className="form__buttonTwo"  onClick={handleSubmit}>Next </button>
                </form>
      
        </div>
    )
}

export default FormStepTwo;
