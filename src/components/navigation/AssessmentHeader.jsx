import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import '../../styles/teachers/CreateAssessment.css'
import { Link } from 'react-router-dom';

function AssessmentHeader({assessmentTitle, setPath}) {
  return (
    <div className='assessment-header-div'>
      <h1> {assessmentTitle} </h1>
      <Link to={`${setPath}`}><p><FaArrowLeftLong /> Back</p></Link>
    </div>
  )
}

export default AssessmentHeader
