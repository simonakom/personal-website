import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import netflix from '../assets/images/projects/netflix.png';
import spotify from '../assets/images/projects/spotify.png';
import kolt from '../assets/images/projects/kolt.png';
import product from '../assets/images/projects/product-data.png';
import coctails from '../assets/images/projects/coctails.png';
import timer from '../assets/images/projects/timer.png';
import bmi from '../assets/images/projects/bmi.png';
import contact from '../assets/images/projects/contact.png';
import rentify from '../assets/images/projects/rentify.png';
import cinema from '../assets/images/projects/cinema.png';
import Modal from './Modal'; 
import './Projects.css';

export default function Projects({isDarkMode}) {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setShowModal(!showModal);
        if (!showModal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    };

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            toggleModal();
        }
    };

    const projects = [
        {
            title: "Netflix",
            image: netflix,
            liveUrl: "https://simonakom.github.io/netflix-page/index.html",
            githubUrl: "https://github.com/simonakom/netflix-page?tab=readme-ov-file",
            type: "Landing page"
        },
        {
            title: "Spotify",
            image: spotify,
            liveUrl: "https://simonakom.github.io/spotify-app/build/index.html",
            githubUrl: "https://github.com/simonakom/spotify-app",
            type: "Landing page"
        },
        {
            title: <><span className="font-bold">Rentify</span><br /><span className="font-thin">PC rent app</span></>,
            image: rentify,
            liveUrl: "https://github.com/simonakom/pc-rent-platform",
            githubUrl: "https://github.com/simonakom/pc-rent-platform",
            type: "Full-stack project"
        },
        {
            title: <><span className="font-bold">PulpCinemaHub</span><br /><span className="font-thin">Forum app</span></>,
            image: cinema,
            liveUrl: "https://github.com/simonakom/forum-app",
            githubUrl: "https://github.com/simonakom/forum-app",
            type: "Full-stack project"
        },
        {
            title: "Cocktail Recipes",
            image: coctails,
            liveUrl: "https://github.com/simonakom/coctails-api",
            githubUrl: "https://github.com/simonakom/coctails-api",
            type: "API app"
        },
        {
            title: "Google Timer & Stopwatch",
            image: timer,
            liveUrl: "https://github.com/simonakom/google-timer-stopwatch",
            githubUrl: "https://github.com/simonakom/google-timer-stopwatch",
            type: "React app"
        },
        {
            title: "Kolt Scooters",
            image: kolt,
            liveUrl: "https://github.com/simonakom/kolt-scooters-app",
            githubUrl: "https://github.com/simonakom/kolt-scooters-app",
            type: "CRUD app"
        },
        {
            title: "Data Table",
            image: product,
            liveUrl: "https://github.com/simonakom/data-table-app",
            githubUrl: "https://github.com/simonakom/data-table-app",
            type: "CRUD app"
        },
        {
            title: "BMI Calculator",
            image: bmi,
            liveUrl: "https://github.com/simonakom/bmi-calculator",
            githubUrl: "https://github.com/simonakom/bmi-calculator",
            type: "JavaScript app"
        },
        {
            title: "Contact Form",
            image: contact,
            liveUrl: "https://github.com/simonakom/contact-form",
            githubUrl: "https://github.com/simonakom/contact-form",
            type: "CSS project"
        }
    ];

    return (
        <div className='projects' id="projects">
            <div className='px-9 max-w-3xl mx-auto'>
                <div className='mb-10'>
                    <h2 className={`mt-14 mb-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Projects</h2>
                    <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>A collection of my web development projects showcasing various technologies and skills:</p>
                </div>
                
                <div className='grid grid-cols-1 gap-8 pb-16'>
                    {projects.map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            {/* Project Image Container */}
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                {/* Hover Overlay */}
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8'>
                                    {/* Project Title */}
                                    <h3 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-white'}`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Type Badge */}
                                    <div className='mb-6'>
                                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-gray-600/80 text-white border border-gray-500/60' : 'bg-gray-600/80 text-white border border-gray-500/60'}`}>
                                            {project.type}
                                        </span>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className='flex gap-4'>
                                        {index !== 2 && index !== 3 && (
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-500/40 group-hover:text-white group-hover:border-blue-500/80' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 hover:border-gray-400 group-hover:bg-blue-300 group-hover:text-gray-800 group-hover:border-blue-400'}`}
                                            >
                                                <FaExternalLinkAlt className="text-sm" />
                                                Live Demo
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-500/40 group-hover:text-white group-hover:border-blue-500/80' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 hover:border-gray-400 group-hover:bg-blue-300 group-hover:text-gray-800 group-hover:border-blue-400'}`}
                                        >
                                            <FaGithub className="text-sm" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View More Button - Redesigned */}
                <div className='text-center mt-10 mb-20'>
                    <button 
                        onClick={toggleModal}
                        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-medium text-sm transition-all duration-300 backdrop-blur-sm min-w-[140px] h-10 ${isDarkMode ? 'bg-gradient-to-br from-[rgba(30,41,59,0.4)] to-[rgba(51,65,85,0.4)] text-[#f8fafc] border border-[rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-[rgba(15,23,42,0.6)] hover:to-[rgba(30,41,59,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]' : 'bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(248,250,252,0.4)] text-[#1e293b] border border-[rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-[rgba(241,245,249,0.6)] hover:to-[rgba(226,232,240,0.6)] hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]'}`}
                        style={{
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.13)',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: '500',
                            letterSpacing: '0.025em'
                        }}
                    >
                        <span className="font-semibold">View Full Project Archive</span>
                        <FaAnglesRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </button>
                </div>
            </div>
            
            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
                    <div className={`modal ${isDarkMode ? 'dark bg-[#0f172a]' : 'bg-[#ebeef5]'}`}>
                        <div className="modal-content">
                            <button className="modal-close-btn group" onClick={toggleModal}>
                                <FaAnglesLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
                                <span className="ml-1 font-semibold">Close</span>
                            </button>
                            <Modal onClose={toggleModal} isDarkMode={isDarkMode} />
                        </div>
                    </div>
                </div>
            )}
            
            <div className="mx-10 mb-5 text-sm text-slate-500 text-center">@ Portfolio coded in Visual Studio Code and crafted with React, Vite, and Tailwind CSS by me :)</div>
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


