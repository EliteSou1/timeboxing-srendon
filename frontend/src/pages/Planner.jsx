import { useEffect, useState } from 'react'
import TimeBlockGrid from '../components/TimeBlockGrid'
import { getPlannerData, savePlannerData } from '../utils/storage'

const Planner = () => {
  const [priorities, setPriorities] = useState(['', '', ''])
  const [brainDump, setBrainDump] = useState('')
  const [timeBlocks, setTimeBlocks] = useState({})

  useEffect(() => {
    const data = getPlannerData()
    setPriorities(data.priorities || ['', '', ''])
    setBrainDump(data.brainDump || '')
    setTimeBlocks(data.timeBlocks || {})
  }, [])

  useEffect(() => {
    savePlannerData({ priorities, brainDump, timeBlocks })
  }, [priorities, brainDump, timeBlocks])

  const handlePriorityChange = (index, value) => {
    setPriorities((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const handleTimeBlockChange = (slot, value) => {
    setTimeBlocks((prev) => ({ ...prev, [slot]: value }))
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Planificador</p>
          <h1 className="text-3xl font-semibold text-white">Diseña tu día</h1>
          <p className="text-slate-400">Prioriza, vuelca ideas y bloquea tu tiempo con claridad.</p>
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-200">
          Guardado automático en localStorage
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass-panel rounded-2xl p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold text-white">Top Priorities</h2>
          <p className="text-sm text-slate-400">Enfócate en las 3 tareas esenciales.</p>
          <div className="mt-4 space-y-3">
            {priorities.map((priority, index) => (
              <input
                key={index}
                value={priority}
                onChange={(e) => handlePriorityChange(index, e.target.value)}
                placeholder={`Prioridad ${index + 1}`}
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/50"
              />
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Brain Dump</h2>
          <p className="text-sm text-slate-400">Escribe libremente ideas, pendientes o notas rápidas.</p>
          <textarea
            value={brainDump}
            onChange={(e) => setBrainDump(e.target.value)}
            rows={6}
            className="mt-4 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/50"
            placeholder="Ideas, pendientes, recordatorios..."
          />
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white">Daily Timeboxing Grid</h2>
            <p className="text-sm text-slate-400">Bloques de 30 minutos desde 5:00 a 23:30.</p>
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">Auto-save</div>
        </div>
        <div className="mt-5">
          <TimeBlockGrid timeBlocks={timeBlocks} onChange={handleTimeBlockChange} />
        </div>
      </div>
    </div>
  )
}

export default Planner
