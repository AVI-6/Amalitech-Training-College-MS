import React from 'react'
import '../../styles/admin/addNewStudentPage.css'

function FormInput({ label, type, inputID, placeholder, inert, list }) {
  return (
    <div className='form-input'>
      <label htmlFor={inputID}>
        {label}
      </label>
      <input list={`${list}`} type={type} inert={inert} placeholder={placeholder} id={inputID} />
    </div>
  )
}

export default FormInput
