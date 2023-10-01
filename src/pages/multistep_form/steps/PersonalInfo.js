import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="personal-info">
    <div className="title">
      <h1>Personal Info</h1>
      <h3 className="sub-title">Please provide your name,email address,and phone number.</h3>
    </div>
    <div className="form-inputs">
      <div className="input-label">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className="input-label">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div className="input-label">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" />
      </div>
    </div>
  </div>
  )
}

export default PersonalInfo