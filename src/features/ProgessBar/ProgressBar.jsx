import React from 'react'
import '../../styles/progressbar.css'

function ProgressBar({progress}) {
  return (
    <div className='progress-bar-div'>
      <div className="progress-bar" style={{width: `${progress}%`}}></div>
    </div>
  )
}

export default ProgressBar
