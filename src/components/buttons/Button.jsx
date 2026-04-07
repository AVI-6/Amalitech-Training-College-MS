import React from 'react'

function Button({ name, styles,btnType }) {
  return (
    <div className='btn-div'>
      <button type={btnType} style={styles}>{name}</button>
    </div>
  )
}

export default Button
