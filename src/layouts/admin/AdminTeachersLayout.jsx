import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AdminTeachersPage from '../../pages/admin/AdminTeachersPage'

function AdminTeachersLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AdminTeachersPage />
      </div>
    </div>
  )
}

export default AdminTeachersLayout
