import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/Form.css"
import "./styles/CV.css"
import CV from './ui/components/CV'
import Form from './ui/components/Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form></Form>
    <CV></CV>
  </StrictMode>,
)
