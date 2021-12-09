import React from 'react';
import "./formStepStyles.css";
import error from '../../images/error.png'
import Loader from '../loader/loader';
import { useNavigate } from "react-router-dom";

const FormStepLast =({nextStep,current, setPage})=>  {
  let navigate = useNavigate();

    const handleSubmit=()=>{
        nextStep("SUBMIT");
   }

   const handlePreviousPage=()=>{
    nextStep("PREVIOUS",{nextStep:current.context?.step});
    setPage(prev=>prev-1)
    navigate(-1);
   }

    return (
        <form onSubmit={()=>(false)}>
             <div className="form__group" >
             {current.context.loading? <Loader/>:
             <div>
             <p style={{margin:' 30px 10px 10px 0'}}>Your team is ready!</p>
             <div className="form__submit-message"> <p>After submition will be sent a mail to you with  details</p></div>

             <div className='form_button_container'> 
                 <button className="form__buttonTwo"  type="button" onClick={()=>handlePreviousPage()}>Previous </button>
                 <button className="form__buttonTwo" type="button" onClick={()=>handleSubmit()}>Submit</button>
               </div>
             {current && current.context && current.context.errors &&  <div className='form_submit-error'>
               <img src={error} alt='error'/>
               <p>Please try again.</p>
               <p>{current.context.errors}.</p>
             </div>}
             </div>
             }
            </div>
        </form>
    )
}

export default FormStepLast
