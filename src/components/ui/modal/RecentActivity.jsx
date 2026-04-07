import React from 'react'
import { VscGraph } from "react-icons/vsc";

function RecentActivity({ recentIcon = <VscGraph /> }) {
  const currentTimeInMinutes = Math.floor(Date.now() / 600000000000);
  return (
    <div className='recent-activity'>
      <div className="recent-text">
        <div className="recent-icon">{recentIcon}</div>
        <div className="recent-desc">Grades updated for Math-202</div>
      </div>
      <div className="recent-time">{`${currentTimeInMinutes} minutes ago` }</div>
    </div>
  )
}

export default RecentActivity
