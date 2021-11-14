import React from 'react'
import "./formStepStyles.css"

const FormStepLast =()=>  {
    return (
        <div>
             <div className="form__group">
             <p style={{margin:'30px'}}>Your team is ready!</p>
             <button className="form__buttonTwo" onClick={()=>null}>Done</button>
            </div>
        </div>
    )
}

export default FormStepLast
