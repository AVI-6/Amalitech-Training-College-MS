import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import TeachersDashboardPage from '../../pages/teachers/TeachersDashboardPage'

function TeachersDashboardLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <TeachersDashboardPage />
      </div>
    </div>
  )
}

export default TeachersDashboardLayout
