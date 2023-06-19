import React from 'react'
import { InputWrap } from './inputStyles'
import { labelStyling } from './inputStyles'

const CustomInputs = ({ type, label, name, required, pattern, minLength, onChange, icon, onClick }) => {


    return (
        <div>
            <InputWrap>
                <label style={labelStyling}>{label} </label>
                <div className='inputContents'>
                    <input onChange={onChange} name={name} type={type} required={required} pattern={pattern} minLength={minLength} />
                    <div style={{cursor:"pointer"}} onClick={onClick}>{icon}</div>
                </div>

            </InputWrap>
        </div>
    )
}

export default CustomInputs