import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getPlannerData } from '../utils/storage'

const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [plannerData, setPlannerData] = useState(() => getPlannerData())

  useEffect(() => {
    setPlannerData(getPlannerData())
  }, [])

  const stats = useMemo(() => {
    const blocks = Object.values(plannerData.timeBlocks || {}).filter((b) => b.trim().length > 0)
    const totalBlocks = blocks.length
    const totalHours = (totalBlocks * 0.5).toFixed(1)
    return { totalBlocks, totalHours }
  }, [plannerData])

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Dashboard</p>
          <h1 className="text-3xl font-semibold text-white">Hola, {user?.name || 'Productor'}</h1>
          <p className="text-slate-400">Organiza tu día con enfoque y claridad.</p>
        </div>
        <button
          onClick={() => navigate('/planner')}
          className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Ir al Planificador
        </button>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Bloques creados</p>
          <p className="text-3xl font-semibold text-white">{stats.totalBlocks}</p>
          <p className="text-xs text-slate-400">Bloques con contenido en tu plan</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Horas planificadas</p>
          <p className="text-3xl font-semibold text-white">{stats.totalHours}h</p>
          <p className="text-xs text-slate-400">Cada bloque representa 30 minutos</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <p className="text-sm text-slate-400">Prioridades</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            {(plannerData.priorities || []).map((p, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {p || 'Sin definir'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white">Progreso diario</h2>
          <p className="mt-2 text-sm text-slate-400">
            Revisa tus bloques y ajusta rápidamente desde el planificador para mantenerte al día.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(plannerData.timeBlocks || {}).map(([slot, task]) => (
              <span
                key={slot}
                className={`rounded-full px-3 py-1 text-xs ${
                  task.trim().length > 0
                    ? 'bg-white/10 text-white'
                    : 'bg-white/5 text-slate-400'
                }`}
              >
                {slot} {task ? `· ${task}` : ''}
              </span>
            ))}
            {Object.keys(plannerData.timeBlocks || {}).length === 0 && (
              <p className="text-sm text-slate-400">Sin bloques todavía. Empieza en el planificador.</p>
            )}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white">Brain dump</h2>
          <p className="mt-2 text-sm text-slate-400">
            Captura ideas y pendientes rápidos para no perder el foco.
          </p>
          <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-4 text-slate-200">
            {plannerData.brainDump?.trim() || 'Aún no has escrito nada.'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
