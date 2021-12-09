import React from 'react'
import './formStepStyles.css';
import {stepMachine} from '../../models/statecharts/states';
import { useMachine } from "@xstate/react";
import { useNavigate } from "react-router-dom";

const FormStepThree=({nextStep,page})=> {
    const [data, send] = useMachine(stepMachine);
    let navigate = useNavigate();

    const handleChange =(e)=>{
        send("CHANGE", { key: e.target.name, value: e.target.value });
    }
    
    const handleSubmit=()=>{
        nextStep("NEXT",{values:data.context?.values});
        navigate(`/form/${page}`)
   }

   const handlePreviousPage=()=>{
    nextStep("PREVIOUS",{nextStep:2,stepTwoValues:data.context?.values,values:data.context?.values,step:page});
    navigate(-1);
}
    return (
        <div className="form__group">
            <p>Fill details of the third person of crew </p>
                <form className="form__question" onSubmit={()=>(false)}>
                <label htmlFor="thirdFriendName">
                <input className="form__input" type="text" placeholder="Name"  name="thirdFriendName" required onChange={(e)=>handleChange(e)} />
                    <span className="form__floating_label" style={{color:data.context.errors.thirdFriendName?'#ef5350':'#9500ae'}}>Name</span>
                    {data.context.errors.thirdFriendName && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label> 
                <p className='form__error'>{data.context.errors.thirdFriendName}</p>
                <label htmlFor="thirdFriendEmail">
                <input className="form__input" type="text" placeholder="Email"  name="thirdFriendEmail" required onChange={(e)=>handleChange(e)} />
                    <span className="form__floating_label" style={{color:data.context.errors.thirdFriendEmail?'#ef5350':'#9500ae'}}>Email</span>
                    {data.context.errors.thirdFriendEmail && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label>  
                <p  className='form__error'>{data.context.errors.thirdFriendEmail}</p> 
                <div className='form_button_container'> 
                 <button className="form__buttonTwo"  type='button' onClick={handlePreviousPage}>Previous </button>
                 <button className="form__buttonTwo" type='button' onClick={handleSubmit}>Next </button>
               </div>
                </form>
      
        </div>
    )
}

export default FormStepThree;
