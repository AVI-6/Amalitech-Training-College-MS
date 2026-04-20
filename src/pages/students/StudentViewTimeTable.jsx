import React from 'react'
import HeaderWithButton from '../../components/navigation/HeaderWithButton'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import ViewTimeTable from '../../features/timetable/ViewTimeTable'
import '../../styles/students/viewTimeTable.css'
import AdminPageHeader from '../../components/admin/AdminPageHeader'

function StudentViewTimeTable() {
  return (
    <div className='student-view-time-table'>
      <div className="student-view-time-table-top">
        <AdminPageHeader  
          title={'View Timetable'} 
          backTo={'/students/courses'} 
          btnIcon={<FaLongArrowAltLeft />}
          styles={{
            backgroundColor: 'transparent', 
            width: 'fit-content', 
            color: 'var(--color-accent)',
            justifyContent: 'flex-end'
          }} 
        />
      </div>
      <div className="student-view-time-table-bottom">
        <div className="weekly-table">
          <b>Weekly Timetable</b>
          <p>Academic Year 2025-2026 - semester 2</p>
        </div>
        <ViewTimeTable />
      </div>
    </div>
  )
}

export default StudentViewTimeTable
