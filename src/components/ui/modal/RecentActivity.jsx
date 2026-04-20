import React from 'react'
import { VscGraph } from "react-icons/vsc";

function RecentActivity({ recentIcon = <VscGraph />, currentTimeInMinutes, recentText, styles}) {
  return (
    <div className='recent-activity'>
      <div className="recent-text">
        <div className="recent-icon" style={styles}>{recentIcon}</div>
        <div className="recent-desc">{recentText}</div>
      </div>
      <div className="recent-time">{`${currentTimeInMinutes} ago` }</div>
    </div>
  )
}

export default RecentActivity
