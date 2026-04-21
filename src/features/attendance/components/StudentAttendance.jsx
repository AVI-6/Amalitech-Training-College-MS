import React, { useEffect, useState } from 'react'
import WhiteButton from '../../../components/buttons/WhiteButton'
import studentDatabaseUrl from '../../../mocked DataBase/studentDatabase.json?url'
import '../../../styles/teachers/attendancePage.css'

function StudentAttendance() {
  const [students, setStudents] = useState([])
  const [attendanceState, setAttendanceState] = useState({
    ST001: '',
    ST002: '',
    ST003: '',
    ST004: '',
    ST005: '',
    ST006: '',
    ST007: '',
    ST008: '',
    ST009: '',
  })
  useEffect(()=>{
    const fetchStudents = async () => {
          try {
            const response = await fetch(studentDatabaseUrl)
    
            if (!response.ok) {
              throw new Error('Failed to fetch student records')
            }
    
            const data = await response.json()
            setStudents(data)
          } catch (error) {
            console.error('Error fetching student records:', error)
          }
        }
    
        fetchStudents()
  }, [])

  function handleAttendanceP(){
    setAttendanceState('present')
  }
  function handleAttendanceL(){
    setAttendanceState('late')
  }
  function handleAttendanceA(){
    setAttendanceState('absent')
  }

  return (
    <div className='student-attendance-component-div'>
      {students.map(s => {
        const state = attendanceState[s.id]
        return (
          <div className={`current-attendance ${state || ''}`} key={s.id} >
            <div className="current-attendance-left">
              <b>{s.name}</b>
              <p> {s.id} </p>
            </div>
            <div className={`current-attendance-right`}>
              <WhiteButton name={'Present'} onClick={handleAttendanceP} />
              <WhiteButton name={'Late'} onClick={handleAttendanceL} />
              <WhiteButton name={'Absent'} onClick={handleAttendanceA} />
            </div>
          </div>
        )
      })}
      
    </div>
  )
}

export default StudentAttendance
