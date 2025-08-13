import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Navbar.css';

export default function Navbar({ isDarkMode }) {
    const [fixedSection, setFixedSection] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Function to check screen size
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for screen size changes
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        let timeoutId;
        
        function handleScroll() {
            const aboutSection = document.getElementById('about');
            const skillsSection = document.getElementById('skills'); 
            const experienceSection = document.getElementById('experience');
            const qaprojectsSection = document.getElementById('qaprojects');
            const projectsSection = document.getElementById('projects');

            if (aboutSection && skillsSection && experienceSection && qaprojectsSection && projectsSection) {
                const aboutOffsetTop = aboutSection.offsetTop;
                const skillsOffsetTop = skillsSection.offsetTop; 
                const experienceOffsetTop = experienceSection.offsetTop;
                const qaprojectsOffsetTop = qaprojectsSection.offsetTop;
                const projectsOffsetTop = projectsSection.offsetTop;
                const scrollTop = window.scrollY;
                const screenWidth = window.innerWidth;
                
                // Only apply sticky behavior on small screens
                if (screenWidth <= 1024) {
                    // Use a smaller threshold for more accurate detection
                    const threshold = 80;
                    
                    // Add a small buffer to prevent overlap
                    const buffer = 20;
                    
                    // Check each section with proper boundaries and buffer
                    if (scrollTop >= aboutOffsetTop - threshold && scrollTop < experienceOffsetTop - threshold - buffer) {
                        setFixedSection('about');
                    } else if (scrollTop >= experienceOffsetTop - threshold - buffer && scrollTop < skillsOffsetTop - threshold - buffer) {
                        setFixedSection('experience');
                    } else if (scrollTop >= skillsOffsetTop - threshold - buffer && scrollTop < qaprojectsOffsetTop - threshold - buffer) {
                        setFixedSection('skills');
                    } else if (scrollTop >= qaprojectsOffsetTop - threshold - buffer && scrollTop < projectsOffsetTop - threshold - buffer) {
                        setFixedSection('qaprojects');
                    } else if (scrollTop >= projectsOffsetTop - threshold - buffer) {
                        setFixedSection('projects');
                    } else {
                        setFixedSection(null);
                    }
                } else {
                    // Clear fixed section on larger screens
                    setFixedSection(null);
                }
            }
        }
        
        // Call handleScroll after a small delay to ensure DOM is ready
        setTimeout(handleScroll, 100);
        
        // Debounced scroll handler for better performance
        function debouncedScrollHandler() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 10);
        }
        
        window.addEventListener('scroll', debouncedScrollHandler);
        return () => {
            window.removeEventListener('scroll', debouncedScrollHandler);
            clearTimeout(timeoutId);
        };
    }, []);
    
    return (
        <div className={`header px-12 py-10 sm:p-10 ${isDarkMode ? '' : 'light-mode'}`}>
            <div className='mt-14'>
                <p className={`text-5xl mb-4 name ${isDarkMode ? 'text-[#cbd5e7]' : 'text-[#3a3a9d]'}`}>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-70" style={{backgroundSize: '200% 100%'}}>Simona Komarovska</span>
                </p>
                <div className={`mb-16 my-2 position-title wrapper ${isDarkMode ? '' : 'light-mode'}`}>
                    <ul className={`dynamic-txts ${isDarkMode ? 'text-[#d3dfefef]' : 'text-[#272828ef]'}`}>
                        <li className='first-response'><span className={`text-xl leading-relaxed ${isDarkMode ? '' : 'text-gray-600'}`}>Product Development & Quality Specialist</span></li>
                    </ul>
                </div>
            
            </div>
            <nav className='navbar mt-10 cursor-pointer text-xl'>
                <ul>
                    <li className={`nav-item pt-7 ${fixedSection === 'about' ? 'fixed about' : ''}`}>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={isSmallScreen ? -80 : 30} 
                            duration={500} 
                            >About
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'experience' ? 'fixed experience' : ''}`}>
                        <Link 
                            to="experience" 
                            spy={true} 
                            smooth={true} 
                            offset={isSmallScreen ? -140 : -40} 
                            duration={500} 
                            >Experience
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'skills' ? 'fixed skills' : ''}`}>
                        <Link 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            offset={isSmallScreen ? -140 : -40} 
                            duration={500} 
                            >Skills
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'qaprojects' ? 'fixed qaprojects' : ''}`}>
                        <Link 
                            to="qaprojects" 
                            spy={true} 
                            smooth={true} 
                            offset={isSmallScreen ? -130 : -40} 
                            duration={500} 
                            >QA Projects
                        </Link>
                    </li>
                    <li className={`nav-item py-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={isSmallScreen ? -130 : 30} 
                            duration={500} 
                            >Web Projects
                        </Link>
                    </li>
                </ul>
                <div className='flex gap-5 text-3xl mt-16 icons'>
                    <a href="https://github.com/simonakom">
                        <FaGithub className={`transition-transform transform hover:scale-110 icon hover:text-blue-400`} />
                    </a>
                    <a href="https://www.linkedin.com/in/simona-komarovska/">
                        <FaLinkedin className={`transition-transform transform hover:scale-110 icon hover:text-blue-400`} />
                    </a>
                    <a href="mailto:simonak399@gmail.com">
                        <MdEmail className={`transition-transform transform hover:scale-110 icon hover:text-blue-400`} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
