import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import LoginSideBar from '../features/login/LoginSideBar'
import Button from '../components/buttons/Button'
import { supabase } from '../lib/supabaseClient'
import { getDashboardPathForRole, getUserRole } from '../utils/authRouting'

function SetPasswordPage() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [passwordType, setPasswordType] = useState('password')
  const [confirmType, setConfirmType] = useState('password')
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const BtnStyles = {
    color: 'white',
    fontSize: '23px',
    cursor: 'pointer',
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (form.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setIsLoading(true)

    const { data, error } = await supabase.auth.updateUser({
      password: form.password,
      data: { password_set: true },
    })

    if (error) {
      setErrorMessage(error.message)
      setIsLoading(false)
      return
    }

    setSuccessMessage('Password set successfully. Redirecting...')
    const role = getUserRole(data?.user)
    const dashboardPath = getDashboardPathForRole(role) || '/login'

    setIsLoading(false)
    setTimeout(() => {
      navigate(dashboardPath, { replace: true })
    }, 900)
  }

  return (
    <div className="form-div">
      <LoginSideBar />

      <div className="right-side">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="title-div">
            <h1>Set Your Password</h1>
            <small>This is required for your first login.</small>
          </div>

          <div className="password-div">
            <label htmlFor="password">New Password</label>
            <input
              id="password"
              name="password"
              type={passwordType}
              required
              value={form.password}
              onChange={handleChange}
            />
            {passwordType !== 'password' ? (
              <FaEyeSlash
                className="show-password"
                onClick={() => setPasswordType('password')}
              />
            ) : (
              <FaEye
                className="show-password"
                onClick={() => setPasswordType('text')}
              />
            )}
          </div>

          <div className="password-div">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={confirmType}
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {confirmType !== 'password' ? (
              <FaEyeSlash
                className="show-password"
                onClick={() => setConfirmType('password')}
              />
            ) : (
              <FaEye
                className="show-password"
                onClick={() => setConfirmType('text')}
              />
            )}
          </div>

          {errorMessage && <p className="form-error-message">{errorMessage}</p>}
          {successMessage && (
            <p style={{ color: 'var(--color-success)' }}>{successMessage}</p>
          )}

          <div className="submit-form-div">
            <Button
              btnType="submit"
              name={!isLoading ? 'Set Password' : 'Saving...'}
              styles={BtnStyles}
            />
          </div>

          <div className="first-time-activation-div">
            <Link to="/login">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SetPasswordPage
