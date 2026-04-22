import React, { useState } from 'react'
import WhiteButton from '../../../components/buttons/WhiteButton'


// CSS is in classperformance.css
function StudentAtRisk({hoverStyles, styles}) {
  const [risk, setRisk] = useState([
    {
      name: 'Micheal Chen', 
      course: 'React Fundamentals',
      grade: 45.3,
      attendance: 60
    },
    {
      name: 'Micheal Chen', 
      course: 'React Fundamentals',
      grade: 45.3,
      attendance: 30.45
    },
    {
      name: 'Micheal Chen', 
      course: 'Angular Fundamentals',
      grade: 45.3,
      attendance: 56.3
    },
  ])

  const studentAtRisk = risk.map(r =>{
    return(
      <div className="students-at-risk-wrapper">

        <div className='students-at-risk'>
          <div className="student-risk-top-content">
            <div className="left">
              <b> {r.name} </b>
              <p>{r.course} </p>
            </div>
            <div className="right">
              <p>At Risk</p>
            </div>
          </div>
          <div className="student-risk-middle-content">
            <div className="grade">
                <p>Grade</p>
                <h3> {r.grade}% </h3>
            </div>
            <div className="attendance">
              <p>Attendaance</p>
              <h3> {r.attendance}% </h3>
            </div>
          </div>
          <div className="student-risk-bottom-content">
            <WhiteButton 
              styles={styles} 
              hoverStyles={hoverStyles}
              name={'View Student'}
            />
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="students-at-risk-wrapper">

        {studentAtRisk}
      </div>
    </>
  )
}

export default StudentAtRisk
