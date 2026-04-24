import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { getDashboardPathForRole, getUserRole } from '../../utils/authRouting'

function ProtectedRoute({ allowedRoles = [] }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    let mounted = true

    async function hydrateSession() {
      const { data } = await supabase.auth.getSession()
      if (!mounted) return
      setUser(data?.session?.user || null)
      setLoading(false)
    }

    hydrateSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length === 0) {
    return <Outlet />
  }

  const role = getUserRole(user)
  if (allowedRoles.includes(role)) {
    return <Outlet />
  }

  const userDashboard = getDashboardPathForRole(role)
  if (userDashboard) {
    return <Navigate to={userDashboard} replace />
  }

  return <Navigate to="/login" replace />
}

export default ProtectedRoute
