import React from 'react'

const NavigationButtons = ({step,setStep}) => {

  const handleStep=(count)=>{
    setStep((step)=>step+count)
  }


  return( <div className="actions">
    {step>1 ? <button className="btn back-btn" onClick={()=>handleStep(-1)}>Go Back</button>:<div/>}
    <button className="btn next-btn" onClick={()=>handleStep(1)}>Next Step</button>
  </div>
)
}

export default NavigationButtons