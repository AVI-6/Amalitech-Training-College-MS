import React from 'react'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentTeachers from '../../components/ui/modal/RecentTeachers'
import BottomNavBar from '../../components/navigation/BottomNavBar'
import { useNavigate } from 'react-router-dom'

function AdminTeachersPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  function handleNewTeacher(){
    navigate('/admin/teachers/new-teacher')
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
          <ButtonWithIcon 
            name={"Add Teachers"} 
            buttonIcon={<PiPlus />}
            onClick={handleNewTeacher}
          />
        </div>
      </div>


      <div className="buttom-content">
        <div className="categories-content">
          <div className="filter-div">
            <label htmlFor="search">Search </label>
            <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search teachers..." />
          </div>
          <div className="sort-div">
            <label htmlFor="sort">Teachers </label>
            <select id="sort" name="sort">
              <option value="All Teachers">All Teachers</option>
              <option value="name">Name</option>
              <option value="enrollment">Enrollment Number</option>
              <option value="course">Course</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div className="status-div">
            <label htmlFor="status">Level </label>
            <select id=" All Level" name="Level">
              <option value="all">All Level</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
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
