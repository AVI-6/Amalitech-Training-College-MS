import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import TeacherDetailsPage from '../../pages/admin/TeacherDetailsPage'

function AdminTeacherDetailsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <TeacherDetailsPage />
      </div>
    </div>
  )
}

export default AdminTeacherDetailsLayout
