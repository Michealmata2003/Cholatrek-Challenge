import React, { useState } from 'react';
import { Select } from './CustomSelectStyle';
import './CustomSelectStyle.css';

const CustomSelect = ({ name, options, label, placeholder,  }) => {

  const [select, setSelect] = useState('')

  const handleChange = (e) => {
    setSelect(e.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <select
        style={Select}
        name={name}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
      >
        {options.map(option => {
          return (
            <option
            
              key={option.value}

            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default CustomSelect