import React from 'react'
import AdminUpdates from '../../components/ui/modal/AdminUpdates'
import { FaLongArrowAltLeft, FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { SlGraduation } from 'react-icons/sl'
import ActiveClassesStudentsTable from '../../features/activeClasses/ActiveClassesStudentsTable'
import '../../styles/teachers/classesactive.css'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import { useNavigate } from 'react-router-dom'
import AdminPageHeader from '../../components/admin/AdminPageHeader'

function ClassesActive() {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/teachers/courses')
  }
  return (
    <div className='classes-active-div'>
      <div className="active-header">
        <AdminPageHeader title={'Web Development'} backTo={()=> window.history.back()}/>
      </div>
      <div className="active-classes-top">
        <AdminUpdates text={'Total Students'} value={'85'} icon={<SlGraduation />} />
        <AdminUpdates text={'Average Attendance'} value={'89%'} icon={<FaRegCalendarAlt/>} />
        <AdminUpdates text={'Class Average Score'} value={'85%'} icon={<FaRegCircleCheck />} />
      </div>
      <div className="active-classes-bottom">
        <ActiveClassesStudentsTable />
      </div>
    </div>
  )
}

export default ClassesActive
