import React, { useEffect, useState } from 'react'
import WhiteButton from '../../../components/buttons/WhiteButton'
import studentDatabaseUrl from '../../../mocked DataBase/studentDatabase.json?url'
import EmptyPageComponent from '../../../components/ui/modal/EmptyPageComponent'
import { useNavigate } from 'react-router-dom'
import  successToast  from '../../../components/ui/feedback/SuccessToast'
import '../../../styles/teachers/attendancePage.css'

function StudentAttendance({ searchQuery }) {
  const navigate = useNavigate()
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
    ST010: '',
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

  function handleAttendance(studentId, status){
    setAttendanceState(prev => ({
      ...prev,
      [studentId]: status
    }))
    successToast('Attendance marked successfully')
  }

  const getButtonStyles = (studentId, buttonValue) => {
    
    const state = attendanceState[studentId]
    if (state === buttonValue) {
      if (buttonValue === 'present') {
        return { backgroundColor: 'var(--color-success)', color: '#fff' }
      } else if (buttonValue === 'late') {
        return { backgroundColor: 'gold', color: '#000' }
      } else if (buttonValue === 'absent') {
        return { backgroundColor: 'var(--color-error)', color: '#fff' }
      }
    }
    return state ? { opacity: '0.5', cursor: 'not-allowed' } : {}
  }

  const buttons = [
    { name: 'Present', value: 'present' },
    { name: 'Late', value: 'late' },
    { name: 'Absent', value: 'absent' },
  ]

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    student.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='student-attendance-component-div'>
      {filteredStudents.length === 0 ? <EmptyPageComponent emptyPageTitle={'students'} emptyPageButtonTitle={'Go Back'} onClick={() => navigate(-1)}/> : filteredStudents.map(s => {
        const state = attendanceState[s.id]
        return (
          <div className={`current-attendance ${state || ''}`} key={s.id} >
            <div className="current-attendance-left">
              <b>{s.name}</b>
              <p> {s.id} </p>
            </div>
            <div className={`current-attendance-right`}>
              {buttons.map((button, index) => (
                <WhiteButton
                  key={index}
                  styles={getButtonStyles(s.id, button.value)}
                  name={button.name}
                  onClick={() => handleAttendance(s.id, button.value)}
                  value={button.value}
                  disabled={state && state !== button.value}
                />
              ))}
            </div>
          </div>
        )
      })}
      
    </div>
  )
}

export default StudentAttendance
