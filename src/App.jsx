import { useState, useEffect } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import Switch from 'react-switch';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    //background gradient
    document.body.style.background = isDarkMode
      ? '#0f172a'
      : '#c0c4d0';
    document.body.style.backgroundColor = isDarkMode 
      ? '#0f172a' 
      : '#c0c4d0'; 
  }, [isDarkMode]);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container mx-auto px-1 sm:px-20 ${isDarkMode ? 'text-[#cbd5e7] font-thin' : 'text-[#272828ef] font-light'}`}>
      <div className="flex flex-col lg:flex-row">
        <div className='test width w-[100%] md:w-1/2 font-light mt-5 me-14'>
          <Navbar isDarkMode={isDarkMode} />
        </div>
        <div className="width w-[100%] md:w-1/2 mt-12">
          <About isDarkMode={isDarkMode}/>
          <Experience isDarkMode={isDarkMode}/>
          <Skills isDarkMode={isDarkMode}/>
          <Projects isDarkMode={isDarkMode}/>
        </div>
        <div className="mt-5 switch">
          <Switch 
            onChange={toggleBackground} 
            checked={isDarkMode} 
            onColor={isDarkMode ? "#5f89ac" : "#0c1323"}
            uncheckedIcon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 18, color: 'black', paddingRight: 2 }}><IoMoonOutline /></div>}
            checkedIcon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 18, color: 'white', paddingLeft: 3 }}><MdOutlineWbSunny /></div>}
          />
        </div>
      </div>
    </div>
  );
}
