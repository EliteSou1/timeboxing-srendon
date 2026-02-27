const generateTimeSlots = () => {
  const slots = []
  let hour = 5
  let minute = 0
  while (hour < 24 || (hour === 23 && minute <= 30)) {
    const label = `${String(hour).padStart(2, '0')}:${minute === 0 ? '00' : '30'}`
    slots.push(label)
    if (hour === 23 && minute === 30) break
    minute = minute === 0 ? 30 : 0
    if (minute === 0) hour += 1
  }
  return slots
}

const timeSlots = generateTimeSlots()

const TimeBlockGrid = ({ timeBlocks, onChange }) => {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {timeSlots.map((slot) => {
        const value = timeBlocks[slot] || ''
        const active = value.trim().length > 0
        return (
          <div
            key={slot}
            className={`glass-panel rounded-2xl border border-white/5 p-4 transition hover:-translate-y-1 hover:border-white/10 hover:shadow-soft ${
              active ? 'bg-white/5' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-16 items-center justify-center rounded-xl bg-white/5 text-sm font-semibold text-slate-100">
                {slot}
              </div>
              <input
                type="text"
                placeholder="Tarea, bloque o descanso"
                value={value}
                onChange={(e) => onChange(slot, e.target.value)}
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/50"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TimeBlockGrid
