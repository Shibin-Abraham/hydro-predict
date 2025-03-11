import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PopUPProvider } from './Components/Contexts/PopUpContext.jsx'
import { AuthProvider } from './Components/Contexts/AuthContext.jsx'
import SettingsProvider from './Components/Contexts/SettingsContext/SettingsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopUPProvider>
      <AuthProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthProvider>
    </PopUPProvider>

  </StrictMode>,
)
