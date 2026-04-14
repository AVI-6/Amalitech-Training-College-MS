import React from 'react'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentStudents from '../../components/ui/modal/RecentStudents'
import BottomNavBar from '../../components/navigation/BottomNavBar'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import { useNavigate } from 'react-router-dom'

function AdminStudentsPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className='admin-student-page-div'>
      <HeaderWithButton 
        headerText={'Manage Students'} 
        headerDesc={'Review, filter and manage training college enrollments.'} 
        onClick={()=>{navigate('/admin/students/new-student')}} 
        btnName={'Add Student'}
        btnIcon={<PiPlus />}
      />


      <div className="buttom-content">
        <div className="categories-content">
          <div className="filter-div">
            <label htmlFor="search">Search </label>
            <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search students..." />
          </div>
          <div className="sort-div">
            <label htmlFor="sort">Students </label>
            <select id="sort" name="sort">
              <option value="All Students">All Students</option>
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
