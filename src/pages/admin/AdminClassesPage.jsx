import React from 'react'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { BiArrowToBottom } from 'react-icons/bi'
import RecentClasses from '../../components/ui/modal/RecentClasses'
import BottomNavBar from '../../components/navigation/BottomNavBar'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { LuBookOpenText, LuGraduationCap } from "react-icons/lu";
import { MdPeople } from 'react-icons/md'
import { BiBell } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'

function AdminClassesPage() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  
  return (
    <div className='admin-student-page-div'>
      <div className="admin-student-header-content">
        <HeaderWithButton 
          headerText={'Manage Classes'}
          headerDesc={'Review, filter and manage training college enrollments.'}
          btnIcon={<PiPlus />}
          btnName={'Add Classes'}
          onClick={() => navigate('/admin/classes/new-class')}
        />
      </div>

      <div className="admin-classes-footer">

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
          <div className="categories-content categories-content-classes categories-content-teachers">
            <div className="filter-div">
              <label htmlFor="search">Search </label>
              <input type="text" id='search' value={searchTerm} onChange={handleSearchChange} placeholder="Search Classes..." />
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
        </div>


        <div className="buttom-content">
          <div className="classes-scheduling-content">
            <div className="recent-class-scheduling">
              {searchTerm === '' ? <RecentClasses searchTerm={searchTerm}/> : <RecentClasses searchTerm={searchTerm}/>}
            </div>
          </div>
          <div className="bottom-navbar">
            <BottomNavBar totalPages={100}/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AdminClassesPage
