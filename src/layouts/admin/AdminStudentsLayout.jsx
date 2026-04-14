import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AdminStudentsPage from '../../pages/admin/AdminStudentsPage'

function AdminStudentsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AdminStudentsPage />
      </div>
    </div>
  )
}

export default AdminStudentsLayout
