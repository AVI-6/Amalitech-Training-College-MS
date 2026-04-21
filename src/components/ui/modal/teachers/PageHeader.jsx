import React from 'react'
import { BiBell, BiBookAdd } from 'react-icons/bi';

// CSS in teachersdashbaordpage.css
function PageHeader({onClick, userName}) {
  return (
    <div className='page-header'>
      <h1>{userName}</h1>
      <BiBell style={{cursor: 'pointer'}} onClick={onClick} className='first-teachers-dashboard-content-h1-btn'/>
    </div>
  )
}

export default PageHeader
