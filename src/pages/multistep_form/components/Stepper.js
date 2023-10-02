import React, { useState } from 'react'

const Stepper = ({step}) => {

  return (
    <div className="stepper">
    <div className="step">
      <div className={`current-step-circle ${step===1?"step-active":""}`}>1</div>
      <div className="step-title">
        <span className='step-number'>STEP 1</span>
        YOUR INFO
      </div>
    </div>
    <div className="step">
      <div className={`current-step-circle ${step===2?"step-active":""}`}>2</div>
      <div className="step-title">
        <span className='step-number'>STEP 2</span>
        SELECT PLAN
      </div>
    </div>
    <div className="step">
      <div className={`current-step-circle ${step===3?"step-active":""}`}>3</div>
      <div className="step-title">
        <span className='step-number'>STEP 3</span>
        ADD-ONS
      </div>
    </div>
    <div className="step">
      <div className={`current-step-circle ${step===4?"step-active":""}`}>4</div>
      <div className="step-title">
        <span className='step-number'>STEP 4</span>
        SUMMARY
      </div>
    </div>
  </div>
  )
}

export default Stepper