import React from 'react'

function Button({ name, styles,btnType, onClick }) {
  return (
    <div className='btn-div'>
      <button onClick={onClick} type={btnType} style={styles}>{name}</button>
    </div>
  )
}

export default Button
