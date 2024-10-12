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
            const qaprojectsSection = document.getElementById('qaprojects');
            const projectsSection = document.getElementById('projects');

            if (aboutSection && experienceSection && projectsSection && skillsSection) {
                const aboutOffsetTop = aboutSection.offsetTop;
                const skillsOffsetTop = skillsSection.offsetTop; 
                const experienceOffsetTop = experienceSection.offsetTop;
                const qaprojectsOffsetTop = qaprojectsSection.offsetTop;
                const projectsOffsetTop = projectsSection.offsetTop;
                const scrollTop = window.scrollY;
                const screenWidth = window.innerWidth;
    
                if (scrollTop >= aboutOffsetTop && scrollTop < skillsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('about');
                } else if (scrollTop >= skillsOffsetTop && scrollTop < experienceOffsetTop && screenWidth <= 1024) {
                    setFixedSection('skills');
                } else if (scrollTop >= experienceOffsetTop && scrollTop < projectsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('experience');
                } else if (scrollTop >= qaprojectsOffsetTop && screenWidth <= 1024) {
                    setFixedSection('projects');
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
                <p className={`text-5xl mb-4 name ${isDarkMode ? 'text-[#cbd5e7]' : 'text-[#3a3a9d]'}`}>Simona Komarovska</p>
                <div className={`mb-16 my-2 position-title wrapper ${isDarkMode ? '' : 'light-mode'}`}>
                    <ul className={`dynamic-txts ${isDarkMode ? 'text-[#d3dfefef]' : 'text-[#272828ef]'}`}>
                        <li className='first-response'><span>Full-stack & QA Engineer</span></li>
                    </ul>
                </div>
                <div className={`inline-elements slider mb-19 ${isDarkMode ? 'text-[#cbd5e7]' : 'text-[#272828ef]'}`}>
                    I build
                        <div className={`slide ${isDarkMode ? 'text-[#8ac2f0]' : 'text-[#3a3a9d]'}`}>
                            <div><div>responsive</div></div>
                            <div><div>engaging</div></div>
                            <div><div>user-friendly</div></div>
                        </div>
                    digital experiences
                </div>
            </div>
            <nav className='navbar mt-10 cursor-pointer text-xl'>
                <ul>
                    <li className={`nav-item pt-7 ${fixedSection === 'about' ? 'fixed about' : ''}`}>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-5} 
                            duration={500} 
                            >About
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'experience' ? 'fixed experience' : ''}`}>
                        <Link 
                            to="experience" 
                            spy={true} 
                            smooth={true} 
                            offset={-150} 
                            duration={500} 
                            >Experience
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'skills' ? 'fixed skills' : ''}`}>
                        <Link 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            offset={-130} 
                            duration={500} 
                            >Skills
                        </Link>
                    </li>
                    <li className={`nav-item pt-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="qaprojects" 
                            spy={true} 
                            smooth={true} 
                            offset={-150} 
                            duration={500} 
                            >QA Projects
                        </Link>
                    </li>
                    <li className={`nav-item py-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={-150} 
                            duration={500} 
                            >Dev Projects
                        </Link>
                    </li>
                </ul>
                <div className='flex gap-5 text-3xl mt-16 icons'>
                    <a href="https://github.com/simonakom">
                        <FaGithub className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#3a3a9d]'}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/simona-komarovska-a70376185/">
                        <FaLinkedin className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#3a3a9d]'}`} />
                    </a>
                    <a href="mailto:simonak399@gmail.com">
                        <MdEmail className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#3a3a9d]'}`} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
