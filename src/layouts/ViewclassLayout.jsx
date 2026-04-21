import React from 'react'
import FirstSignUp from '../features/First Sign up/FirstSignUp'
import LoginSideBar from '../features/login/LoginSideBar'
import SidebarTeachers from '../components/navigation/SidebarTeachers'
import ViewClass from '../features/class/ViewClass'
import { Outlet } from 'react-router-dom'

function ViewClassLayout() {
  return (
    <div className='admin-layout'>
      <div className="layout-left-panel first-signup-left"><SidebarTeachers  administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <ViewClass />
        <Outlet />
      </div>
    </div>
  )
}

export default ViewClassLayout
