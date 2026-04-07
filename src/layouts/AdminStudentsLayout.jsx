import React from 'react'
import Sidebar from '../components/navigation/Sidebar'
import AdminStudentsPage from '../pages/AdminStudentsPage'

function AdminStudentsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'}/></div>
      <div className="layout-right-panel">
        <AdminStudentsPage />
      </div>
    </div>
  )
}

export default AdminStudentsLayout
