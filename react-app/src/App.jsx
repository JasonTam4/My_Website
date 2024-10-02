import { useState } from 'react'
import './styles/App.css'  // Updated path
import Navbar from './components/Navbar/Navbar.jsx'
// import Logos from './components/Logos/Logos.jsx'
import Intro from './components/Introduction/intro.jsx'
import Contact from './components/Contact/contact.jsx'
import Experience from './components/Experience/experience.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Experience />
      {/* <Logos /> */}
      <Contact />
    </>
  )
}

export default App