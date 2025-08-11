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
                <p className='mt-16 mb-12 text-2xl font-bold text-center'>QA Projects</p>
                
                <div className='grid gap-6'>
                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-Shop API Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated API tests (scripts) with Postman + CI</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/automationExcercise-postman-api-test">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>E-Shop Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>End-to-end testing with Cypress + CI</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/automationExcercise-cypress-test">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Todo App Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated testing with Cypress + CI</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/todo-app-testing">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={cypress} alt="cypress" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Registration Form Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated testing with Cypress</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/registration-form-list">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Movie Database API Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CRUD operations testing with Postman scripts</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/movie-actor-api-postgreeDB">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Movies & Actors API Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CRUD operations testing with Postman</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/movie-actor-api">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={postman} alt="postman" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shop Management API Testing</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CRUD operations testing with Postman</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/shop-api">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'}`}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <img src={jest} alt="jest" className='w-10 h-10 rounded-full shadow-sm' />
                                <div>
                                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Algorithm Testing Suite</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unit tests for mathematical functions</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaAngleDoubleRight className={`text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <a href="https://github.com/simonakom/unit-testing-jest">
                                    <b className="github-button">Github</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className={`border-t-2 mt-16 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`} />
            </div>
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


