import React from 'react'
import Settings from '../../features/settings/Settings'
import SidebarTeachers from '../../components/navigation/SidebarTeachers'


export default function SettingsLayout() {
  return (
    <div className='teachers-dashboard-layout-div admin-layout'>
      <div className="layout-left-panel"><SidebarTeachers administrator={'Sarah Mitchell'}/></div>
      <div className="layout-right-panel">
        <Settings pageTitle={'Sarah Mitchel'} role={'Teacher'}/>
      </div>
    </div>
  )
}

