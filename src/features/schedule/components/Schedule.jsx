import React from 'react'
import { FaClock, FaRegClock } from 'react-icons/fa6'
import '../../../styles/admin/viewClass.css'

function Schedule({day, time, venue}) {
  return (
    <div className='schedule-div'>
      <div className="scheldule-left">
        <FaRegClock/>
      </div>
      <div className="scheldule-right">
        <b>{day}</b>
        <p>{time}</p>
        <p className='room'>Room: {venue}</p>
      </div>
    </div>
  )
}

export default Schedule
