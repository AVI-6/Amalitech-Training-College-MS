import React from 'react'
import AssessmentsPage from '../../pages/teachers/AssessmentsPage'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'

function AssessmentsPageLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <AssessmentsPage />
      </div>
    </div>
  )
}

export default AssessmentsPageLayout
