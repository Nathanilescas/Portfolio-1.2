import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation_1 from './assets/Navbars/nav-1'
import Footer_1 from './assets/Footers/footer-1'
import Home from './assets/Content/Landing/landing'
import AboutMe from './assets/Content/About-Me/about'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation_1 isActive='home'></Navigation_1>
      <Home/>
      <AboutMe/>
    <Footer_1/>
  </StrictMode>,
)
