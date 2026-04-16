import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AdminDashBoardPage from '../../pages/admin/AdminDashBoardPage'

function AdminDashBoardLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AdminDashBoardPage />
      </div>
    </div>
  )
}

export default AdminDashBoardLayout
