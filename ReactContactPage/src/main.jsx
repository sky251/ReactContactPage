import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import { Button } from './components/Button/Button'
import { ContactUs } from './components/ContactUs/ContactUs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <ContactUs/>
  </StrictMode>,
)
