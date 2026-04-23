import React from 'react'
import { BiBell, BiBookAdd } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { useMobileSidebar } from '../../../../app/Providers';

// CSS in teachersdashbaordpage.css
function PageHeader({onClick, userName}) {
  const { toggleMobileSidebar } = useMobileSidebar();

  return (
    <div className='page-header'>
      <div className="page-header-title-group">
        <button
          className="menu-open-button"
          type="button"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar menu"
        >
          <FaBars className='menu-open' />
        </button>
        <h1>{userName}</h1>
      </div>
      <div className="page-header-actions">
        <BiBell style={{cursor: 'pointer'}} onClick={onClick} className='first-teachers-dashboard-content-h1-btn'/>
      </div>
    </div>
  )
}

export default PageHeader
