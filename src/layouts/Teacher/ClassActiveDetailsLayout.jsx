import React from 'react'
import AssessmentsPage from '../../pages/teachers/AssessmentsPage'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import StudentDetails from '../../pages/teachers/StudentDetails'

function ClassActiveDetailsLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <StudentDetails />
      </div>
    </div>
  )
}

export default ClassActiveDetailsLayout
