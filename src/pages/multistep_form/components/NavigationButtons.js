import React from 'react'
import { validate } from './Validation'

const NavigationButtons = ({state,step,setStep,setErrors}) => {
  
  const handleStep= async (count)=>{
  let lastButton= step==4 && count>0
    if(lastButton)return 
    let errors={}
    if(count>0){
      errors=await validate({currentStep:step,state:state})
    }
    if(Object.keys(errors)?.length>0){
      setErrors(errors)
      return 
    }
    
    setStep((currentStep)=>currentStep+count)
  }


  return( <div className="actions">
    {step>1 ? <button className="btn back-btn" onClick={()=>handleStep(-1)}>Go Back</button>:<div/>}
    <button className="btn next-btn" onClick={()=>handleStep(1)}>{step==4?"Submit":"Next Step"}</button>
  </div>
)
}

export default NavigationButtons