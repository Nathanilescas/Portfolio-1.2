import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChatBox from './Projects/ChatBox/chatbox'
// import IlescasApp from './app.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatBox/>
    {/* <IlescasApp /> */}
  </StrictMode>,
)
