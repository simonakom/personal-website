import PropTypes from 'prop-types';
import { FaAnglesUp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import calendar from '../assets/images/projects/calendar.png';
import invoice from '../assets/images/projects/invoice.png';
import christmas from '../assets/images/projects/christmas.png';
import contact from '../assets/images/projects/contact.png';
import registration from '../assets/images/projects/registration.png';
import game2048 from '../assets/images/projects/2048.png';
import shopping from '../assets/images/projects/shopping.png';
import travlog from '../assets/images/projects/travlog.png';
import shoe from '../assets/images/projects/shoe.png';
import collab from '../assets/images/projects/collab.png';
import calculator from '../assets/images/projects/calculator.png';
import game from '../assets/images/projects/game.png';
import pass from '../assets/images/projects/pass-checker.png';
import quiz from '../assets/images/projects/quiz.png';
import people from '../assets/images/projects/people-data.png';
import product from '../assets/images/projects/product-data.png';
import coctails from '../assets/images/projects/coctails.png';
import dogs from '../assets/images/projects/dogs.png';
import vowel from '../assets/images/projects/vowel.png';
import bmi from '../assets/images/projects/bmi.png';
import palindrome from '../assets/images/projects/palindrome.png';
import passGenerator from '../assets/images/projects/passGenerator.png';
import tips from '../assets/images/projects/tips.png';
import abstract from '../assets/images/projects/abstract.png';
import todo from '../assets/images/projects/todo.png';
import joke from '../assets/images/projects/joke.png';
import cinema from '../assets/images/projects/cinema.png';
import netflix from '../assets/images/projects/netflix.png';
import spotify from '../assets/images/projects/spotify.png';
import color from '../assets/images/projects/color.png';
import birthday from '../assets/images/projects/birthday.png';
import kolt from '../assets/images/projects/kolt.png';
import tasks from '../assets/images/projects/tasks.png';
import timer from '../assets/images/projects/timer.png';
import selector from '../assets/images/projects/selector.png';
import rentify from '../assets/images/projects/rentify.png';

export default function FullProjectArchive({ isDarkMode }) {
    const scrollToTop = () => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    return (
        <div className={`mb-8 mt-6 relative ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {/* Header */}
            <div className="text-center mb-12 mt-10 mx-9">
                <h1 className={`font-bold text-3xl mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Project Archive
                </h1>
                <p className={`text-mg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Complete collection of my web development projects
                </p>
            </div>

            {/* Landing Pages Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        Landing Pages
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-5'>
                    {[
                        { title: "Spotify", image: spotify, liveUrl: "https://simonakom.github.io/spotify-app/build/index.html", githubUrl: "https://github.com/simonakom/spotify-app", tech: "React, Tailwind, CSS" },
                        { title: "Netflix", image: netflix, liveUrl: "https://simonakom.github.io/netflix-page/index.html", githubUrl: "https://github.com/simonakom/netflix-page", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Travlog", image: travlog, liveUrl: "https://simonakom.github.io/travlog-landing-page/travlog.html", githubUrl: "https://github.com/simonakom/travlog-landing-page", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Abstract", image: abstract, liveUrl: "https://simonakom.github.io/abstract-landing-page/index.html", githubUrl: "https://github.com/simonakom/abstract-landing-page", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Collab", image: collab, liveUrl: "https://simonakom.github.io/collab-landing-page/collab.html", githubUrl: "https://github.com/simonakom/collab-landing-page", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Sneaker", image: shoe, liveUrl: "https://simonakom.github.io/sneaker-eshop-page/sneaker.html", githubUrl: "https://github.com/simonakom/sneaker-eshop-page", tech: "JavaScript, CSS, HTML" },
                        { title: "Christmas Shop", image: christmas, liveUrl: "https://simonakom.github.io/sample-page/sample-page.html", githubUrl: "https://github.com/simonakom/sample-page", tech: "JavaScript, CSS, HTML" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CRUD Applications Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        CRUD Applications
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9'>
                    {[
                        { title: "Kolt Scooters", image: kolt, liveUrl: "https://simonakom.github.io/kolt-scooters-app/dist/index.html", githubUrl: "https://github.com/simonakom/kolt-scooters-app", tech: "React Vite, Tailwind, CSS, localStorage" },
                        { title: <><span className="font-bold">Data Table</span> <span className="font-thin">of Products</span></>, image: product, liveUrl: "https://simonakom.github.io/data-table-app/admin.html", githubUrl: "https://github.com/simonakom/data-table-app", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: <><span className="font-bold">Data Table</span> <span className="font-thin">of People</span></>, image: people, liveUrl: "https://simonakom.github.io/crud-people-data-table/dynamic-table.html", githubUrl: "https://github.com/simonakom/crud-people-data-table", tech: "JavaScript, Bootstrap, CSS, HTML" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Applications Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        API Applications
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9'>
                    {[
                        { title: "Cocktail Recipes", image: coctails, liveUrl: "https://simonakom.github.io/coctails-api/coctails.html", githubUrl: "https://github.com/simonakom/coctails-api", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Pet Gallery", image: dogs, liveUrl: "https://simonakom.github.io/dogs-api/dogs-photo-album.html", githubUrl: "https://github.com/simonakom/dogs-api", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "People Selector", image: selector, liveUrl: "https://simonakom.github.io/people-selector/dist/index.html", githubUrl: "https://github.com/simonakom/people-selector", tech: "React Vite, Tailwind, CSS, localStorage" },
                        { title: <><span className="font-bold">Jokes</span> <span className="font-thin">by Chuck Norris</span></>, image: joke, liveUrl: "https://simonakom.github.io/chuck-norris-jokes/index.html", githubUrl: "https://github.com/simonakom/chuck-norris-jokes", tech: "JavaScript, CSS, HTML" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* JavaScript/React Projects Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        JavaScript/React Projects
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9'>
                    {[
                        { title: "Google Timer & Stopwatch", image: timer, liveUrl: "https://simonakom.github.io/google-timer-stopwatch/dist/index.html", githubUrl: "https://github.com/simonakom/google-timer-stopwatch", tech: "React Vite, Tailwind, CSS" },
                        { title: "Birthday Timer", image: birthday, liveUrl: "https://simonakom.github.io/birthday-countdown/dist/index.html", githubUrl: "https://github.com/simonakom/birthday-countdown", tech: "React Vite, Tailwind, CSS" },
                        { title: "Task Tracker", image: tasks, liveUrl: "https://simonakom.github.io/todo-list/dist/index.html", githubUrl: "https://github.com/simonakom/todo-list", tech: "React Vite, Tailwind, CSS, localStorage" },
                        { title: "Color Picker", image: color, liveUrl: "https://simonakom.github.io/color-picker/build/index.html", githubUrl: "https://github.com/simonakom/color-picker", tech: "React, Tailwind, CSS, localStorage" },
                        { title: "Tip Counter", image: tips, liveUrl: "https://simonakom.github.io/tip-counter/index.html", githubUrl: "https://github.com/simonakom/tip-counter", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "BMI Calculator", image: bmi, liveUrl: "https://simonakom.github.io/bmi-calculator/index.html", githubUrl: "https://github.com/simonakom/bmi-calculator", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Password Generator", image: passGenerator, liveUrl: "https://simonakom.github.io/password-generator/index.html", githubUrl: "https://github.com/simonakom/password-generator", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Password Validator", image: pass, liveUrl: "https://simonakom.github.io/check-password-strength/index.html", githubUrl: "https://github.com/simonakom/check-password-strength", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Guessing Game", image: game, liveUrl: "https://simonakom.github.io/guessing-number-game/index.html", githubUrl: "https://github.com/simonakom/guessing-number-game", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Palindrome Checker", image: palindrome, liveUrl: "https://simonakom.github.io/palindrome-app/index.html", githubUrl: "https://github.com/simonakom/palindrome-app", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Calculator", image: calculator, liveUrl: "https://simonakom.github.io/calculator/calculator.html", githubUrl: "https://github.com/simonakom/calculator", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Quiz", image: quiz, liveUrl: "https://simonakom.github.io/quiz/index.html", githubUrl: "https://github.com/simonakom/quiz", tech: "JavaScript, Bootstrap, CSS, HTML" },
                        { title: "Vowel Counter", image: vowel, liveUrl: "https://simonakom.github.io/vocals-counter/index.html", githubUrl: "https://github.com/simonakom/vocals-counter", tech: "JavaScript, CSS, HTML" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullstack Applications Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        Fullstack Applications
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9'>
                    {[
                        { title: <><span className="font-bold">Rentify</span> <span className="font-thin">PC rent app</span></>, image: rentify, liveUrl: "https://github.com/simonakom/pc-rent-platform", githubUrl: "https://github.com/simonakom/pc-rent-platform", tech: "Node.js, Nginx, MySQL, React Vite, Tailwind, CSS" },
                        { title: <><span className="font-bold">PulpCinemaHub</span> <span className="font-thin">Forum</span></>, image: cinema, liveUrl: "https://github.com/simonakom/forum-app", githubUrl: "https://github.com/simonakom/forum-app", tech: "Node.js, MongoDB, JavaScript, Bootstrap, Tailwind, CSS, HTML" },
                        { title: <><span className="font-bold">To-do</span> <span className="font-thin">App</span></>, image: todo, liveUrl: "https://github.com/simonakom/todo-list-app", githubUrl: "https://github.com/simonakom/todo-list-app", tech: "Node.js, Nginx, Bootstrap, CSS, HTML" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Projects Section */}
            <div className="mb-16">
                <div className={`sticky top-0 z-40 py-4 mb-8 ${isDarkMode ? 'bg-[#0f172a]/95 backdrop-blur-sm' : 'bg-[#ebeef5]/95 backdrop-blur-sm'}`}>
                    <h2 className={`text-md font-bold text-center py-3 border-t border-b ${isDarkMode ? 'text-gray-200 border-gray-500' : 'text-gray-700 border-gray-400/60'}`}>
                        CSS Projects
                    </h2>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-9'>
                    {[
                        { title: "Contact Form", image: contact, liveUrl: "https://simonakom.github.io/contact-form/contact-form-responsive.html", githubUrl: "https://github.com/simonakom/contact-form", tech: "HTML, CSS" },
                        { title: "Registration Form", image: registration, liveUrl: "https://simonakom.github.io/registration-form/registration.html", githubUrl: "https://github.com/simonakom/contact-form", tech: "HTML, CSS" },
                        { title: "Shopping Cart", image: shopping, liveUrl: "https://simonakom.github.io/shopping-cart/shopping-cart.html", githubUrl: "https://github.com/simonakom/shopping-cart", tech: "HTML, Bootstrap, CSS" },
                        { title: "2048 Game", image: game2048, liveUrl: "https://simonakom.github.io/2048-game/game-2048.html", githubUrl: "https://github.com/simonakom/2048-game", tech: "HTML, Bootstrap, CSS" },
                        { title: "Invoice", image: invoice, liveUrl: "https://simonakom.github.io/invoice/invoice.html", githubUrl: "https://github.com/simonakom/invoice", tech: "HTML, CSS" },
                        { title: "Calendar", image: calendar, liveUrl: "https://simonakom.github.io/calendar/calendar.html", githubUrl: "https://github.com/simonakom/calendar", tech: "HTML, CSS" }
                    ].map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-lg'}`}>
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110' 
                                />
                                
                                <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6'>
                                    <h3 className={`text-xl font-bold mb-3 text-center text-white`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Tech Badge */}
                                    <div className='mb-4'>
                                        <span className={`text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-3xl shadow-2xl relative overflow-hidden inline-block max-w-xs text-center leading-tight bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white border border-white/20 shadow-white/30`}>
                                            {/* Glass Reflection Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-30`}></div>
                                            <span className="relative z-10 whitespace-normal break-words">{project.tech}</span>
                                        </span>
                                    </div>
                                    
                                    <div className='flex gap-1 sm:gap-2'>
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15'} whitespace-nowrap`}
                                        >
                                            <FaGithub className="text-xs" />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll to Top Button */}
            <div className="text-center mt-16 mb-8">
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to Top"
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-medium text-sm transition-all duration-300 backdrop-blur-sm min-w-[140px] h-10 ${isDarkMode ? 'bg-gradient-to-br from-[rgba(30,41,59,0.4)] to-[rgba(51,65,85,0.4)] text-[#f8fafc] border border-[rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-[rgba(15,23,42,0.6)] hover:to-[rgba(30,41,59,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]' : 'bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(248,250,252,0.4)] text-[#1e293b] border border-[rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-[rgba(241,245,249,0.6)] hover:to-[rgba(226,232,240,0.6)] hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]'}`}
                    style={{
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.13)',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '500',
                        letterSpacing: '0.025em'
                    }}
                >
                    <FaAnglesUp className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
                    <span className="font-semibold">Scroll to Top</span>
                </button>
            </div>
        </div>
    );
}

FullProjectArchive.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
