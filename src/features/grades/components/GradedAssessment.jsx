import React from 'react'
import ProgressBar from '../../ProgessBar/ProgressBar';
import '../../../styles/teachers/grade.css'
import { FiBookOpen, FiClock } from 'react-icons/fi';
import { RxPeople } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function GradedAssessment({ coursework, searchParams, activeFilter }) {
  const navigate = useNavigate()

  const filteredCoursework = coursework.filter(c => {
    const normalizedFilter = activeFilter === 'Graded' ? 'All Graded' : activeFilter
    const matchesFilter = normalizedFilter === 'All' || c.status === normalizedFilter
    const matchesSearch =
      searchParams === '' ||
      c.course.toLowerCase().includes(searchParams.toLowerCase()) ||
      c.title.toLowerCase().includes(searchParams.toLowerCase()) ||
      c.status.toLowerCase().includes(searchParams.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className='graded-assessment-div'>
      {filteredCoursework.map(c=>{
        return(
          <div className='graded-wrapper' onClick={()=> navigate('/teachers/assessments/assessment-details')} key={c.id}>
            <div className="graded-left">
              <div className="graded-left-top">
                <p className={`graded-type ${c.type}`}> {c.type} </p>
                <p className={`graded-status ${c.status}`}> {c.status} </p>
              </div>
              <div className="graded-left-middle">
                <b> {c.course} </b>
              </div>
              <div className="graded-left-bottom">
                <p className='grade-left-text'> <FiBookOpen /> {c.title} </p>
                <p className='grade-left-text'> <RxPeople />Due: {c.dueDate} </p>
                <p className='grade-left-text'> <FiClock /> {c.submissions} Submissions </p>
              </div>
            </div>
            <div className="graded-right">
              <small>Grading Progress</small>
              <div className="grade-progress">
                <ProgressBar bgColor={'#22C55E'} progress={(c.grading.scored/c.grading.total)*100} />
                <p> {c.grading.scored}/{c.grading.total} </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GradedAssessment
