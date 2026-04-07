import React from 'react'
import ButtonWithIcon from '../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentStudents from '../components/ui/modal/RecentStudents'
import BottomNavBar from '../components/navigation/BottomNavBar'

function AdminStudentsPage() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className='admin-student-page-div'>
      <div className="admin-student-top-content">
        <div className="top-content-text">
          <h1>Manage Students</h1>
          <div className="student-content">
            <p>Review, filter and manage training college enrollments.</p>
          </div>
        </div>
        <div className="add-student-btn">
          <ButtonWithIcon name={"Add Student"} buttonIcon={<PiPlus />}/>
        </div>
      </div>


      <div className="buttom-content">
        <div className="categories-content">
          <div className="filter-div">
            <label htmlFor="search">Search </label>
            <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search students..." />
          </div>
          <div className="sort-div">
            <label htmlFor="sort">Classes </label>
            <select id="sort" name="sort">
              <option value="All Classes">All Classes</option>
              <option value="name">Name</option>
              <option value="enrollment">Enrollment Number</option>
              <option value="course">Course</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div className="status-div">
            <label htmlFor="status">Status </label>
            <select id="status" name="status">
              <option value="all">Status: All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="students-table">
          <div className="recent-students-table">
            <RecentStudents />
          </div>
          <div className="bottom-navbar">
            <BottomNavBar totalPages={100}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminStudentsPage
