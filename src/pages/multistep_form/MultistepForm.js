import React, { useState } from 'react'
import "./multistep-form.scss"
import sidebarDesktop from "../../assets/multi-step-form-main/assets/images/bg-sidebar-desktop.svg"
import sidebarMobile from "../../assets/multi-step-form-main/assets/images/bg-sidebar-mobile.svg"
import PersonalInfo from './steps/PersonalInfo'
import Stepper from './components/Stepper'
import NavigationButtons from './components/NavigationButtons'
import Plan from './steps/Plan'
import AddOns from './steps/AddOns'

const MultistepForm = () => {
  const deafultState={
    personalInfo:{},
    plan:{},
    addOns:{},

  }
  const [state,setState]=useState(deafultState)
  const [step,setStep]=useState(1)

  return (
    <div className='multistep-form-page'>
          <div className="sidebar mobile">
          <img className='sidebar-img-mobile' src={sidebarMobile} alt="sidebarimg" />
          <Stepper state={state} step={step}/>
        </div>
      <div className="container">
        <div className="sidebar desktop">
          <img className='sidebar-img-desktop' src={sidebarDesktop} alt="sidebarimg" />
          <Stepper state={state} step={step}/>
        </div>
        <div className="content">
          {step===1&& <PersonalInfo state={state}/>}
          {step===2&& <Plan state={state}/>}
          {step===3&& <AddOns state={state}/>}
          <div className="mobile-actions">
            <NavigationButtons step={step} setStep={setStep}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultistepForm