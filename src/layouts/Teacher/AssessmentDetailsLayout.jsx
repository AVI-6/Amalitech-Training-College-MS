import React from 'react'
import AssessmentDetailsPage from '../../pages/teachers/AssessmentDetailsPage'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'

function AssessmentDetailsLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <AssessmentDetailsPage />
      </div>
    </div>
  )
}

export default AssessmentDetailsLayout
