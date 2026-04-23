import React, { useState } from 'react'
import AssessmentType from '../../components/ui/modal/teachers/AssessmentType'
import InputForForm from '../../components/forms/InputForForm'
import TextAreaForForm from '../../components/forms/TextAreaForForm'
import AssessmentHeader from '../../components/navigation/AssessmentHeader'
import Button from '../../components/buttons/Button'
import WhiteButton from '../../components/buttons/WhiteButton'
import Error from '../../components/ui/feedback/Error'
import SuccessToast from '../../components/ui/feedback/SuccessToast'

function CreateAssessment() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function handleDateChange(e){
    setDate(e.target.value)
  }

  function handleTimeChange(e){
    setTime(e.target.value)
  }

  async function handleSave(){
    const title = document.querySelector('input[placeholder="e.g., Week 5 - React Components Assignment"]')?.value
    const description = document.querySelector('textarea')?.value
    const instructions = document.querySelector('textarea:last-of-type')?.value
    const totalMark = document.querySelector('input[placeholder="e.g.100"]')?.value

    if (!title || !description || !date || !time || !totalMark || !instructions) {
      <Error message={'Please fill in all required fields'}/>
      return
    }

    try {
      // API call to save assessment
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, date, time, totalMark, instructions })
      })

      if (response.ok) {
        <SuccessToast message={'Assessment created successfully!'} />
        window.history.back()
      }
    } catch (error) {
      <Error message={('Error saving assessment: ' + error.message)} />
    }
  }

  

  return (
    <div className='create-assessment-page-div'>
      <div className="create-assessment-header">
        <AssessmentHeader setPath={'/teachers/assessments'} assessmentTitle={'Create Assessment'}/>
      </div>
      <div className="create-assessment-bottom">

        <div className='create-assessment'>
          <div className="create-assessment-header">
            <h2>Assessment Details</h2>
          </div>
          <div className="assessment-type-div">
            <div className="assessment-type-title">Assessment Type</div>
            <div className="assessment-types-div">

              <AssessmentType assessmentTitle={'Quiz'} assessmentDesc={'Short assessment with multiple questions'} />
              <AssessmentType assessmentTitle={'Assignment'} assessmentDesc={'Homework or project for students to complete'} />
              <AssessmentType assessmentTitle={'Midterm'} assessmentDesc={'Midsemester examination'} />
              <AssessmentType assessmentTitle={'Final Exam'} assessmentDesc={'Comprehensive examination at the end of the semester'} />
              <AssessmentType assessmentTitle={'Project'} assessmentDesc={'Long-term project or research work'} />
              <AssessmentType assessmentTitle={'Lab Work'} assessmentDesc={'Practical laboratory assignment'} />
            </div>
          </div>
          <div className="assessment-title-div">
            <InputForForm placeholder={'e.g., Week 5 - React Components Assignment'} title={'Title'}/>
          </div>
          <div className="assessment-desc-div">
            <TextAreaForForm assessmentDesc={'Description of Assessment'} placeholder={'e.g., Week 5 - React Components Assignment'} />
          </div>
          <div className="assessment-date-and-time-div">
            <div className="assessment-date-div">
              <div className="assessment-date-title">Due Date *</div>
              <div className="assessment-date">
                <input type="date" name="" id="" value={date} onChange={handleDateChange} />
              </div>
            </div>
            <div className="assessment-time-div">
              <div className="assessment-time-title">Due Time *</div>
              <div className="assessment-time">
                <input type="time" name="" id="" value={time} onChange={handleTimeChange} />
              </div>
            </div>
          </div>
          <div className="total-mark-div">
            <InputForForm placeholder={'e.g.100'} title={'Total Mark/Score'}/>
          </div>
          <div className="instruction-div">
            <TextAreaForForm assessmentDesc={'Instructions *'} placeholder={'e.g., Week 5 - React Components Assignment'} />
          </div>
        </div>
        <div className="save-assessment-div">
          <Button name={'Save Changes'} onClick={handleSave}/>
          <WhiteButton onClick={()=>window.history.back()} className='cancel-create-assessment' name={'Cancel'} />
        </div>
      </div>
    </div>
  )
}

export default CreateAssessment
