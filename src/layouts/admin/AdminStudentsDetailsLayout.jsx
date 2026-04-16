import React from 'react'
import AddNewStudentPage from '../../pages/admin/AddNewStudentPage'
import Sidebar from '../../components/navigation/Sidebar'
import StudentPerformancePage from '../../pages/admin/StudentPerformancePage'

function AdminStudentsDetailsLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel"><Sidebar administrator={'Moses Tan'} firstLink={'Dashboard'} SecondLink={'Students'} thirdLink={'Teachers'} fourthLink={'Classes'} fifthLink={'Settings'}/></div>
      <div className="layout-right-panel">
        <StudentPerformancePage/>
        
      </div>
    </div>
  )
}

export default AdminStudentsDetailsLayout
