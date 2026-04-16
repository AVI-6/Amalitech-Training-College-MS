import React from 'react';

function AdminFormSection({ title, children, className = '' }) {
  return (
    <section className={`admin-form-section ${className}`.trim()}>
      <h2>{title}</h2>
      <div className="admin-form-grid">{children}</div>
    </section>
  );
}

export default AdminFormSection;
