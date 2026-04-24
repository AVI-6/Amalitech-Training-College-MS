import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { getDashboardPathForRole, getUserRole } from '../utils/authRouting'

function AuthConfirmPage() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('Verifying your sign-in link...')

  useEffect(() => {
    let isMounted = true

    async function handleConfirm() {
      const params = new URLSearchParams(window.location.search)
      const token_hash = params.get('token_hash')
      const type = params.get('type') || 'email'

      if (!token_hash) {
        if (isMounted) setMessage('Invalid or missing token.')
        return
      }

      const { error: verifyError } = await supabase.auth.verifyOtp({
        token_hash,
        type,
      })

      if (verifyError) {
        if (isMounted) setMessage(verifyError.message)
        return
      }

      const { data, error: userError } = await supabase.auth.getUser()

      if (userError || !data?.user) {
        if (isMounted) setMessage(userError?.message || 'Could not load user.')
        return
      }

      // If password already set, go straight to dashboard
      if (data.user.user_metadata?.password_set === true) {
        const role = getUserRole(data.user)
        const dashboardPath = getDashboardPathForRole(role) || '/login'
        navigate(dashboardPath, { replace: true })
        return
      }

      // First-time user: go set password
      navigate('/set-password', { replace: true })
    }

    handleConfirm()

    return () => {
      isMounted = false
    }
  }, [navigate])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Confirming sign-in</h2>
      <p>{message}</p>
    </div>
  )
}

export default AuthConfirmPage
