import React from 'react'
import { BiBell, BiBookAdd } from 'react-icons/bi';

function PageHeader({userName}) {
  return (
    <div className='page-header'>
      <h1>{userName}</h1>
      <BiBell className='first-teachers-dashboard-content-h1-btn'/>
    </div>
  )
}

export default PageHeader
