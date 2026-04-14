import React, { useState } from 'react'
import Button from '../buttons/Button'
import { FaEyeSlash } from "react-icons/fa"
import { MdKey } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function Form({ title, titleDesc, logo }) {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleRemember(e) {
    setIsChecked({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(false);
    if(!form.email && form.password <6){
      setErrorMessage('Enter valid email and password')
    }
    if(form.email === 'admin@school.com' && form.password === 'admin@2026'){
      navigate('/admin/dashboard')
      setIsLoading(false)
    }
    setErrorMessage("");
  }

  const BtnStyles = {
    color: "white",
    fontSize:'23px',
    cursor: 'pointer'
  }
  return (
    <div className="right-side">

      <form onSubmit={handleSubmit} className='login-form'>
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
          <input type="email" name="email" id="email" required value={form.email} onChange={handleChange}/>
        </div>
        <div className="password-div">
          <label htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" required value={form.password} onChange={handleChange}/>
          <FaEyeSlash id="show-password"/>
        </div>
        {errorMessage && <p className="form-error-message">{errorMessage}</p>}
        <div className="remember-and-forgot-div">
          <div className="remember-me-div">
            <input type="checkbox" name="remember" id="remember-me" value={isChecked} onChange={handleRemember}/>
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
