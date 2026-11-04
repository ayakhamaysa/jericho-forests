import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/aref-ruqaa/700.css'
import '@fontsource/readex-pro/300.css'
import '@fontsource/readex-pro/400.css'
import '@fontsource/readex-pro/600.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
