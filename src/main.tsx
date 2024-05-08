import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.tsx';
import { AboutMe } from './AboutMe.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <AboutMe/>
  </React.StrictMode>,
)