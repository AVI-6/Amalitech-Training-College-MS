import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminNestedClassLayout() {
  return (
    <div className='admin-nested-class-layout-div'>
      <Outlet/>
    </div>
  )
}

export default AdminNestedClassLayout
