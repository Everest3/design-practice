import React from 'react'
import { Link } from 'react-router-dom'

const Summary = ({state,setState,handleChange}) => {
  return (
    <div className="summary">
    <div className="title">
      <h1>Summary</h1>
      <h3 className="sub-title">
        Double-check everything looks OK before confirming.
      </h3>
    </div>
    <div className="summary-container">
        <div className="plan-summary">
          <div>
            <h4>{state?.plan?.title ?? ""}</h4>
            <div className='change-link' >Change</div>
          </div>
          <div>${state?.plan?.value}/mo</div>
        </div>
        {state?.addOns?.length>0 &&<>
        <div className='horizontal-rule'/>
        <div className="plan-add-ons">
          {state?.addOns.map(addOn=>{
            return <div className='plan-add-on'>
              <div className="add-on-header">
                {addOn.title}
              </div>
              <div>${addOn.value}/mo</div>
            </div>
          })}
        </div>
        </>}
    </div>
  </div>
  )
}

export default Summary