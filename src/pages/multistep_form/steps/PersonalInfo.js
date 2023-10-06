import React from 'react'

const PersonalInfo = ({state,errors,handleChange}) => {


  const inputLabel=({label,value,key})=>{
    return (
      <div className="input-label">
        {label && <label htmlFor={key}>{label}</label>}
        <input
          className={`${errors[key] ? "input-error" : ""}`}
          value={value?? ""}
          id={key}
          type="text"
          onChange={(e) =>
            handleChange({ key, value: e.target.value })
          }
        />
        <div
          className={`${errors[key] ? "error-message" : ""}`}
        >
          {errors[key]}
        </div>
      </div>
    )
  }

  return (
    <div className="personal-info">
    <div className="title">
      <h1>Personal Info</h1>
      <h3 className="sub-title">Please provide your name,email address,and phone number.</h3>
    </div>
    <div className="form-inputs">
      {inputLabel({value:state.personalInfo?.name ,label:"Name",key:"personalInfo.name"})}
      {inputLabel({value:state.personalInfo?.email ,label:"Email",key:"personalInfo.email"})}
      {inputLabel({value:state.personalInfo?.phoneNumber ,label:"Phone Number",key:"personalInfo.phoneNumber"})}
    </div>
  </div>
  )
}

export default PersonalInfo