import React from 'react'

function ButtonWithIcon({ name, styles,btnType, buttonIcon, onClick }) {
  return (
    <div className='btn-div'>
      <button onClick={onClick} type={btnType} style={styles}>{buttonIcon} {name}</button>
    </div>
  )
}

export default ButtonWithIcon
