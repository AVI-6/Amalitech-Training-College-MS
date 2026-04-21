import React from 'react'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import ManageResources from '../../features/resources/ManageResources'
import CreateResourcesPage from '../../pages/teachers/CreateResourcesPage'


function ResourcesLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <CreateResourcesPage />
      </div>
    </div>
  )
}

export default ResourcesLayout
