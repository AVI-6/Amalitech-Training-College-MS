import React from 'react'
import ButtonWithIcon from '../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentClasses from '../components/ui/modal/RecentClasses'
import BottomNavBar from '../components/navigation/BottomNavBar'
import AdminUpdates from '../components/ui/modal/AdminUpdates'
import { LuBookOpenText, LuGraduationCap } from "react-icons/lu";
import { MdPeople } from 'react-icons/md'
import { BiBell } from 'react-icons/bi'

function AdminClassesPage() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className='admin-student-page-div'>
      <div className="admin-student-top-content">
        <div className="top-content-text">
          <h1>Manage Classes</h1>
          <div className="student-content">
            <p>Review, filter and manage training college enrollments.</p>
          </div>
        </div>
        <div className="add-student-btn">
          <ButtonWithIcon name={"Add CLasses"} buttonIcon={<PiPlus />}/>
        </div>
      </div>

      <div className="top-content">
        <div className="quick-updates">
          <div className="admin-updates-div">
            <AdminUpdates icon={<LuGraduationCap />} text={'Total Classes'} value={'100'} />
          </div>
          <div className="admin-updates-div">
            <AdminUpdates icon={<MdPeople />} text={'Total Students'} value={'3,000'} />
          </div>
          <div className="admin-updates-div">
            <AdminUpdates icon={<LuBookOpenText />} text={'Assigned Teachers'} value={'85'} />
          </div>
        </div>
        <div className="categories-content">
          <div className="filter-div">
            <label htmlFor="search">Search </label>
            <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search students..." />
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
      </div>


      <div className="buttom-content">
        <div className="classes-scheduling-content">
          <div className="recent-class-scheduling">
            <RecentClasses />
          </div>
        </div>
        <div className="bottom-navbar">
          <BottomNavBar totalPages={100}/>
        </div>
      </div>

    </div>
  )
}

export default AdminClassesPage
