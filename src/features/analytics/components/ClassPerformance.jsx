import React, { useState } from 'react'
import '../../../styles/analytics/classperformance.css'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

function ClassPerformance() {
  const [classPerformance, setClassPerformance] = useState([
    {
      id: 1, 
      performanceTitle: 'Web Development',
      studentSize: 25,
      grade:{
        average: 78,
        attendance: 91,
        submissions: 95
      }, 
      performanceStats: 'improving'
    },
    {
      id: 2, 
      performanceTitle: 'Data Science',
      studentSize: 30,
      grade:{
        average: 82,
        attendance: 88,
        submissions: 92
      }, 
      performanceStats: 'stable'
    },
    {
      id: 3, 
      performanceTitle: 'Mobile Development',
      studentSize: 22,
      grade:{
        average: 85,
        attendance: 93,
        submissions: 97
      }, 
      performanceStats: 'improving'
    },
    {
      id: 4, 
      performanceTitle: 'Cloud Computing',
      studentSize: 28,
      grade:{
        average: 76,
        attendance: 85,
        submissions: 88
      }, 
      performanceStats: 'declining'
    }
  ])

  const classPerformanceResult = classPerformance.map(c => {
    return(
      <div key={c.id} className='class-performance-div'>
        <div className="performance-div-left-content">
          <div className="performance-title">{c.performanceTitle}</div>
          <div className="performance-per-student"><p>{c.studentSize} students</p></div>
          <div className="performance-stats"> 
            <div className="average">
              <p>Avg Grade</p>
              <h2>{c.grade.average}%</h2>
               
            </div>
            <div className="attendance">
              <p>Attendance</p>
              <h2>{c.grade.attendance}%</h2>
               
            </div>
            <div className="submissions">
              <p>Submissions</p>
              <h2>{c.grade.submissions}%</h2>
               
            </div>
          </div>
        </div>
        <div className="performance-div-right-content">
          <p className={`${c.performanceStats === 'improving' ? 'improving' : 'declining'}`}>{c.performanceStats === 'improving' ? <FaArrowTrendUp style={{color: 'green'}} /> : <FaArrowTrendDown style={{color: 'red'}} />}{c.performanceStats}</p>
          
        </div>
      </div>
    )
  })
  
  return (
    <div>
      {classPerformanceResult}
    </div>
  )
}

export default ClassPerformance
