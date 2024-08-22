import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp'
// css
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
)
