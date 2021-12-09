import React, {useEffect,useState} from 'react'
import'./formStepStyles.css';
import {stepMachine} from '../../models/statecharts/states';
import { useMachine } from "@xstate/react";
import { useNavigate } from "react-router-dom";
import {calculateNavigationStep} from '../../utils/functions/functions';
const  FormStepOne=(  {nextStep,checkTotalNumber,setCheckTotalNumber,page,current})=> {
    const [data, send] = useMachine(stepMachine);
    let navigate = useNavigate();

    useEffect(()=>{
        setCheckTotalNumber(data.context?.values?.totalMembers)
        if(data.context.values && data.context.values.name ){
         navigate(`/form/${page}`)
        }
    },[data]);

 
    console.log(current.context?.step)

    useEffect(()=>{   
        if(current.context.values && current.context.values.name ){
            send("INITIAL_VALUES", {initial:[{ 
                  key: 'name', value:current.context.values.name},
                { key: 'email', value:current.context.values.email },
                { key: 'phoneNumber', value:current.context.values.phoneNumber },
                { key: 'totalMembers', value:current.context.values.totalMembers }
            ]})
        }
      
    },[current.context.values?.name])

    const handleChange =(e)=>{
        e.preventDefault();
        send("CHANGE", { key: e.target.name, value: e.target.value });
    }

    const handleSubmit=()=>{
        nextStep("NEXT",{totalNumber:checkTotalNumber,values:data.context?.values,step:checkTotalNumber});
        //navigate(`/form/${page+1}`)
        navigate(`/form/${calculateNavigationStep(checkTotalNumber)}`)
    }

    return (
        <div className="form__group">
            <p style={{textAlign:'center'}}>Your Details</p>
            <form className="form__question">
                <label htmlFor="name">
                <input className="form__input" placeholder='Name' type="text"  autoComplete="off" name="name"  value={data.context.values?.name || ''} required onChange={(e)=>handleChange(e)} />
                    <span className="form__floating_label" style={{color:data.context.errors.name?'#ef5350':'#9500ae'}}>Name</span>
                    {data.context.errors.name && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label>              
                <p className='form__error'>{data.context.errors.name}</p>
                <label htmlFor="email">
                <input className="form__input" type="email" placeholder="Email" autoComplete="off" name="email" required  value={data.context.values?.email || ''} onChange={(e)=>handleChange(e)} />
                <span className="form__floating_label" style={{color:data.context.errors.email?'#ef5350':'#9500ae'}}>Email</span>
                {data.context.errors.email && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                 </label>
                <p className='form__error'>{data.context.errors.email}</p>
                <label htmlFor="phoneNumber">
                <input className="form__input" type="text" placeholder="Phone Number" autoComplete="off" name="phoneNumber"  value={data.context.values?.phoneNumber || ''} maxLength="10"  required onChange={(e)=>handleChange(e)}/>
                <span className="form__floating_label" style={{color:data.context.errors.phoneNumber?'#ef5350':'#9500ae'}}>Phone Number</span>
                {data.context.errors.phoneNumber && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label>
                <p className='form__error'>{data.context.errors.phoneNumber}</p>
                <label htmlFor="totalMembers">
                <input className="form__input" type="number" autoComplete="off" placeholder="Total team members" name="totalMembers" min="1" max="3"  value={data.context.values?.totalMembers || ''}required onChange={(e)=>handleChange(e)}/>
                <span className="form__floating_label" style={{color:data.context.errors.totalMembers?'#ef5350':'#9500ae'}}>Total Members</span>
                {data.context.errors.totalMembers && <hr style={{height:'5px',color:'#ef5350',backgroundColor:'#ef5350'}}/>}
                </label>
                <p className='form__error'>{data.context.errors.totalMembers}</p>    
              <button className="form__button" onClick={handleSubmit}>Next</button> 
            </form> 

        </div>
    )
}

export default  FormStepOne;
