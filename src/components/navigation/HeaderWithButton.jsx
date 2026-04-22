import React from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'
import { FaLongArrowAltLeft } from 'react-icons/fa'


function HeaderWithButton({btnName, btnIcon, headerText, headerDesc, onClick, styles}) {
  return (
    <div className="admin-student-top-content">
      <div className="top-content-text">
        <h1> {headerText} </h1>
        <div className="student-content">
          <p> {headerDesc} </p>
        </div>
      </div>
      <div className="add-student-btn">
        {btnIcon ? <ButtonWithIcon onClick={onClick} styles={styles} name={btnName} buttonIcon={btnIcon}/> : <p style={{color: 'var(--color-accent)', display: 'flex', cursor: 'pointer', alignItems: 'center', gap:'var(--spacing-1)', width: 'fit-content'}}><FaLongArrowAltLeft/> Back</p> }
      </div>
    </div>
  )
}

export default HeaderWithButton
