import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY > 70) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  const handleResumeDownload = () => {
    const resumeUrl = '/public/Jason_Tam_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Jason_Tam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}
    >
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider round">
            <svg className="icon sun-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="icon moon-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
        </label>
      </div>
      <div className="navbar-content">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => scrollToSection('home')}>Home</li>
          <li className="nav-item" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact Me</li>
        </ul>
        <button className="resume-button" onClick={handleResumeDownload}>Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;