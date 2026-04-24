import React, { useState } from 'react'
import { FaRegMessage } from 'react-icons/fa6'
import FormInput from '../../components/forms/FormInput'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { Link } from 'react-router-dom'
import '../../styles/firstsignup.css'
import LoginSideBar from '../login/LoginSideBar'
import { supabase } from '../../lib/supabaseClient'

function FirstSignUp() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  async function handleContinue() {
    if (!email) return

    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }

    setLoading(false)
  }

  return (
    <div className="first-sign-up">
      <LoginSideBar />

      <div className="first-sign-up-wrapper-div">
        <div className="first-sign-up-wrapper">
          <div className="sign-up-top-content">
            <div className="signup-icon">
              <FaRegMessage className="icon" />
            </div>
            <div className="signup-title">
              <h2>Activate Your Account</h2>
            </div>
            <div className="signup-desc">
              <small>Enter your email address to get started</small>
            </div>
          </div>

          {sent ? (
            <div className="sent-message">
              <p>Check your inbox! We have sent you a link to <strong>{email}</strong>.</p>
              <p>Click the link to continue.</p>
            </div>
          ) : (
            <div className="sign-up-bottom-content">
              <div className="sign-up-mail">
                <FormInput
                  type="email"
                  inputID="signup-mail"
                  placeholder="youremail@school.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

              <div className="what-happens">
                <ul>
                  <b>What happens next?</b>
                  <li>We'll verify your email address</li>
                  <li>You'll receive a magic link to sign in</li>
                  <li>You'll set your password once</li>
                </ul>
              </div>

              <div className="continue-signup">
                <ButtonWithIcon
                  name={loading ? 'Sending...' : 'Continue'}
                  onClick={handleContinue}
                />
                <p>Already activated? <Link to="/login">Login</Link></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FirstSignUp
