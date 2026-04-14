import React from 'react'
import { Outlet } from 'react-router-dom'

function TeacherLayout() {
  return (
    <div className='teachers-layout-div'>
      <Outlet/>
    </div>
  )
}

export default TeacherLayout
