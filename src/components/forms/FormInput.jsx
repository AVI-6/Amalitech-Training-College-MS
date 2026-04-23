import React from 'react'
import '../../styles/admin/addNewStudentPage.css'

function FormInput({ label, type, inputID, placeholder, inert, list, value, onChange, styles }) {
  return (
    <div className='form-input'>
      <label htmlFor={inputID}>
        {label}
      </label>
      <input 
        list={`${list}`} 
        value={value} 
        type={type} 
        inert={inert} 
        placeholder={placeholder} 
        id={inputID}
        onChange={onChange} 
        style={styles}
      />
    </div>
  )
}

export default FormInput
