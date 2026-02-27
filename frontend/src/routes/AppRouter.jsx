import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Planner from '../pages/Planner'
import Navbar from '../components/Navbar'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAuth } from '../context/AuthContext'

const AppRouter = () => {
  const { user } = useAuth()
  const location = useLocation()
  const isAuthRoute = location.pathname === '/login'

  return (
    <div className="page-shell">
      {!isAuthRoute && user && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </div>
  )
}

export default AppRouter
