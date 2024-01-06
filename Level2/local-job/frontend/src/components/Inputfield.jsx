import React from 'react'
import '../App.css'

const Inputfield = ({handleChange , value , name , title}) => {
  return (
    <label className='sidebar-label-container'>
        <input type="radio" 
            name={name}
            value={value}
            onChange={handleChange} />
            <span className='checkmark'></span>{title}          
    </label>
  )
}

export default Inputfield
