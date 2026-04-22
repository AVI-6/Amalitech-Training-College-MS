import React from 'react'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentTeachers from '../../components/ui/modal/RecentTeachers'
import BottomNavBar from '../../components/navigation/BottomNavBar'
import { useNavigate } from 'react-router-dom'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'

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
    <div className='admin-student-page-div admin-teachers-page-div'>
      <div className="admin-student-header-content">
        <HeaderWithButton 
          headerText={'Manage Teachers'}
          headerDesc={'Review, filter and manage training college enrollments.'}
          btnName={'Add Teachers'}
          btnIcon={<PiPlus />}
          onClick={handleNewTeacher}
        />
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
