import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
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

    return (
        <div className='projects' id="projects">
            <p className='mt-16 mb-14 ms-10 text-lg font-bold text-center'>Projects</p>
            <div className='text-justify pb-24 px-10 flex flex-col items-center'>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/netflix-page/index.html">
                        <img src={netflix} alt="netflix" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Netfix</b> Landing page</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/netflix-page?tab=readme-ov-file">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/spotify-app/build/index.html">
                        <img src={spotify} alt="spotify" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Spotify</b> Landing Page</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/spotify-app">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/coctails-api/coctails.html">
                        <img src={coctails} alt="coctails" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Coctails receipe</b><br /> API app</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/coctails-api">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/google-timer-stopwatch/dist/index.html">
                        <img src={timer} alt="timer" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Google timer & stopwatch</b><br />React app </p> 
                        <div className="mt-4">
                            <a href="https://github.com/simonakom/google-timer-stopwatch">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/kolt-scooters-app/dist/index.html">
                        <img src={kolt} alt="kolt" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Kolt</b> CRUD app</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/kolt-scooters-app">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/data-table-app/admin.html">
                        <img src={product} alt="product" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Data-table</b> CRUD app</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/data-table-app">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/bmi-calculator/index.html">
                        <img src={bmi} alt="bmi" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>BMI calculator</b> <br />Javascript app</p> 
                        <div className="mt-4">
                            <a href="https://github.com/simonakom/bmi-calculator">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://simonakom.github.io/contact-form/contact-form-responsive.html">
                        <img src={contact} alt="contact" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Contact form</b><br /> CSS project</p>
                        <div className="mt-1">
                            <a href="https://github.com/simonakom/contact-form">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <a href="https://github.com/simonakom/pc-rent-platform">
                        <img src={rentify} alt="rentify" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>Rentify: pc rent platform</b><br /> Fullstack project</p> 
                        <div className="mt-4">
                            <a href="https://github.com/simonakom/pc-rent-platform">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mb-2 text-center'>
                    <a href="https://github.com/simonakom/forum-app">
                        <img src={cinema} alt="cinema" className='w-[400px] rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                    </a>
                    <div className='flex gap-5 mt-5 justify-center'> 
                        <p className={`text-[16px] ${isDarkMode ? 'text-[#8f9eea]' : ' text-[#4d4db9]'}`}><b className='text-[20px]'>PulpCinemaHub</b><br /> Fullstack project</p> 
                        <div className="mt-4">
                            <a href="https://github.com/simonakom/forum-app">               
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#8f9eea] text-black' : 'bg-[#4646b9] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='mb-20 text-lg font-bold flex items-center justify-center cursor-pointer group hover:underline decoration-[#8f9eea] text-center' onClick={toggleModal}>
                <span className='transition-transform transform group-hover:translate-x-1 group-hover:scale-105'>View Full Project Archive <FaAnglesRight className="inline" /></span>
            </p>
            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
                    <div className={`modal ${isDarkMode ? 'bg-[#0f172b]' : 'bg-[#e4e5e9]'}`}>
                        <div className="modal-content">
                            <button className="modal-close-btn text-3xl" onClick={toggleModal}>
                                <FaAnglesLeft />
                            </button>
                            <Modal onClose={toggleModal} isDarkMode={isDarkMode} />
                        </div>
                    </div>
                </div>
            )}
            <div className="mx-10 mb-5 text-sm text-slate-500">@ Portfolio coded in Visual Studio Code & crafted with React vite and Tailwind CSS by me :)</div>
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


