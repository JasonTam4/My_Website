import { useState } from 'react'
import './styles/App.css'  // Updated path
import Navbar from './components/Navbar/Navbar.jsx'
import Logos from './components/Logos/Logos.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Logos />
    </>
  )
}

export default App