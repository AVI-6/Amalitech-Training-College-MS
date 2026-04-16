import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import MyCoursePage from '../../pages/teachers/MyCoursesPage'
import ClassesActive from '../../pages/teachers/ClassesActive'

function ClassActiveLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <ClassesActive />
      </div>
    </div>
  )
}

export default ClassActiveLayout
