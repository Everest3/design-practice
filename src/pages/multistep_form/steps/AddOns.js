import React from 'react'

const AddOns = ({state,handleChange}) => {

  const addOns=[
    {
      id:1,
      title:"Online service",
      subHeader:"Access to multiplayer games",
      value:"1"
    },
    {
      id:2,
      title:"Larger storage",
      subHeader:"Extra 1TB of cloud save",
      value:"2"
    },
    {
      id:3,
      title:"Customizable Profile",
      subHeader:"Custom theme on your profile",
      value:"2"
    },
  ]
  return (
    <div className="add-ons">
    <div className="title">
      <h1>Pick add-ons</h1>
      <h3 className="sub-title">
        Add-ons help enhance your gaming experience.
      </h3>
    </div>
    <div className="add-on-cards">
      {addOns.map(addOn=>{
        return (
          <div key={addOn.id} 
          className={`add-on-card ${state.addOn.id===addOn.id?"active":""}`} onClick={()=>handleChange({key:"addOn",value:addOn})}
          >
            <input type="checkbox" />
            <div className="card-title">
              {addOn.title}
              <div className="card-sub-title">{addOn.subHeader}</div>
            </div>
            <div className="months">${addOn.value}/mo</div>
          </div>     
        )
      })}
    </div>
  </div>
  )
}

export default AddOns