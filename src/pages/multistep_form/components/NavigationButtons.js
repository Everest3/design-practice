import React from 'react'
import { validate } from './Validation'

const NavigationButtons = ({state,step,setStep,setErrors}) => {

  const handleStep= async (count)=>{
    let errors={}
    if(count>0){
      errors=await validate({currentStep:step,state:state})
    }
    if(Object.keys(errors)?.length>0){
      setErrors(errors)
      return 
    }
    console.log({errors})
    // if(Object.k)
    setStep((currentStep)=>currentStep+count)
  }


  return( <div className="actions">
    {step>1 ? <button className="btn back-btn" onClick={()=>handleStep(-1)}>Go Back</button>:<div/>}
    <button className="btn next-btn" onClick={()=>handleStep(1)}>Next Step</button>
  </div>
)
}

export default NavigationButtons