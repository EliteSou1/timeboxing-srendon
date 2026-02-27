const USER_KEY = 'timeboxing_user'
const PLANNER_KEY = 'timeboxing_planner'

export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUser = () => {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? JSON.parse(raw) : null
}

export const logout = () => {
  localStorage.removeItem(USER_KEY)
}

export const savePlannerData = (data) => {
  localStorage.setItem(PLANNER_KEY, JSON.stringify(data))
}

export const getPlannerData = () => {
  const raw = localStorage.getItem(PLANNER_KEY)
  return raw
    ? JSON.parse(raw)
    : {
        priorities: ['', '', ''],
        brainDump: '',
        timeBlocks: {}
      }
}
