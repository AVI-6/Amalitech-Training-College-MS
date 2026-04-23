import React, { useState } from 'react'
import AdminPageHeader from '../../../components/admin/AdminPageHeader'
import GradedAssessment from '../components/GradedAssessment'
import '../../../styles/teachers/grade.css'
import InputForForm from '../../../components/forms/InputForForm'
import WhiteButton from '../../../components/buttons/WhiteButton'

function EnterGrades() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchParams, setSearchParams] = useState('')
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
  function handleFilterClick(event) {
    setActiveFilter(event.currentTarget.innerText)
  }

  return (
    <div className='grades-div'>
      <div className="grades-header">
        <AdminPageHeader title={'Enter Grades'} backTo={()=>window.history.back()} />
      </div>
      <div className="graded-content-bottom">
        <div className="search-grades">
          <div className="search-course">

            <InputForForm text={searchParams} handleText={(e)=> setSearchParams(e.target.value)} placeholder={'search by course'} />
          </div>
          <div className="grade-filters">
            <WhiteButton addClass={activeFilter === 'All' ? 'active' : ''} onClick={handleFilterClick} name={'All'} />
            <WhiteButton addClass={activeFilter === 'Pending' ? 'active' : ''} onClick={handleFilterClick} name={'Pending'} />
            <WhiteButton addClass={activeFilter === 'Graded' ? 'active' : ''} onClick={handleFilterClick} name={'Graded'} />
          </div>
        </div>
        <GradedAssessment coursework={coursework} searchParams={searchParams} activeFilter={activeFilter} />
      </div>
    </div>
  )
}

export default EnterGrades
