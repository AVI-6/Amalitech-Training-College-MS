import React from 'react'
import ViewAnalytics from '../../pages/teachers/ViewAnalytics'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'

function ViewAnalyticsPageLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <ViewAnalytics />
      </div>
    </div>
  )
}

export default ViewAnalyticsPageLayout
