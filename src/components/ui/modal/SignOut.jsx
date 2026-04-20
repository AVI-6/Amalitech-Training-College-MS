import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import { FaSignOutAlt } from 'react-icons/fa'
import '../../../styles/signout.css'

function SignOut({onClick}) {
  return (
    <div className='sign-out-div'>
      <p>Signout</p>
      <div className="signout-btn-div">
        <small>Sign out of your account and retum to the login page. You will need to log in again to access the system</small>
        <ButtonWithIcon onClick={onClick} className='signout-btn' name={"SignOut"} styles={{cursor: 'pointer',}} buttonIcon={<FaSignOutAlt/>} />
      </div>
    </div>
  )
}

export default SignOut
