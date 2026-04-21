import React from 'react'
import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <div className='teachers-layout-div'>
      <Outlet/>
    </div>
  )
}

export default StudentLayout
