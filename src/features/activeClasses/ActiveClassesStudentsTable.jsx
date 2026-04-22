import React, { useEffect, useState } from 'react'
import studentDatabaseUrl from '../../mocked DataBase/studentDatabase.json?url'
import '../../styles/teachers/activeClassesStudentsTable.css'
import { useNavigate } from 'react-router-dom'

const attendanceValues = [95, 92, 98, 58, 100, 89, 94]
const gradeValues = [88, 85, 92, 79, 95, 84, 90]

function getPerformanceTone(value, type) {
  if (type === 'attendance' && value < 70) {
    return 'warning'
  }

  if (value < 80) {
    return 'info'
  }

  return 'success'
}

function ActiveClassesStudentsTable() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(studentDatabaseUrl)

        if (!response.ok) {
          throw new Error('Failed to fetch student records')
        }

        const data = await response.json()
        const formattedStudents = data.map((student, index) => ({
          ...student,
          attendance: attendanceValues[index % attendanceValues.length],
          averageGrade: gradeValues[index % gradeValues.length],
        }))

        setStudents(formattedStudents)
      } catch (error) {
        console.error('Error fetching student records:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudents()
  }, [])

  return (
    <section className='active-classes-students-card'>
      <div className='active-classes-students-tabs' role='tablist' aria-label='Class records sections'>
        <button className='students-tab-button active' type='button'>Students</button>
        <button className='students-tab-button' type='button' onClick={()=> navigate('/teachers/dashboard/attendance')}>Attendance</button>
        <button className='students-tab-button' type='button' onClick={()=> navigate('/teachers/assessments/grade')}>Grades</button>
      </div>

      <div className='active-classes-student-tables-div'>
        <div className='active-classes-student-tables-wrapper'>
          <table className='active-classes-student-table'>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Attendance</th>
                <th>Avg Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan='6' className='active-classes-table-state'>Loading students...</td>
                </tr>
              ) : students.length === 0 ? (
                <tr>
                  <td colSpan='6' className='active-classes-table-state'>No students available.</td>
                </tr>
              ) : (
                students.map((student) => {
                  const attendanceTone = getPerformanceTone(student.attendance, 'attendance')
                  const gradeTone = getPerformanceTone(student.averageGrade, 'grade')

                  return (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <span className={`performance-pill ${attendanceTone}`}>
                          {student.attendance}%
                        </span>
                      </td>
                      <td>
                        <span className={`performance-pill ${gradeTone}`}>
                          {student.averageGrade}%
                        </span>
                      </td>
                      <td>
                        <button className='students-view-button' type='button'>View</button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ActiveClassesStudentsTable
