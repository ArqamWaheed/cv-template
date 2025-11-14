import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import CV from './ui/components/CV'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CV></CV>
  </StrictMode>,
)
