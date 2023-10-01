import React, { useState } from 'react'
import "./multistep-form.scss"
import sidebarDesktop from "../../assets/multi-step-form-main/assets/images/bg-sidebar-desktop.svg"
import sidebarMobile from "../../assets/multi-step-form-main/assets/images/bg-sidebar-mobile.svg"
import PersonalInfo from './steps/PersonalInfo'
import Stepper from './components/Stepper'
import NavigationButtons from './components/NavigationButtons'

const MultistepForm = () => {
  const deafultState={
    personalInfo:{},
    plan:{},
    addOns:{},

  }
  const [state,setState]=useState(deafultState)
  return (
    <div className='multistep-form-page'>
      <div className="container">
        <div className="sidebar">
          <img className='sidebar-img-mobile' src={sidebarMobile} alt="sidebarimg" />
          <img className='sidebar-img-desktop' src={sidebarDesktop} alt="sidebarimg" />

          <Stepper state={state}/>
        </div>
        <div className="content">
          <PersonalInfo state={state}/>
          <div className="mobile-actions">
            <NavigationButtons/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultistepForm