import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import AddNewTeacherPageNew from '../../pages/admin/AddNewTeacherPageNew'

export default function AddNewTeacherLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AddNewTeacherPageNew />
      </div>
    </div>
  )
}
