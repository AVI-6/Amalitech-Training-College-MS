import React, { useState } from 'react'
import Button from '../buttons/Button'
import { FaEyeSlash } from "react-icons/fa"
import { MdKey } from "react-icons/md";


function Form({ title, titleDesc, logo }) {
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(){
    setIsLoading(true)
  }

  const BtnStyles = {
    color: "white",
    fontSize:'23px',
    cursor: 'pointer'
  }
  return (
    <div className="right-side">

      <form onSubmit={handleSubmit}>
        <div className="title-div">
          <h1>{ title }</h1>
          <small>{titleDesc}</small>
          <div className="title-logo">
            <img src={logo} alt="form-logo" className='logo mobile-logo' aria-label='form logo' />
          </div>
        </div>
        <div className="email-div">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className="password-div">
          <label htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" required/>
          <FaEyeSlash id="show-password"/>
        </div>
        <div className="remember-and-forgot-div">
          <div className="remember-me-div">
            <input type="checkbox" name="remember" id="remember-me" checked />
            <label htmlFor="remember-me">Remeember me</label>
          </div>
          <div className="forgot-password-div">
            <a href=''>Forgot Password </a>
          </div>
        </div>
        <div className="submit-form-div">
          <Button 
            btnType={"submit"} 
            name={!isLoading ? "Login" : "Loading..."}
            styles={BtnStyles}
          />
        </div>
        <div className="first-time-activation-div">
          <a to={"/"} href='' className='first-time-activation'><MdKey/> First time activation</a>
        </div>
      </form>
    </div>
  )
}

export default Form
