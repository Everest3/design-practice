import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './toggle.scss'
const Toggle = (props) => {
  let {width=100} = props
  let height=props?.height ?? width/2;
  const toggleDimension=height-(height/10)
const [value,setValue]=useState(false)


  return (
    <div className='toggle'>
    <input type="checkbox" id="switch" checked={value} onChange={(e)=>{setValue((e.target.checked))}} 
      className={css`
      left: calc(100% - ${height/20}px);
      transform: translateX(-100%);
    `}/><label htmlFor="switch" className={css`
    width:${width}px;
    height:${height}px;
    border-radius:${height}px;
    &:after{
      width:${toggleDimension}px;
      height:${toggleDimension}px;
      border-rardius:${toggleDimension};
      top:${height/20}px;
      left:${height/20}px;
      ${value && `
      left: calc(100% - ${height/10}px);
      transform: translateX(-100%);
      `}
      
    }
    `}>Toggle</label>
    </div>
  )
}

export default Toggle