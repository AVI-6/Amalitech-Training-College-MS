import { useState } from 'react'
import '../../../../styles/teachers/CreateAssessment.css'

// CSS is in the createAssessment file

function AssessmentType({ assessmentTitle, assessmentDesc }) {
  const [addClass, setAddClass] = useState('')
  const [addChange, setAddChange] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [colored, setColored] = useState(false)
  function handleClick(){
    setIsClicked(true)
    if (!isClicked){
      setAddClass('change-bg')
      setAddChange('clicked-change')
      setIsClicked(false)
      setColored(true)
    }
  }
  function handleUnClick(){
    setAddClass('')
    setAddChange('')
    setIsClicked(false)
    setColored(false)
    }
  
  return (
    <div onClick={!colored ? handleClick : handleUnClick} className={`assessment-type ${addClass}`}>
      <div className={`marked-assessment ${addChange}`}></div>
      <div className="assessment-title"> <p>{assessmentTitle}</p> </div>
      <div className="assessment-desc">
        <small> {assessmentDesc} </small>
      </div>
    </div>
  )
}

export default AssessmentType
