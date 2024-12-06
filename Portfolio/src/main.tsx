import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation_1 from './assets/Navbars/nav-1'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation_1 isActive='home'></Navigation_1>

    
  </StrictMode>,
)
