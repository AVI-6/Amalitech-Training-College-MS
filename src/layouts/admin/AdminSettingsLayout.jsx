import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AdminSettingsPage from '../../pages/admin/AdminSettingsPage'

function AdminSettingsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel">
        <Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/>
      </div>
      <div className="layout-right-panel">
        <AdminSettingsPage />
      </div>
    </div>
  )
}

export default AdminSettingsLayout
