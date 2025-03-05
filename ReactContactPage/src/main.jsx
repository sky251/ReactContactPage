import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import ContactUs from './components/ContactUs/ContactUs'
import { Button } from './components/Button/Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <ContactUs/>
  </StrictMode>,
)
