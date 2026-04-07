import React, { useEffect, useState } from 'react'
import teacherDatabaseUrl from '../../../mocked DataBase/teacherDataBase.json?url'

function RecentTeachers() {
  const [teachers, setTeachers] = useState([])
  

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(teacherDatabaseUrl)

        if (!response.ok) {
          throw new Error('Failed to fetch teacher records')
        }

        const data = await response.json()
        setTeachers(data)
      } catch (error) {
        console.error('Error fetching teacher records:', error)
      }
    }

    fetchTeachers()
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
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.className}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>
                  <button className='student-view-btn'>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentTeachers
