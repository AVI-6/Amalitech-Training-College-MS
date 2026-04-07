import React from 'react'

function AdminUpdates({ icon, text, value }) {
  return (
    <div className='admin-updates'>
      <div className="update-icon">{icon}</div>
      <div className="update-text">{text}</div>
      <div className="update-value">{value}</div>
    </div>
  )
}

export default AdminUpdates
