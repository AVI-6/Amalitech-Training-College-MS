import React from 'react'
import { FaClockRotateLeft, FaLocationPin } from 'react-icons/fa6'
import '../../styles/students/viewTimeTable.css'
import { CiClock2, CiLocationOn } from 'react-icons/ci'

function ViewTimeTable() {

  const timeTable = [
    {
      day: 'Monday',
      course1: {
        title: 'Web Development 101',
        schedule: '10:00 AM to 12:00 PM',
        location: 'Lab A',
        lecturer: 'Dr. Micheal Chen'
      },
      course2: {
        title: 'UI/UX Design Principles',
        schedule: '11:00 AM to 1:00 PM',
        location: 'Lab C',
        lecturer: 'Ms. Emily Davis'
      }
    },
    {
      day: 'Tuesday',
      course1: {
        title: 'Database Management',
        schedule: '10:00 AM to 12:00 PM',
        location: 'Lab A',
        lecturer: 'Dr. James Anderson'
      },
      course2: {
        title: 'Data Structures and Algorithms',
        schedule: '11:00 AM to 1:00 PM',
        location: 'Lab C',
        lecturer: 'Prof. Sarah Williams'
      }
    },
    {
      day: 'Wednesday',
      course1: {
        title: 'Database Management',
        schedule: '10:00 AM to 12:00 PM',
        location: 'Lab A',
        lecturer: 'Dr. Micheal Chen'
      },
      course2: {
        title: 'Data Structures and Algorithms',
        schedule: '11:00 AM to 1:00 PM',
        location: 'Lab C',
        lecturer: 'Ms. Emily Davis'
      }
    },
    {
      day: 'Thursday',
      course1: {
        title: 'Database Management',
        schedule: '10:00 AM to 12:00 PM',
        location: 'Lab A',
        lecturer: 'Dr. Micheal Chen'
      },
      course2: {
        title: 'Data Structures and Algorithms',
        schedule: '11:00 AM to 1:00 PM',
        location: 'Lab C',
        lecturer: 'Ms. Emily Davis'
      }
    },
    {
      day: 'Friday',
      course1: {
        title: 'Database Management',
        schedule: '10:00 AM to 12:00 PM',
        location: 'Lab A',
        lecturer: 'Dr. Micheal Chen'
      },
      course2: {
        title: 'Data Structures and Algorithms',
        schedule: '11:00 AM to 1:00 PM',
        location: 'Lab C',
        lecturer: 'Ms. Emily Davis'
      }
    },
  ]
  return (
    <div className='view-time-table'>
      <div className="view-time-table-top-content">
        {
          timeTable.map(t => {
            return (
              <div className='view-time-table-top-content'>
                <h3>{t.day}</h3>
                <div className="view-time-table-bottom-content">
                  <div className="todays-classes">
                    <div className="class1">
                      <div className='class1-left'>
                        <b>{t.course1.title}</b>
                        <div className='schedule-location'>
                          <p><CiClock2 /> {t.course1.schedule} </p>
                          <p> <CiLocationOn/> {t.course1.location} </p>
                        </div>
                      </div>
                      <div className='assigned-lecturer'> {t.course1.lecturer} </div>
                    </div>
                    <div className="class1">
                      <div className='class1-left'>
                        <b>{t.course2.title}</b>
                        <div className='schedule-location'>
                          <p><CiClock2 /> {t.course2.schedule} </p>
                          <p> <CiLocationOn/> {t.course2.location} </p>
                        </div>
                      </div>
                      <div className='assigned-lecturer'> {t.course2.lecturer} </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default ViewTimeTable
