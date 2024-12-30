import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorProvider } from './Components/Contexts/ErrorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>

  </StrictMode>,
)
