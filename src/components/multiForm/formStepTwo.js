import React from 'react'
import './formStepStyles.css';
import {stepMachine} from '../../models/statecharts/states';
import { useMachine } from "@xstate/react";
import { useNavigate } from "react-router-dom";
const FormStepTwo=({nextStep,checkTotalNumber,current,page})=> {
    const [data, send] = useMachine(stepMachine);
    let navigate = useNavigate();

    const handleChange =(e)=>{
        send("CHANGE", { key: e.target.name, value: e.target.value });
    }
    const handleSubmit=()=>{
        nextStep("NEXT",{totalNumber:checkTotalNumber,values:data.context?.values});
        navigate(`/form/${page+1}`)
   }
   
   const handlePreviousPage=()=>{
    nextStep("PREVIOUS",{totalNumber:checkTotalNumber,nextStep:current?.context?.values?.nextStep,stepTwoValues:data.context?.values,values:current.context?.values,step:page});
     navigate(-1);
}
    return (
        <div className="form__group">
            <p>Fill details of the crew </p>
                <form className="form__question" onSubmit={()=>(false)}>
                <label htmlFor="secondFriendName">
                <input className="form__input" type="text" placeholder="Name"  name="secondFriendName" required onChange={(e)=>handleChange(e)} />
                    <span className="form__floating_label" style={{color:data.context.errors.secondFriendName?'#ef5350':'#9500ae'}}>Name</span>
                    {data.context.errors.secondFriendName && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label> 
                <p  className='form__error'>{data.context.errors.secondFriendName}</p>

                <label htmlFor="secondFriendEmail">
                <input className="form__input" type="text" placeholder="Email"  name="secondFriendEmail" required onChange={(e)=>handleChange(e)} />
                    <span className="form__floating_label" style={{color:data.context.errors.secondFriendEmail?'#ef5350':'#9500ae'}}>Email</span>
                    {data.context.errors.secondFriendEmail && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label>  
                <p className='form__error'>{data.context.errors.secondFriendEmail}</p>
                <div className='form_button_container'> 
                 <button className="form__buttonTwo" type='button' onClick={handlePreviousPage}>Previous </button>
                 <button className="form__buttonTwo"   type='button' onClick={handleSubmit}>Next </button>
               </div>
                </form>
      
        </div>
    )
}

export default FormStepTwo;
