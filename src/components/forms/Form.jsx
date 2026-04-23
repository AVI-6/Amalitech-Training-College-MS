import React, { useState } from 'react'
import Button from '../buttons/Button'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { MdKey } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


function Form({ title, titleDesc, logo }) {
  const { login } = useAuth();
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

  async function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await login({ email: form.email, password: form.password });
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'teacher') {
        navigate('/teachers/dashboard');
      } else if (user.role === 'student') {
        navigate('/students/dashboard');
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
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
          <Link to={"/sign-up"} className='first-time-activation'><MdKey/> First time activation</Link>
        </div>
      </form>
    </div>
  )
}

export default Form
