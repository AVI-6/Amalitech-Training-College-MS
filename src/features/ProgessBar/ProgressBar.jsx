import React from 'react'
import '../../styles/progressbar.css'

function ProgressBar({bgColor, progress}) {
  return (
    <div className='progress-bar-div'>
      <div className="progress-bar" style={{width: `${progress}%`, backgroundColor: `${bgColor}`}}></div>
    </div>
  )
}

export default ProgressBar
