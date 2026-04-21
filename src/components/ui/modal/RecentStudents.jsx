import React, { useEffect, useState } from 'react'
import studentDatabaseUrl from '../../../mocked DataBase/studentDatabase.json?url'
import { Link } from 'react-router-dom'

function RecentStudents() {
  const [students, setStudents] = useState([])

  useEffect(() => {
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

  return (
    <div className='recent-students-table-div'>
      <div className='recent-students-table-wrapper'>
        <table className='recent-students-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const statusClass = student.status ? student.status.toLowerCase() : ''
              return (
                <tr className='table-body' key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.id}</td>
                  <td>{student.className}</td>
                  <td>{student.gender}</td>
                  <td>
                    <span className={`status-pill ${statusClass}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>{student.email}</td>
                  <td>
                    <Link to={`/admin/students/${student.id}`}><button className='student-view-btn'>View</button></Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentStudents
