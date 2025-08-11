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
            description: "Landing page",
            image: netflix,
            liveUrl: "https://simonakom.github.io/netflix-page/index.html",
            githubUrl: "https://github.com/simonakom/netflix-page?tab=readme-ov-file",
            type: "Landing page"
        },
        {
            title: "Spotify",
            description: "Landing page",
            image: spotify,
            liveUrl: "https://simonakom.github.io/spotify-app/build/index.html",
            githubUrl: "https://github.com/simonakom/spotify-app",
            type: "Landing page"
        },
        {
            title: "Rentify: rent platform",
            description: "Full-stack project",
            image: rentify,
            liveUrl: "https://github.com/simonakom/pc-rent-platform",
            githubUrl: "https://github.com/simonakom/pc-rent-platform",
            type: "Full-stack project"
        },
        {
            title: "PulpCinemaHub",
            description: "Full-stack project",
            image: cinema,
            liveUrl: "https://github.com/simonakom/forum-app",
            githubUrl: "https://github.com/simonakom/forum-app",
            type: "Full-stack project"
        },
        {
            title: "Kolt",
            description: "CRUD app",
            image: kolt,
            liveUrl: "https://github.com/simonakom/kolt-scooters-app",
            githubUrl: "https://github.com/simonakom/kolt-scooters-app",
            type: "CRUD app"
        },
        {
            title: "Data Table",
            description: "CRUD app",
            image: product,
            liveUrl: "https://github.com/simonakom/data-table-app",
            githubUrl: "https://github.com/simonakom/data-table-app",
            type: "CRUD app"
        },
        {
            title: "BMI calculator",
            description: "JavaScript app",
            image: bmi,
            liveUrl: "https://github.com/simonakom/bmi-calculator",
            githubUrl: "https://github.com/simonakom/bmi-calculator",
            type: "JavaScript app"
        },
        {
            title: "Contact form",
            description: "CSS project",
            image: contact,
            liveUrl: "https://github.com/simonakom/contact-form",
            githubUrl: "https://github.com/simonakom/contact-form",
            type: "CSS project"
        }
    ];

    return (
        <div className='projects' id="projects">
            <div className='px-9 max-w-4xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Projects</h2>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>A collection of my web development projects showcasing various technologies and skills</p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-16'>
                    {projects.map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            {/* Project Image */}
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110' 
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            
                            {/* Project Content */}
                            <div className='p-6'>
                                <div className='mb-4'>
                                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                                    <p className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${isDarkMode ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                                        {project.type}
                                    </p>
                                </div>
                                
                                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
                                
                                {/* Action Buttons */}
                                <div className='flex gap-3'>
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'}`}
                                    >
                                        <FaGithub className="text-sm" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View More Button */}
                <div className='text-center mb-20'>
                    <button 
                        onClick={toggleModal}
                        className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25' : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25'}`}
                    >
                        <span>View Full Project Archive</span>
                        <FaAnglesRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
            
            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
                    <div className={`modal ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#ebeef5]'}`}>
                        <div className="modal-content">
                            <button className="modal-close-btn text-3xl" onClick={toggleModal}>
                                <FaAnglesLeft />
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


