import React, { useState } from 'react'

function TextAreaForForm({ assessmentDesc, placeholder }) {
  const [text, setText] = useState('')

  function handleText(e){
    setText(e.target.value)
  }
  return (
    <div>
      <div className="assessment-desc-head"> {assessmentDesc} </div>
      <div className="assessment-desc-input">
        <textarea type="text" name="" id="" placeholder={`${placeholder}`} value={text} onChange={handleText} />
      </div>
    </div>
  )
}

export default TextAreaForForm
