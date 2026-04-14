import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import CreateAssessment from '../../pages/teachers/CreateAssessment'

function CreateAssessmentsPageLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <CreateAssessment />
      </div>
    </div>
  )
}

export default CreateAssessmentsPageLayout
