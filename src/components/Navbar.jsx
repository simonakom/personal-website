import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Navbar.css';

export default function Navbar({ isDarkMode }) {
    const [fixedSection, setFixedSection] = useState(null);

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
                
                // Add threshold for better detection timing
                const threshold = 100;
    
                if (scrollTop >= aboutOffsetTop - threshold && scrollTop < skillsOffsetTop - threshold && screenWidth <= 1024) {
                    setFixedSection('about');
                } else if (scrollTop >= skillsOffsetTop - threshold && scrollTop < experienceOffsetTop - threshold && screenWidth <= 1024) {
                    setFixedSection('skills');
                } else if (scrollTop >= experienceOffsetTop - threshold && scrollTop < qaprojectsOffsetTop - threshold && screenWidth <= 1024) {
                    setFixedSection('experience');
                } else if (scrollTop >= qaprojectsOffsetTop - threshold && scrollTop < projectsOffsetTop - threshold && screenWidth <= 1024) {
                    setFixedSection('qaprojects');
                } else if (scrollTop >= projectsOffsetTop - threshold && screenWidth <= 1024) {
                    setFixedSection('projects');
                } else {
                    setFixedSection(null);
                }
            }
        }
        
        // Call handleScroll immediately to set initial state
        handleScroll();
        
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
        <div className={`header p-10 ${isDarkMode ? '' : 'light-mode'}`}>
            <div className='mt-14'>
                <p className={`text-5xl mb-4 name ${isDarkMode ? 'text-[#cbd5e7]' : 'text-[#3a3a9d]'}`}>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-70" style={{backgroundSize: '200% 100%'}}>Simona Komarovska</span>
                </p>
                <div className={`mb-16 my-2 position-title wrapper ${isDarkMode ? '' : 'light-mode'}`}>
                    <ul className={`dynamic-txts ${isDarkMode ? 'text-[#d3dfefef]' : 'text-[#272828ef]'}`}>
                        <li className='first-response'><span className={`text-xl leading-relaxed ${isDarkMode ? '' : 'text-gray-600'}`}>Product Development & Quality Specialist</span></li>
                    </ul>
                </div>
                {/* <div className={`inline-elements slider mb-19 ${isDarkMode ? 'text-[#cbd5e7]' : 'text-[#272828ef]'}`}>
                    I build
                        <div className={`slide ${isDarkMode ? 'text-[#8ac2f0]' : 'text-[#3a3a9d]'}`}>
                            <div><div>responsive</div></div>
                            <div><div>engaging</div></div>
                            <div><div>user-friendly</div></div>
                        </div>
                    digital experiences
                </div> */}
            </div>
            <nav className='navbar mt-10 cursor-pointer text-xl'>
                <ul>
                    <li className={`nav-item pt-7 ${fixedSection === 'about' ? 'fixed about' : ''}`}>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-10} 
                            duration={500} 
                            >About
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'experience' ? 'fixed experience' : ''}`}>
                        <Link 
                            to="experience" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            >Experience
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'skills' ? 'fixed skills' : ''}`}>
                        <Link 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            >Skills
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="qaprojects" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            >QA Projects
                        </Link>
                    </li>
                    <li className={`nav-item py-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
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
