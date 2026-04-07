import React from 'react'

function ButtonWithIcon({ name, styles,btnType, buttonIcon }) {
  return (
    <div className='btn-div'>
      <button type={btnType} style={styles}>{buttonIcon} {name}</button>
    </div>
  )
}

export default ButtonWithIcon
