import React from 'react'

export default function CheckBox({label}) {
  return (
    <div>
        <label>
            <input type='checkbox'/>
            <span>{label}</span>
        </label>      
    </div>
  )
}