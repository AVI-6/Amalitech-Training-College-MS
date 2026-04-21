import React from 'react'
import AddNewClassPage from '../../pages/admin/AddNewClassPage'
import Sidebar from '../../components/navigation/Sidebar'

function AddNewClassLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <AddNewClassPage />
      </div>
    </div>
  )
}

export default AddNewClassLayout
