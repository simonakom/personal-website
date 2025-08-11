import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from "react-icons/fa";
import jest from '../assets/images/jest.png';
import postman from '../assets/images/postman.png';
import cypress from '../assets/images/cypress.jpg';
import './Projects.css';

export default function Projects({isDarkMode}) {
    return (
        <div className='qaprojects' id="qaprojects">
            <div className='px-9 max-w-4xl mx-auto'>
                <p className='mt-14 mb-10 text-xl font-bold'>QA Projects:</p>
                
                <div className='grid gap-3'>
                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-Shop API Automation</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated API tests (scripts) with Postman integrated into CI pipeline</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/automationExcercise-postman-api-test">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-Shop UI Automation</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>End-to-end UI tests with Cypress integrated into CI pipeline</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/automationExcercise-cypress-test">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>To-Do App UI Automation</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>End-to-end UI tests with Cypress integrated into CI pipeline</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/todo-app-testing">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Registration Form Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Validated a multi-step registration form using Cypress tests with custom commands and functions</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/registration-form-list">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Movies & Actors API (PostgreSQL) Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Node.js API with PostgreSQL storage, CRUD operations, and automated Postman/Newman tests</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/movie-actor-api-postgreeDB">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Movies & Actors API (In-Memory) Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Node.js API with in-memory storage and Postman tests for CRUD functionality</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/movie-actor-api">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shop & Items API Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CRUD operations testing with Postman</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/shop-api">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group py-3 px-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={jest} alt="jest" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Algorithm & Math Unit Tests</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unit tests for algorithms and math functions</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/unit-testing-jest">
                                    <b className={isDarkMode ? "github-button-bright" : "github-button"}>Github</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={`border-t-1 mt-14 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


