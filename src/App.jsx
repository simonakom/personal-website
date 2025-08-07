import { useState, useEffect } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import Switch from 'react-switch';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import QAProjects from './components/QAProjects'
import Projects from './components/Projects'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smokeParticles, setSmokeParticles] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [mouseGlow, setMouseGlow] = useState({ color: 'rgba(255, 255, 255, 0.16)', intensity: 1 });

  // Use the same color palette for both dark and light mode
  const highlightColor = isDarkMode
    ? 'rgba(245, 234, 115, 0.22)'
    : 'rgba(128, 163, 223, 0.58)'; // very intense black for light mode
  const smokeColor = 'rgba(120, 115, 245, 0.13)';
  const sparkleColors = [
    'rgba(108, 105, 189, 0.55)',    // main blue-purple
    'rgba(139, 107, 168, 0.41)',    // purple
    'rgba(105, 142, 189, 0.49)',    // light blue
    'rgba(61, 46, 79, 0.43)'        // lavender
  ];

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? '#0f172a'
      : '#ebeef5';
    document.body.style.backgroundColor = isDarkMode 
      ? '#0f172a' 
      : '#ebeef5'; 
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Check what element is under the mouse for glow color
      const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
      let newGlowColor = highlightColor;
      let newIntensity = 1;
      if (elementUnderMouse) {
        const tagName = elementUnderMouse.tagName?.toLowerCase();
        const className = elementUnderMouse.className || '';
        if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
          newGlowColor = 'rgba(245, 115, 130, 0.32)'; // Heading color
          newIntensity = 1.2;
        } else if (tagName === 'a' || elementUnderMouse.closest('a')) {
          newGlowColor = 'rgba(120, 180, 255, 0.32)'; // Link color
          newIntensity = 1.3;
        } else if (tagName === 'button' || elementUnderMouse.closest('button')) {
          newGlowColor = 'rgba(168, 85, 247, 0.32)'; // Button color
          newIntensity = 1.4;
        } else if (className.includes('project') || className.includes('card')) {
          newGlowColor = 'rgba(120, 115, 245, 0.22)'; // Card/Project color
          newIntensity = 1.1;
        } else if (tagName === 'p') {
          newGlowColor = 'rgba(120, 115, 245, 0.12)'; // Text color
          newIntensity = 0.9;
        } else if (tagName === 'img') {
          newGlowColor = 'rgba(255, 120, 242, 0.22)'; // Image color
          newIntensity = 1.2;
        }
      }
      setMouseGlow({ color: newGlowColor, intensity: newIntensity });
      // Add smoke particle 
      const newSmoke = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        opacity: 0.13 + Math.random() * 0.13,
        scale: 0.5 + Math.random() * 1.5,
        riseSpeed: 0.3 + Math.random() * 1.2,
        driftSpeed: (Math.random() - 0.5) * 2,
        driftDirection: Math.random() * Math.PI * 2,
        originalX: e.clientX + (Math.random() - 0.5) * 40,
        originalY: e.clientY + (Math.random() - 0.5) * 40,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        color: smokeColor
      };
      // Unified sparkles
      const newSparkle = {
        id: Date.now() + Math.random() + 4000,
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        opacity: 0.7 + Math.random() * 0.3,
        scale: 0.7 + Math.random() * 0.6,
        size: 4 + Math.random() * 6,
        twinkleSpeed: 0.12 + Math.random() * 0.08,
        twinklePhase: Math.random() * Math.PI * 2,
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)]
      };
      setSparkles(prev => [...prev.slice(-18), newSparkle]); // Keep last 18 sparkles
      setSmokeParticles(prev => [...prev.slice(-15), newSmoke]); // Keep last 15 smoke particles
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate smoke particles
  useEffect(() => {
    const interval = setInterval(() => {
      setSmokeParticles(prev => 
        prev.map(smoke => ({
          ...smoke,
          opacity: Math.max(0, smoke.opacity - 0.002), // Very slow fade
          scale: smoke.scale * 1.02, // Smoke expands as it rises
          rotation: smoke.rotation + smoke.rotationSpeed,
          // Natural smoke movement - rises and drifts
          x: smoke.originalX + Math.sin(smoke.driftDirection + Date.now() * 0.0005) * smoke.driftSpeed * 10,
          y: smoke.originalY - smoke.riseSpeed,
          originalX: smoke.originalX + Math.sin(smoke.driftDirection + Date.now() * 0.0005) * smoke.driftSpeed * 10,
          originalY: smoke.originalY - smoke.riseSpeed,
          driftDirection: smoke.driftDirection + 0.01
        })).filter(smoke => smoke.opacity > 0 && smoke.y > -200)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animate sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev =>
        prev.map(sparkle => ({
          ...sparkle,
          opacity: Math.max(0, sparkle.opacity - 0.04),
          scale: sparkle.scale * (0.98 + Math.sin(sparkle.twinklePhase) * 0.02),
          twinklePhase: sparkle.twinklePhase + sparkle.twinkleSpeed
        })).filter(sparkle => sparkle.opacity > 0.01)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
          boxShadow: !isDarkMode ? '0 0 24px 12px rgba(106, 179, 183, 0.64)' : undefined,
          transform: `scale(${mouseGlow.intensity})`,
        }}
      />
      {/* Smoke trail effect */}
      {smokeParticles.map(smoke => (
        <div
          key={smoke.id}
          className="smoke-particle"
          style={{
            left: smoke.x - 8,
            top: smoke.y - 8,
            opacity: smoke.opacity,
            transform: `scale(${smoke.scale}) rotate(${smoke.rotation}deg)` ,
            background: smoke.color,
            borderRadius: '50%',
            width: 24,
            height: 24,
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9996,
            filter: 'blur(4px)',
          }}
        />
      ))}
      {/* Fireflies trail effect */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle-effect"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            transform: `scale(${sparkle.scale})`,
            background: sparkle.color,
            '--sparkle-color': sparkle.color,
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9998,
            filter: 'blur(1px)',
            mixBlendMode: 'screen',
          }}
        />
      ))}


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
    </>
  );
}
