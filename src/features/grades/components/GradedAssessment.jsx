import React from 'react'
import ProgressBar from '../../ProgessBar/ProgressBar';
import '../../../styles/teachers/grade.css'
import { FiBookOpen, FiClock } from 'react-icons/fi';
import { RxPeople } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function GradedAssessment() {
  const navigate = useNavigate()
  const coursework = [
  {
    id: 1,
    type: "Assignment",
    status: "Pending",
    title: "Introduction to React Hooks",
    course: "Web Development",
    dueDate: "Apr 15, 2026",
    submissions: 28,
    grading: {
      scored: 12,
      total: 28,
    },
  },
  {
    id: 2,
    type: "Project",
    status: "Pending",
    title: "Final Project - Portfolio Website",
    course: "Web Development",
    dueDate: "Apr 20, 2026",
    submissions: 15,
    grading: {
      scored: 3,
      total: 15,
    },
  },
  {
    id: 3,
    type: "Lab",
    status: "Pending",
    title: "Database Design Lab",
    course: "Database Systems",
    dueDate: "Apr 12, 2026",
    submissions: 18,
    grading: {
      scored: 10,
      total: 18,
    },
  },
  {
    id: 4,
    type: "Midterm",
    status: "Pending",
    title: "Midterm Exam - JavaScript Fundamentals",
    course: "Web Development",
    dueDate: "Apr 10, 2026",
    submissions: 30,
    grading: {
      scored: 25,
      total: 30,
    },
  },
  {
    id: 5,
    type: "Quiz",
    status: "All Graded",
    title: "CSS Grid and Flexbox Quiz",
    course: "Advanced CSS",
    dueDate: "Apr 8, 2026",
    submissions: 22,
    grading: {
      scored: 22,
      total: 22,
    },
  },
];
  return (
    <div className='graded-assessment-div'>
      {coursework.map(c=>{
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
