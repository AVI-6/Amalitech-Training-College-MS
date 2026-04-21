import React from 'react'
import Sidebar from '../../components/navigation/Sidebar'
import ViewClassDetails from '../../pages/admin/ViewClassDetails'

function ViewClassDetailsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <ViewClassDetails />
      </div>
    </div>
  )
}

export default ViewClassDetailsLayout
