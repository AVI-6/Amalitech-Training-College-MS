import React from 'react';
import { Link } from 'react-router-dom';

function AdminPageHeader({ title, subtitle, backTo, actions }) {
  return (
    <div className="admin-page-header">
      <div className="admin-page-header-text">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="admin-page-header-actions">
        {actions}
        {backTo ? (
          <Link className="admin-back-link" to={backTo}>
            ← Back
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default AdminPageHeader;
