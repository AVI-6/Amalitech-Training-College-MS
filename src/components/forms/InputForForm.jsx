import React, { useState } from 'react'
import '../../styles/teachers/CreateAssessment.css'

function InputForForm({ handleText, title, placeholder, text, type='text', styles }) {
  // const [text, setText] = useState('')
  
  //   function handleText(e){
  //     setText(e.target.value)
  //   }
  return (
    <div>
      <div className="assessment-title">{title ? `${title}*` : ''} </div>
      <div className="assessment-title-input">
        <input type={type} style={styles} name="" id="input" placeholder={`${placeholder}`} value={text} onChange={handleText} />
      </div>
    </div>
  )
}

export default InputForForm
