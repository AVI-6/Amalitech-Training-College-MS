import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import MyCoursePage from '../../pages/teachers/MyCoursesPage'

function MyCoursePageLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <MyCoursePage />
      </div>
    </div>
  )
}

export default MyCoursePageLayout
