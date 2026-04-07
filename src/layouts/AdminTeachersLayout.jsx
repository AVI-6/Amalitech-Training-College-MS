import React from 'react'
import Sidebar from '../components/navigation/Sidebar'
import AdminTeachersPage from '../pages/AdminTeachersPage'

function AdminTeachersLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'}/></div>
      <div className="layout-right-panel">
        <AdminTeachersPage />
      </div>
    </div>
  )
}

export default AdminTeachersLayout
