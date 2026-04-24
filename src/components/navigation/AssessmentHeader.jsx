import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
import '../../styles/teachers/CreateAssessment.css'
import { Link } from 'react-router-dom';
import { useMobileSidebar } from '../../app/Providers';

function AssessmentHeader({assessmentTitle, onClick, setPath}) {
  const { toggleMobileSidebar } = useMobileSidebar();

  return (
    <div className='assessment-header-div'>
      <div className="assessment-header-title-group">
        <button
          className="menu-open-button"
          type="button"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar menu"
        >
          <FaBars className='menu-open' />
        </button>
        <h1> {assessmentTitle} </h1>
      </div>
      <Link onClick={onClick} to={`${setPath}`}><p><FaArrowLeftLong /> Back</p></Link>
    </div>
  )
}

export default AssessmentHeader
