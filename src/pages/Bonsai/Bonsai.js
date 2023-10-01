import React from 'react'
import { Link } from 'react-router-dom'
import './bonsai.scss'
import bonsaiLogo from '../../assets/bonsai/bonsai_logo.svg'
import Toggle from '../../components/toggle/Toggle'
import {  FaCheck } from "react-icons/fa";

const Bonsai = () => {
  return (
    <div className='bonsai'>
      <div className="navbar">
        <Link to="/">
        <img src={bonsaiLogo} width={150}/>
        </Link>
        {/* </Link> */}
        <div className="navbar-items">
        <div className="nav-item">Product</div>
        <div className="nav-item">Templates</div>
        <div className="nav-item">Pricing</div>
        <div className="nav-item">Reviews</div>
        </div>

        <div className="login-area">
          <button className='btn login-btn'>LOG IN</button>
          <button className='btn start-btn'>START FREE</button>
        </div>
      </div>
      <div className="body">
      <div className="plans">
        <div className="plans-header">
          <h2>Plans & Pricing</h2>
          <div className="monthly">MONTHLY</div>
            <Toggle width={50}/>
          <div className="yearly">YEARLY</div>
        </div>
        <div className="plans-body">
          <div className="card">
            <h2>Starter</h2>
            <p>Ideal for freelancers and contractors just starting out.</p>
            <div className="price-section">
              <div className='dollar-sign'>$</div>
              <div className="price">24</div>
              <div className='plan-type'>/MONTH</div>
            </div>
            <div className="plan-pros">
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                   All Templates
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                    Unlimited Clients & Projects
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  nvoicing & Payments
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Proposals & Contracts
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Tasks & Time Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Client CRM
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Expense Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Up to 5 Project Collaborators
                </div>
            </div>
            <div className="btn" style={{padding:"15px 25px"}}>
              START FREE
            </div>
          </div>
          <div className="card">
            <h2>Starter</h2>
            <p>Ideal for freelancers and contractors just starting out.</p>
            <div className="price-section">
              <div className='dollar-sign'>$</div>
              <div className="price">24</div>
              <div className='plan-type'>/MONTH</div>
            </div>
            <div className="plan-pros">
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                   All Templates
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                    Unlimited Clients & Projects
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  nvoicing & Payments
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Proposals & Contracts
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Tasks & Time Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Client CRM
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Expense Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Up to 5 Project Collaborators
                </div>
            </div>
            <div className="btn" style={{padding:"15px 25px"}}>
              START FREE
            </div>
          </div>
          <div className="card">
            <h2>Starter</h2>
            <p>Ideal for freelancers and contractors just starting out.</p>
            <div className="price-section">
              <div className='dollar-sign'>$</div>
              <div className="price">24</div>
              <div className='plan-type'>/MONTH</div>
            </div>
            <div className="plan-pros">
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                   All Templates
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                    Unlimited Clients & Projects
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  nvoicing & Payments
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Proposals & Contracts
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Tasks & Time Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Client CRM
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Expense Tracking
                </div>
                <div className="plan-item">
                  <FaCheck color="#00b289" className='checkmark'/>
                  Up to 5 Project Collaborators
                </div>
            </div>
            <div className="btn" style={{padding:"15px 25px"}}>
              START FREE
            </div>
          </div>
        </div>
      </div>
      </div>

    
    </div>
  )
}

export default Bonsai