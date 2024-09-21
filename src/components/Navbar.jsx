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
                <p className={`text-5xl name ${isDarkMode ? 'text-[#ffffff]' : 'text-[#4646b9]'}`}>Simona Komarovska</p>
                <p className='text-2xl my-2 title'> Front-end & QA engineer</p>



                <div className='inline-elements slider'>
                I build
                    <div className='slide'>
                        <div><div>responsive</div></div>
                        <div><div>engaging</div></div>
                        <div><div>user-friendly</div></div>
                    </div>
                digital experiences
                </div>

                <div className={`wrapper ${isDarkMode ? '' : 'light-mode'}`}>
                    <div className={`static-txt ${isDarkMode ? 'text-[#ffffff]' : 'text-[#272828ef]'}`}>I build</div>
                    <ul className={`dynamic-txts ${isDarkMode ? 'text-[#13b5b5ef]' : 'text-[#7827a3]'}`}>
                        <li className='first-response'><span>responsive</span></li>
                        <li className='second-response'><span>engaging</span></li>
                        <li><span>user-friendly</span></li>
                    </ul>
                    <div className={`digital-experience ${isDarkMode ? 'text-[#ffffff]' : 'text-[#272828ef]'}`}>digital experiences</div>
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
                    <li className={`nav-item py-7 ${fixedSection === 'projects' ? 'fixed projects' : ''}`}>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={-150} 
                            duration={500} 
                            >Projects
                        </Link>
                    </li>
                </ul>
                <div className='flex gap-5 text-3xl mt-36 icons'>
                    <a href="https://github.com/simonakom">
                        <FaGithub className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/simona-komarovska-a70376185/">
                        <FaLinkedin className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                    <a href="mailto:simonak399@gmail.com">
                        <MdEmail className={`transition-transform transform hover:scale-110 icon ${isDarkMode ? 'hover:text-[#79afdc]' : 'hover:text-[#4646b9]'}`} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
