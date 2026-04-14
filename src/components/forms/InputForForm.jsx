import React, { useState } from 'react'
import '../../styles/teachers/CreateAssessment.css'

function InputForForm({ title, placeholder }) {
  const [text, setText] = useState('')
  
    function handleText(e){
      setText(e.target.value)
    }
  return (
    <div>
      <div className="assessment-title">{title} *</div>
      <div className="assessment-title-input">
        <input type="text" name="" id="" placeholder={`${placeholder}`} value={text} onChange={handleText} />
      </div>
    </div>
  )
}

export default InputForForm
