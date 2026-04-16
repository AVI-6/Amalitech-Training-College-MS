// import React, { useState } from 'react'
import { LuClock3 } from 'react-icons/lu'

function MyCLasses({courseTitle, courseSchedule, courseStudent, onClick}) {
  // const [classes, setClasses] = useState([
  //   {
  //     courseName: `${courseTitle}`,
  //   }
  // ])
  return (
    <div onClick={onClick} className="third-teachers-dashboard-content-h1-courses">
      <div className="h1-courses-left">
        <div className="h1-course-left-top">
          <h3> {courseTitle} </h3>
        </div>
        <div className="h1-course-left-bottom">
          <small><LuClock3 /> {courseSchedule} </small>
        </div>
      </div>
      <div className="h1-courses-right">
        <p> {courseStudent} </p>
      </div>
    </div>
  )
}

export default MyCLasses
