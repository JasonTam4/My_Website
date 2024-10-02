import { useState, useEffect } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Introduction/intro.jsx'
import Contact from './components/Contact/contact.jsx'
import Experience from './components/Experience/experience.jsx'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="content">
        <Intro />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App