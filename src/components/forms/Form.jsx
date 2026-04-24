import React, { useState } from 'react'
import Button from '../buttons/Button'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { MdKey } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient'
import { getDashboardPathForRole, getUserRole } from '../../utils/authRouting'



function Form({ title, titleDesc, logo }) {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const [passType, setPassType] = useState("password")
  const [errorMessage, setErrorMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleRemember(e) {
    setIsChecked({ ...form, [e.target.name]: e.target.value });
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   setIsLoading(false);
  //   if(!form.email && form.password <6){
  //     setErrorMessage('Enter valid email and password')
  //   }
  //   if(form.email === 'admin@school.com' && form.password === 'admin@2026'){
  //     navigate('/admin/dashboard')
  //     setIsLoading(false)
  //   }
  //   if(form.email === 'teacher@school.com' && form.password === 'teacher@2026'){
  //     navigate('/teachers/dashboard')
  //     setIsLoading(false)
  //   }
  //   if(form.email === 'student@school.com' && form.password === 'student@2026'){
  //     navigate('/students/dashboard')
  //     setIsLoading(false)
  //   }
  //   setErrorMessage("");
  // }

async function handleSubmit(e) {
  e.preventDefault()
  setIsLoading(true)
  setErrorMessage('')

  const email = form.email.trim()
  const password = form.password

  if (!email || password.length < 6) {
    setErrorMessage('Enter a valid email and password')
    setIsLoading(false)
    return
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    setErrorMessage(error.message)
    setIsLoading(false)
    return
  }

  const user = data?.user
  const passwordSet = user?.user_metadata?.password_set === true

  if (!passwordSet) {
    await supabase.auth.signOut()
    setErrorMessage('Complete first-time activation from your email magic link before logging in with password.')
    setIsLoading(false)
    return
  }

  const role = getUserRole(user)
  const dashboardPath = getDashboardPathForRole(role)

  if (!dashboardPath) {
    await supabase.auth.signOut()
    setErrorMessage('Your account role is missing or invalid. Please contact an administrator.')
    setIsLoading(false)
    return
  }

  navigate(dashboardPath)

  setIsLoading(false)
}


  const BtnStyles = {
    color: "white",
    fontSize:'23px',
    cursor: 'pointer'
  }

  function showPassword(){
    setPassType('text')
  }
  function hidePassword(){
    setPassType('password')
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
          <input type={passType} name="password" id="password" required value={form.password} onChange={handleChange}/>
          {passType !== 'password' ? <FaEyeSlash id="show-password" className='show-password' onClick={hidePassword}/> : <FaEye onClick={showPassword} className='show-password'/>}
        </div>
        {errorMessage && <p className="form-error-message">{errorMessage}</p>}
        <div className="remember-and-forgot-div">
          <div className="remember-me-div">
            <input type="checkbox" name="remember" id="remember-me" value={isChecked} onChange={handleRemember}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="forgot-password-div">
            <Link to="/forgot-password">Forgot Password</Link>
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
          <Link to={"/sign-up"} className='first-time-activation'><MdKey/> First time activation</Link>
        </div>
      </form>
    </div>
  )
}

export default Form
