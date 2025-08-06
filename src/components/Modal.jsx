import PropTypes from 'prop-types';
import { FaAnglesUp } from "react-icons/fa6";
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
        const scrollToBottom = () => {
            const bottomElement = document.getElementById('bottomElement'); 
            if (bottomElement) {
                bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        };
        
        return (
            <div className="mx-10 mb-10 mt-10 relative">
            <div id="bottomElement"></div> {/* Element to Scroll to */}
                <h1 className="font-bold text-3xl mb-10">All Projects</h1>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                     <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}> Landing pages</p>
                </div>
    
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-10'>
                    <div>
                        <a href="https://simonakom.github.io/spotify-app/build/index.html">
                            <img src={spotify} alt="spotify" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'>
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Spotify landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>react</b>, <b className='font-bold'>tailwind</b>, <br /><b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/spotify-app">
                                <b className={`text-sm px-2 py-1 mt-5 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/netflix-page/index.html">
                            <img src={netflix} alt="netflix" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Netflix landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/netflix-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/travlog-landing-page/travlog.html">
                            <img src={travlog} alt="travlog" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Travlog landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/travlog-landing-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/abstract-landing-page/index.html">
                            <img src={abstract} alt="abstract" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Abstract landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/abstract-landing-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/collab-landing-page/collab.html">
                            <img src={collab} alt="collab" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Collab landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/collab-landing-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/sneaker-eshop-page/sneaker.html">
                            <img src={shoe} alt="shoe" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Sneaker landing page</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>css</b>, <br /><b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/sneaker-eshop-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/sample-page/sample-page.html">
                            <img src={christmas} alt="christmas" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Christmas shop</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>css</b>, <br /><b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/sample-page">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                    <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}>CRUD applications</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <a href="https://simonakom.github.io/kolt-scooters-app/dist/index.html">
                            <img src={kolt} alt="kolt" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Kolt</b> scooters</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b>, <b className='font-bold'>localStorage</b></p>
                            <a href="https://github.com/simonakom/kolt-scooters-app">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/data-table-app/admin.html">
                            <img src={product} alt="product" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Data-table</b> of products</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/data-table-app">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/crud-people-data-table/dynamic-table.html">
                            <img src={people} alt="people" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Data-table</b> of people</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/crud-people-data-table">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                    <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}>API applications</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <a href="https://simonakom.github.io/coctails-api/coctails.html">
                            <img src={coctails} alt="coctails" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Coctails</b> receipe app</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/coctails-api">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/dogs-api/dogs-photo-album.html">
                            <img src={dogs} alt="dogs" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Dogs</b> photo</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/dogs-api">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/people-selector/dist/index.html">
                            <img src={selector} alt="selector" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Poeple</b> selector</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b>, <b className='font-bold'>localStorage</b></p>
                            <a href="https://github.com/simonakom/people-selector">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/chuck-norris-jokes/index.html">
                            <img src={joke} alt="joke" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Jokes</b> by Chuck Norris</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>css</b>, <br /><b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/chuck-norris-jokes">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                    <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}>JavaScript/React projects</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <a href="https://simonakom.github.io/google-timer-stopwatch/dist/index.html">
                            <img src={timer} alt="timer" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Google</b> timer & stopwatch</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <br /><b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/google-timer-stopwatch">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/birthday-countdown/dist/index.html">
                            <img src={birthday} alt="birthday" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Birthday</b> countdown</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <br /><b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/birthday-countdown">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/todo-list/dist/index.html">
                            <img src={tasks} alt="tasks" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>To-do</b> app</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b>, <b className='font-bold'>localStorage</b></p>
                            <a href="https://github.com/simonakom/todo-list">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/color-picker/build/index.html">
                            <img src={color} alt="color" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Color</b> picker</p>
                            <p className='mb-1'> Build with <b className='font-bold'>react</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b>, <b className='font-bold'>localStorage</b></p>
                            <a href="https://github.com/simonakom/color-picker">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/tip-counter/index.html">
                            <img src={tips} alt="tips" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Tip</b> counter</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/tip-counter">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/bmi-calculator/index.html">
                            <img src={bmi} alt="bmi" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>BMI</b> calculator</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/bmi-calculator">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/password-generator/index.html">
                            <img src={passGenerator} alt="passGenerator" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Password</b> generator</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/password-generator">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/check-password-strength/index.html">
                            <img src={pass} alt="pass" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Password</b> checker</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/check-password-strength?tab=readme-ov-file">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/guessing-number-game/index.html">
                            <img src={game} alt="game" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Guessing</b> game!</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/guessing-number-game?tab=readme-ov-file">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/palindrome-app/index.html">
                            <img src={palindrome} alt="palindrome" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Palindrome</b> app</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/palindrome-app">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/calculator/calculator.html">
                            <img src={calculator} alt="calculator" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Calculator</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/calculator">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/quiz/index.html">
                            <img src={quiz} alt="quiz" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Quiz</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>,  <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/quiz">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/vocals-counter/index.html">
                            <img src={vowel} alt="vowel" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Vowel</b> counter</p>
                            <p className='mb-1'> Build with <b className='font-bold'>javascript</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/vocals-counter?tab=readme-ov-file">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                    <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}>Fullstack applications</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <a href="https://github.com/simonakom/pc-rent-platform">
                            <img src={rentify} alt="rentify" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Rentify</b> pc rent platform</p>
                            <p className='mb-1'> Build with <b className='font-bold'>node.js</b>, <b className='font-bold'>nginx</b>, <b className='font-bold'>mySQL</b>, <b className='font-bold'>react vite</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b></p> 
                            <a href="https://github.com/simonakom/pc-rent-platform">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://github.com/simonakom/forum-app">
                            <img src={cinema} alt="cinema" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>PulpCinemaHub</b> app</p>
                            <p className='mb-1'> Build with <b className='font-bold'>node.js</b>, <b className='font-bold'>MongoDB</b>, <b className='font-bold'>javascript</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>tailwind</b>, <b className='font-bold'>css</b>, <b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/forum-app">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/todo-list-app/front-end/todos.html">
                            <img src={todo} alt="todo" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>To-do</b> app</p>
                            <p className='mb-1'> Build with <b className='font-bold'>node.js</b>, <b className='font-bold'>nginx</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b>,<b className='font-bold'>html</b></p>
                            <a href="https://github.com/simonakom/todo-list-app">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className={`sticky top-[-20px] z-50 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#c0c4d0]'}`}>
                    <p className={`my-10 py-2 text-center border-t-2 border-b-2 font-medium ${isDarkMode ? 'border-[#79afdc3e] text-[#79afdc]' : 'border-[#3a3a9d3f] text-[#4d4db9]'}`}>CSS Projects</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <div>
                        <a href="https://simonakom.github.io/contact-form/contact-form-responsive.html">
                            <img src={contact} alt="contact" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Contact form</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/contact-form">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/registration-form/registration.html">
                            <img src={registration} alt="registration" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Registration form</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/contact-form">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/shopping-cart/shopping-cart.html">
                            <img src={shopping} alt="shopping" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Shopping Cart</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/shopping-cart">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/2048-game/game-2048.html">
                            <img src={game2048} alt="game2048" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>2048 Game</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>bootstrap</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/2048-game">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/invoice/invoice.html">
                            <img src={invoice} alt="invoice" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Invoice</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/invoice">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://simonakom.github.io/calendar/calendar.html">
                            <img src={calendar} alt="calendar" className='w-[200px] mb-3 rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-500' />
                        </a>
                        <div className='mt-2'> 
                            <p className={`text-[20px] ${isDarkMode ? 'text-[#79afdc]' : 'text-[#3a3a9d]'}`}><b>Calendar</b></p>
                            <p className='mb-1'> Build with <b className='font-bold'>html</b>, <b className='font-bold'>css</b></p>
                            <a href="https://github.com/simonakom/calendar?tab=readme-ov-file">
                                <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Scroll to Top Button */}
                <div className="text-3xl mt-20 me-10 flex justify-end items-end">
                    <button
                        onClick={scrollToBottom}
                        aria-label="Scroll to Bottom">
                        <FaAnglesUp className="text-3xl" />
                    </button>
                </div>
{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>
        );
    }
    FullProjectArchive.propTypes = {
        isDarkMode: PropTypes.bool.isRequired,
};
