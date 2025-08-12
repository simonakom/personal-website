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

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? '#0f172a'
      : '#ebeef5';
    document.body.style.backgroundColor = isDarkMode 
      ? '#0f172a' 
      : '#ebeef5'; 
  }, [isDarkMode]);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`container mx-auto px-1 sm:px-20 ${isDarkMode ? 'text-[#cbd5e7] font-thin' : 'text-[#272828ef] font-light'}`}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 xl:gap-16">
          <div className='test width w-full lg:w-1/2 font-light'>
            <Navbar isDarkMode={isDarkMode} />
          </div>
          <div className="width w-full lg:w-1/2 lg:mt-0 mt-12">
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
