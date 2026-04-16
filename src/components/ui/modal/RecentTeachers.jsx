import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
              <th>Subject</th>
              <th>Class</th>
              <th>Status</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => {
              const statusClass = teacher.status ? teacher.status.toLowerCase() : ''
              return (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.id}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.classCount} Classes</td>
                  <td>
                    <span className={`status-pill ${statusClass}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td>{teacher.email}</td>
                  <td>
                    <Link to={`/admin/teachers/${teacher.id}`} className='student-view-btn'>View</Link>
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

export default RecentTeachers
