import React from 'react'
import Sidebar from '../components/navigation/Sidebar'
import AdminSettingsPage from '../pages/AdminSettingsPage'

function AdminSettingsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'}/></div>
      <div className="layout-right-panel">
        <AdminSettingsPage />
      </div>
    </div>
  )
}

export default AdminSettingsLayout
