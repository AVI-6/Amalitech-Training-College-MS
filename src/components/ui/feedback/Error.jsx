import React from 'react'

function Error({message}) {
  return (
    <div className='error'>
      <p style={{color:"red"}} className="error-message">{message}</p>
    </div>
  )
}

export default Error
