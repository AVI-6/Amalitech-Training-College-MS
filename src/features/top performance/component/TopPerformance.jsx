import React, { useState } from 'react'
import '../../../styles/analytics/classperformance.css'

function TopPerformance() {
  const [performers, setPerformers] = useState([
    {
      name: 'John Kpoe',
      course: 'Web development',
      grade: 85
    },
    {
      name: 'John Kpoe',
      course: 'Web development',
      grade: 89
    },
    {
      name: 'John Kpoe',
      course: 'Web development',
      grade: 65
    },
    {
      name: 'John Kpoe',
      course: 'Web development',
      grade: 75
    },
  ])

  const mapPerformers = performers.map((performer, index) => (
    <div key={index} className='top-performance-div'>
      <div className="top-performance-left-content">
        <div className='number-of-performers'>{index + 1} </div>
        <div>
          <p>{performer.name}</p>
          <p className='performer-course'>{performer.course}</p>
        </div>
      </div>
      <div className="top-performance-right-content">
        <p>{performer.grade}%</p>
      </div>
    </div>
  ))
  return (
    <>
    <div className="top-performance-wrapper">{mapPerformers}</div>
      
    </>
  )
}

export default TopPerformance
