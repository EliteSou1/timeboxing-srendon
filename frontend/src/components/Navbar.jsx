import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      location.pathname === path
        ? 'bg-white/10 text-white shadow-soft'
        : 'text-slate-200 hover:bg-white/5 hover:text-white'
    }`

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="glass-panel card-shadow mb-6 flex items-center justify-between rounded-2xl px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent" />
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">Productividad</p>
          <p className="text-lg font-semibold text-white">Timeboxing</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className={linkClass('/dashboard')} onClick={() => navigate('/dashboard')}>
          Panel
        </button>
        <button className={linkClass('/planner')} onClick={() => navigate('/planner')}>
          Planificador
        </button>
        <div className="h-6 w-px bg-white/10" />
        <div className="hidden text-sm text-slate-200 sm:block">{user?.email}</div>
        <button
          onClick={handleLogout}
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  )
}

export default Navbar
