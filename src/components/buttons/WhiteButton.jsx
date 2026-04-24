import React, { useState } from 'react'

function WhiteButton({addClass, hoverStyles, name, onClick, styles, value}) {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <div className='white-btn-div'>
      <button value={value} onClick={onClick} className={`white-btn ${addClass}`} style={isHover ? {...styles, ...hoverStyles} : styles} onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>{name}</button>
    </div>
  )
}

export default WhiteButton
