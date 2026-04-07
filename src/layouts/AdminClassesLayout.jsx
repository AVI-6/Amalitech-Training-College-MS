import React from 'react'
import Sidebar from '../components/navigation/Sidebar'
import AdminClassesPage from '../pages/AdminClassesPage'

function AdminClassesLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'}/></div>
      <div className="layout-right-panel">
        <AdminClassesPage />
      </div>
    </div>
  )
}

export default AdminClassesLayout
