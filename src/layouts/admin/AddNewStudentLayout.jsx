import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AddNewStudentPageNew from '../../pages/admin/AddNewStudentPageNew'
import { Outlet } from 'react-router-dom'

function AddNewStudentLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AddNewStudentPageNew />
        <Outlet/>
      </div>
    </div>
  )
}

export default AddNewStudentLayout
