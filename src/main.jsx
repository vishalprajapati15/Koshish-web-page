import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Team from './components/Team.jsx'
import WhatWeDo from './components/WhatWeDo.jsx'
import Gallary from './components/Gallary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <WhatWeDo/>
    <Events/>
    <Team/>
    <Gallary/>
    <App />
  </StrictMode>,
)
