import React from 'react';
import { FaBars, FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMobileSidebar } from '../../app/Providers';

function AdminPageHeader({ title, subtitle, backTo, actions }) {
  const { toggleMobileSidebar } = useMobileSidebar();

  return (
    <div className="admin-page-header">
      <div className="admin-page-header-text">
        <button
          className="menu-open-button"
          type="button"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar menu"
        >
          <FaBars className='menu-open' />
        </button>
        <div className="admin-page-header-copy">
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      <div className="admin-page-header-actions">
        {actions}
        {backTo ? (
          <Link className="admin-back-link" onClick={backTo} to={backTo}>
             <FaLongArrowAltLeft/>Back
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default AdminPageHeader;
