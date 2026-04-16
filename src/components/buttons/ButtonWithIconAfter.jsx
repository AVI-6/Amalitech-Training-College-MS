import React from 'react'

function ButtonWithIconAfter({ name, styles,btnType, buttonIcon, onClick }) {
  return (
    <div className='btn-div'>
      <button onClick={onClick} type={btnType} style={styles}>{name}{buttonIcon} </button>
    </div>
  )
}

export default ButtonWithIconAfter
