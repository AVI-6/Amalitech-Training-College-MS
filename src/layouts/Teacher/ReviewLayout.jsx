import React from 'react'
import Settings from '../../features/settings/Settings'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'
import ReviewSubmissionPage from '../../features/reviewSubmission/ReviewSubmissionPage'


export default function ReviewLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <ReviewSubmissionPage />
      </div>
    </div>
  )
}

