import { useState, useEffect } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import QAProjects from './components/QAProjects'
import Projects from './components/Projects'
import './components/ThemeToggle.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseGlow, setMouseGlow] = useState({ color: 'rgba(255, 255, 255, 0.16)', intensity: 1 });

  // Use the same color palette for both dark and light mode
  const highlightColor = isDarkMode
    ? 'rgba(245, 234, 115, 0.22)'
    : 'rgba(128, 163, 223, 0.58)'; 

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? '#0f172a'
      : '#ebeef5';
    document.body.style.backgroundColor = isDarkMode 
      ? '#0f172a' 
      : '#ebeef5'; 
  }, [isDarkMode]);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //     // Check what element is under the mouse for glow color
  //     const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
  //     let newGlowColor = highlightColor;
  //     let newIntensity = 1;
  //     if (elementUnderMouse) {
  //       const tagName = elementUnderMouse.tagName?.toLowerCase();
  //       const className = elementUnderMouse.className || '';
  //       if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
  //         newGlowColor = 'rgba(245, 115, 130, 0.32)'; // Heading color
  //         newIntensity = 1.2;
  //       } else if (tagName === 'a' || elementUnderMouse.closest('a')) {
  //         newGlowColor = 'rgba(120, 180, 255, 0.32)'; // Link color
  //         newIntensity = 1.3;
  //       } else if (tagName === 'button' || elementUnderMouse.closest('button')) {
  //         newGlowColor = 'rgba(168, 85, 247, 0.32)'; // Button color
  //         newIntensity = 1.4;
  //       } else if (className.includes('project') || className.includes('card')) {
  //         newGlowColor = 'rgba(120, 115, 245, 0.22)'; // Card/Project color
  //         newIntensity = 1.1;
  //       } else if (tagName === 'p') {
  //         newGlowColor = 'rgba(120, 115, 245, 0.12)'; // Text color
  //         newIntensity = 0.9;
  //       } else if (tagName === 'img') {
  //         newGlowColor = 'rgba(255, 120, 242, 0.22)'; // Image color
  //         newIntensity = 1.2;
  //       }
  //     }
  //     setMouseGlow({ color: newGlowColor, intensity: newIntensity });

  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, [highlightColor]);


  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Mouse highlight effect - outside container for full viewport coverage */}
      <div 
        className="mouse-highlight"
        style={{
          left: mousePosition.x - 12.5,
          top: mousePosition.y - 12.5,
          backgroundColor: highlightColor,
          border: 'none',
          boxShadow: !isDarkMode ? '0 0 24px 12px rgba(255, 255, 255, 0.9)' : undefined,
          transform: `scale(${mouseGlow.intensity})`,
        }}
      />

      <div className={`container mx-auto px-1 sm:px-20 ${isDarkMode ? 'text-[#cbd5e7] font-thin' : 'text-[#272828ef] font-light'}`}>
        <div className="flex flex-col lg:flex-row">
          <div className='test width w-[100%] md:w-1/2 font-light me-14'>
            <Navbar isDarkMode={isDarkMode} />
          </div>
          <div className="width w-[100%] md:w-1/2 mt-12">
            <About isDarkMode={isDarkMode}/>
            <Experience isDarkMode={isDarkMode}/>
            <Skills isDarkMode={isDarkMode}/>
            <QAProjects isDarkMode={isDarkMode}/>
            <Projects isDarkMode={isDarkMode}/>
          </div>
          <div className="theme-toggle-container">
            <button
              onClick={toggleBackground}
              className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <div className="toggle-content">
                {isDarkMode ? (
                  <>
                    <MdOutlineWbSunny className="toggle-icon" />
                    <span className="toggle-text">Light</span>
                  </>
                ) : (
                  <>
                    <IoMoonOutline className="toggle-icon" />
                    <span className="toggle-text">Dark</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
