import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PopUPProvider } from './Components/Contexts/PopUpContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopUPProvider>
      <App />
    </PopUPProvider>

  </StrictMode>,
)
