import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AdminClassesPage from '../../pages/admin/AdminClassesPage'
import { Outlet } from 'react-router-dom'

function AdminClassesLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AdminClassesPage />
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminClassesLayout
