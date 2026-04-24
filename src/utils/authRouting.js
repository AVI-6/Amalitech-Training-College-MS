export function getUserRole(user) {
  return user?.user_metadata?.role || user?.app_metadata?.role || null
}

export function getDashboardPathForRole(role) {
  if (role === 'teacher') return '/teachers/dashboard'
  if (role === 'student') return '/students/dashboard'
  if (role === 'admin') return '/admin/dashboard'
  return null
}
