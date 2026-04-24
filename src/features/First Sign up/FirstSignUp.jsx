import React, { useState } from 'react'
import { FaRegMessage } from 'react-icons/fa6'
import FormInput from '../../components/forms/FormInput'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/firstsignup.css'
import LoginSideBar from '../login/LoginSideBar'
import useAuth from '../../hooks/useAuth'

function FirstSignUp() {
  const navigate = useNavigate()
  const auth = useAuth()

  function handleNavigate(){
    const user = auth.user
    console.log(user.email)
    if (user.email === 'admin@school.com') {
      navigate('/admin/dashboard')
    }
  }
  return (
    <div className='first-sign-up'>
      
        <LoginSideBar />
      
      <div className='first-sign-up-wrapper-div'>
        <div className='first-sign-up-wrapper'>
          <div className="sign-up-top-content">
            <div className="signup-icon">
              <FaRegMessage className='icon'/>
            </div>
            <div className="signup-title">
              <h2>Activate Your Account</h2>
            </div>
            <div className="signup-desc">
              <small>Enter your email address to get started</small>
            </div>
          </div>
          <div className="sign-up-bottom-content">
            <div className="sign-up-mail">
              <label htmlFor="signup-mail"></label>
              <FormInput type={'email'} inputID={"signup-mail"} placeholder={'youremail@school.com'} /> 
            </div>
            <div className="what-happens">
              <ul>
                <b>What happens next?</b>
                <li>We'll verify your email address</li>
                <li>You'll recieve a temporary password</li>
                <li>You can chgange your password after first login</li>
              </ul>
            </div>
            <div className="continue-signup">
              <ButtonWithIcon name={'Continue'} onClick={handleNavigate}/>
              <p>Already activated? <Link to={'/login'}>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSignUp
