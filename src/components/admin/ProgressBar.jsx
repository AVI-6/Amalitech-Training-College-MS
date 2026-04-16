import React from 'react';

function ProgressBar({ value }) {
  return (
    <div className="admin-progress">
      <div className="admin-progress-track">
        <div className="admin-progress-fill" style={{ width: `${value}%` }} />
      </div>
      <span>{value}</span>
    </div>
  );
}

export default ProgressBar;
