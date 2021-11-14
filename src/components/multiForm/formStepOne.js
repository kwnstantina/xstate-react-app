import React from 'react'
import'./formStepStyles.css';
import {stepMachine} from '../../models/statecharts/states';
import { useMachine } from "@xstate/react";

const  FormStepOne=(  {nextStep})=> {
    const [data, send] = useMachine(stepMachine);
    const handleChange =(e)=>{
        send("CHANGE", { key: e.target.name, value: e.target.value });
    }
    const handleSubmit=()=>{
         nextStep("NEXT");
    }
 
    return (
        <div className="form__group">
            <p>Your Details</p>
            <form className="form__question">
                <input className="form__input" type="text" placeholder="Name"  name="name" required onChange={(e)=>handleChange(e)} />
                <p  className='form__error'>{data.context.errors.name}</p>
                <input className="form__input" type="email" placeholder="Email" name="email" required onChange={(e)=>handleChange(e)} />
                <p className='form__error'>{data.context.errors.email}</p>
                <input className="form__input" type="text" placeholder="Phone Number" name="phoneNumber" maxLength="10"  required onChange={(e)=>handleChange(e)}/>
                <p className='form__error'>{data.context.errors.phoneNumber}</p>
                <input className="form__input" type="number" placeholder="Total team members" name="totalMembers" min="1" max="3" required onChange={(e)=>handleChange(e)}/>
                <p className='form__error'>{data.context.errors.totalMembers}</p>
              <button className="form__button" onClick={handleSubmit}>Next</button> 
                

            </form> 
        </div>
    )
}

export default  FormStepOne;
