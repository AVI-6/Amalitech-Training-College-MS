import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import ManageResources from '../../features/resources/ManageResources'
import AttendancePage from '../../features/attendance/pages/AttendancePage'


function ResourcesLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <AttendancePage />
      </div>
    </div>
  )
}

export default ResourcesLayout
