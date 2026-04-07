import React from 'react'
import ButtonWithIcon from '../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentTeachers from '../components/ui/modal/RecentTeachers'
import BottomNavBar from '../components/navigation/BottomNavBar'

function AdminTeachersPage() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className='admin-student-page-div'>
      <div className="admin-student-top-content">
        <div className="top-content-text">
          <h1>Manage Teachers</h1>
          <div className="student-content">
            <p>Review, filter and manage training college enrollments.</p>
          </div>
        </div>
        <div className="add-student-btn">
          <ButtonWithIcon name={"Add Teachers"} buttonIcon={<PiPlus />}/>
        </div>
      </div>


      <div className="buttom-content">
        <div className="categories-content categories-content-teachers">
          <div className="filter-div">
            <label htmlFor="search">Search </label>
            <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search teachers..." />
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
        </div>
        <div className="students-table">
          <div className="recent-students-table">
            <RecentTeachers />
          </div>
          <div className="bottom-navbar">
            <BottomNavBar totalPages={100}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminTeachersPage
