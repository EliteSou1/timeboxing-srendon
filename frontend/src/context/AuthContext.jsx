import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getUser, logout as logoutStorage, saveUser } from '../utils/storage'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = getUser()
    if (stored) {
      setUser(stored)
    }
    setLoading(false)
  }, [])

  const login = (email) => {
    const profile = { email, name: email.split('@')[0] || 'Usuario' }
    saveUser(profile)
    setUser(profile)
  }

  const logout = () => {
    logoutStorage()
    setUser(null)
  }

  const value = useMemo(() => ({ user, login, logout, loading }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
