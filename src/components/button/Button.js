import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyles } from './ButtonStyles';

export const Button = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick}  style={ ButtonStyles} >{text}</button>
    </div>
  )
}

export const LoginButton = ({text, color,background}) => {
  return (
    <div>
        <button  style={{marginTop:'10px', color:color,fontSize:'19px', width:'100%',cursor:'pointer', padding:'14px 19px', border:'none', borderRadius:'7px', background:background}}>{text}</button>
    </div>
  )
}

