import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/Form.css"
import "./styles/CV.css"
import App from './ui/components/SyncFormCV'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
