import React from "react"
import arcade from "../../../assets/multi-step-form-main/assets/images/icon-arcade.svg"
import advanced from "../../../assets/multi-step-form-main/assets/images/icon-advanced.svg"
import pro from "../../../assets/multi-step-form-main/assets/images/icon-pro.svg"

const Plan = () => {
  const plans=[
    {
      id:1,
      title:"Arcade",
      value:"9",
    },
    {
      id:2,
      title:"Advanced",
      value:"12"
    },
    {
      id:3,
      title:"Pro",
      value:"15"
    },
  ]
  return (
    <div className="plan">
      <div className="title">
        <h1>Select you plan</h1>
        <h3 className="sub-title">
          You have the option of monthly or yearly billing.
        </h3>
      </div>
      <div className="plan-cards">
        {plans.map(plan=>{
          return (
            <div key={plan.id} className={`plan-card active`}>
            <img src={arcade} alt="arcade" /> 
            <div className="card-title">
              Arcade
              <div className="card-sub-title">${plan.value}/mo</div>
            </div>
          </div>     
          )
        })}
      </div>
    </div>
  )
}

export default Plan
