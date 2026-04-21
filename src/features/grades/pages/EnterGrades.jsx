import React, { useState } from 'react'
import AdminPageHeader from '../../../components/admin/AdminPageHeader'
import GradedAssessment from '../components/GradedAssessment'
import '../../../styles/teachers/grade.css'
import InputForForm from '../../../components/forms/InputForForm'
import WhiteButton from '../../../components/buttons/WhiteButton'

function EnterGrades() {
  const [newclass, setNewClass] = useState('')
  function handleClick(){
    setNewClass('active')
  }
  return (
    <div className='grades-div'>
      <div className="grades-header">
        <AdminPageHeader title={'Enter Grades'} backTo={()=>window.history.back()} />
      </div>
      <div className="graded-content-bottom">
        <div className="search-grades">
          <div className="search-course">

            <InputForForm placeholder={'search by course'} />
          </div>
          <div className="grade-filters">
            <WhiteButton addClass={newclass} onClick={handleClick} name={'All'} />
            <WhiteButton addClass={newclass} onClick={handleClick} name={'Pending'} />
            <WhiteButton addClass={newclass} onClick={handleClick} name={'Graded'} />
          </div>
        </div>
        <GradedAssessment />
      </div>
    </div>
  )
}

export default EnterGrades
