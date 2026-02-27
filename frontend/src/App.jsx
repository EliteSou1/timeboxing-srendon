import AppRouter from './routes/AppRouter'
import { AuthProvider } from './context/AuthContext'
import './App.css'

const App = () => (
  <AuthProvider>
    <div className="min-h-screen bg-gradient-soft text-slate-100">
      <AppRouter />
    </div>
  </AuthProvider>
)

export default App
