import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IlescasApp from './app.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IlescasApp />
  </StrictMode>,
)
