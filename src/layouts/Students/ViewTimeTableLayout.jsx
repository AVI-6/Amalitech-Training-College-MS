import React from 'react'
import SidebarStudents from '../../components/navigation/SidebarStudents';
import StudentDashboardPage from '../../pages/students/StudentDashboardPage';
import StudentViewTimeTable from '../../pages/students/StudentViewTimeTable';

function ViewTimeTableLayout() {
  return (
    <div className='students-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarStudents administrator={'Kofi Wayoo'} /></div>
      <div className="layout-right-panel">
        <StudentViewTimeTable />
      </div>
    </div>
  )
}

export default ViewTimeTableLayout
