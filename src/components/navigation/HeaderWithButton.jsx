import React from 'react'
import ButtonWithIcon from '../buttons/ButtonWithIcon'
import { PiPlus } from 'react-icons/pi'


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
        <ButtonWithIcon onClick={onClick} styles={styles} name={btnName} buttonIcon={btnIcon}/>
      </div>
    </div>
  )
}

export default HeaderWithButton
