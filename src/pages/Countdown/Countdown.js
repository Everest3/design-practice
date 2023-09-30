import React from 'react'
import "./countdown.scss"
import hills from "../../assets/countdown/pattern-hills.svg"
import stars from "../../assets/countdown/bg-stars.svg"
import facebook from "../../assets/countdown/icon-facebook.svg"
import instagram from "../../assets/countdown/icon-instagram.svg"
import pinterest from "../../assets/countdown/icon-pinterest.svg"

const Countdown = () => {
  return (
    <div className='countdown-page'>
      <div className="main-container">
        <h2>WE'RE LAUNCHING SOON</h2>
        <div className="countdown-cards">
          <div>
            <div className="countdown-card">
              08
              <span className='chip'></span>
              <span className='chip chip-right'></span>
            </div>
            <div className="countdown-card-title">DAYS</div>
          </div>
          <div>
            <div className="countdown-card">
              23
              <span className='chip'></span>
              <span className='chip chip-right'></span>
            </div>
            <div className="countdown-card-title">HOURS</div>
          </div>
          <div>
            <div className="countdown-card">
              55
              <span className='chip'></span>
              <span className='chip chip-right'></span>
            </div>
            <div className="countdown-card-title">MINUTES</div>
          </div>
          <div>
            <div className="countdown-card">
              43
              <span className='chip'></span>
              <span className='chip chip-right'></span>
            </div>
            <div className="countdown-card-title">SECONDS</div>
          </div>
 
        </div>
        <img className="hills" src={hills} alt="hills" />
        <img className="stars" src={stars} alt="stars" />
        <div className="social-media">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={pinterest} alt="pinterest" />
        </div>
      </div>  
    </div>
  )
}

export default Countdown