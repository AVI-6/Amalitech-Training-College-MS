import React from 'react'

function WhiteButton({name, onClick, styles}) {
  return (
    <div className='white-btn-div'>
      <button onClick={onClick} style={styles}>{name}</button>
    </div>
  )
}

export default WhiteButton
