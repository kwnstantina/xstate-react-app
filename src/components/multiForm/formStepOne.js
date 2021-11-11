import React from 'react'
import'./formStepOne.css';

const  FormStepOne=()=> {
    return (
        <div className="form__group">
            <p>Your Details</p>
            <form className="form__question">
                <input className="form__input" type="text" placeholder="Name"  required/>
                <input className="form__input" type="email" placeholder="Email" required/>
                <input className="form__input" type="text" placeholder="Phone Number" maxLength="10"  required/>
                <button className="form__button" onClick={()=>null}>Next</button>
            </form> 
        </div>
    )
}

export default  FormStepOne;
