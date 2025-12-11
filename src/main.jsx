import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixaState from "./context/PixaState.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PixaState>
     <App />
    </PixaState>
  </StrictMode>,
)
