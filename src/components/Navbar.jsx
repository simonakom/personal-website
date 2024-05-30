import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Navbar.css';

export default function Navbar({ isDarkMode }) {
    const [fixedSection, setFixedSection] = useState(null);

    useEffect(() => {
        function handleScroll() {
            const aboutSection = document.getElementById('about');
            const skillsSection = document.getElementById('skills'); 
            const experienceSection = document.getElementById('experience');
            const projectsSection = document.getElementById('projects');
    
            if (aboutSection && experienceSection && projectsSection && skillsSection) {
                const aboutOffsetTop = aboutSection.offsetTop;
                const skillsOffsetTop = skillsSection.offsetTop; 
                const experienceOffsetTop = experienceSection.offsetTop;
                const projectsOffsetTop = projectsSection.offsetTop;
                const scrollTop = window.scrollY;
                const screenWidth = window.innerWidth;
    
                if (scrollTop >= aboutOffsetTop && scrollTop < skillsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('about');
                } else if (scrollTop >= skillsOffsetTop && scrollTop < experienceOffsetTop && screenWidth <= 1024) {
                    setFixedSection('skills');
                } else if (scrollTop >= experienceOffsetTop && scrollTop < projectsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('experience');
                } else if (scrollTop >= projectsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('projects');
                } else {
                    setFixedSection(null);
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className={`header p-10 ${isDarkMode ? '' : 'light-mode'}`}>
            <div className='mt-14'>
                <p className={`text-5xl ${isDarkMode ? 'text-[#8f9eea]' : 'text-[#4646b9]'}`}>Simona Komarovska</p>
                <p className='text-2xl mt-2'>Junior Frontend Developer & UX Enthusiast</p>
                <p className='text-xl mt-3 presentation'>I build responsive, engaging, and user-friendly digital experiences.</p>
            </div>
            <nav className='navbar mt-10 cursor-pointer text-xl'>
                <ul>
                    <li className={`nav-item pt-7 ${fixedSection === 'about' ? 'fixed about' : ''}`}>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={30} 
                            duration={500} 
                            >About
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'experience' ? 'fixed experience' : ''}`}>
                        <Link 
                            to="experience" 
                            spy={true} 
                            smooth={true} 
                            offset={-60} 
                            duration={500} 
                            >Experience
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'skills' ? 'fixed skills' : ''}`}>
                        <Link 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            offset={10} 
                            duration={500} 
                            >Skills
                        </Link>
                    </li>
                    <li className={`nav-item py-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={-40} 
                            duration={500} 
                            >Projects
                        </Link>
                    </li>
                </ul>
                <div className='flex gap-5 text-3xl mt-36 icons'>
                    <a href="https://github.com/simonakom">
                        <FaGithub className={`transition-transform transform hover:scale-110 ${isDarkMode ? 'hover:text-[#8f9eea]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/simona-komarovska-a70376185/">
                        <FaLinkedin className={`transition-transform transform hover:scale-110 ${isDarkMode ? 'hover:text-[#8f9eea]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                    <a href="mailto:simonak399@gmail.com">
                        <MdEmail className={`transition-transform transform hover:scale-110 ${isDarkMode ? 'hover:text-[#8f9eea]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
