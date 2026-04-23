import React, { useState } from 'react'
import AdminPageHeader from '../../../components/admin/AdminPageHeader'
import FormInput from '../../../components/forms/FormInput'
import StudentAttendance from '../components/StudentAttendance'
import AdminUpdates from '../../../components/ui/modal/AdminUpdates'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { LuCalendarClock } from 'react-icons/lu'
import { MdOutlineCancel } from 'react-icons/md'
import '../../../styles/teachers/attendancePage.css'
import { useNavigate } from 'react-router-dom'

function AttendancePage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='attendance-page-div'>
      <div className="attnedance-page-header">
        <AdminPageHeader title={'Take Attendance'} backTo={() => navigate('/teachers/dashboard')}/>
      </div>
      <div className="attnedance-page-bottom">
        <div className="attendance-bottom-top">
          <AdminUpdates text={'Present'} value={'3'} icon={<FaRegCircleCheck style={{color: 'green'}}/>} />
          <AdminUpdates text={'Late'} value={'2'} icon={<LuCalendarClock style={{color: 'orange'}}/>} />
          <AdminUpdates text={'Absent'} value={'78'} icon={<MdOutlineCancel style={{color: 'red'}}/>} />
        </div>
        <div className="attendance-bottom-down">
          <div className="attendance-down-top-content">
            <b>Web Development</b>
            <p>Session: April 3rd, 2026 - 10:00 AM</p>
            <FormInput 
              type={'search'} 
              placeholder={'search by student name or id'} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="attendance-down-bottom-content">
            <StudentAttendance searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendancePage
