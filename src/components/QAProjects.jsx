import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from "react-icons/fa";
import jest from '../assets/images/jest.png';
import postman from '../assets/images/postman.png';
import cypress from '../assets/images/cypress.jpg';
import './Projects.css';

export default function Projects({isDarkMode}) {
    return (
        <div className='qaprojects' id="qaprojects">
            <p className='mt-16 mb-10 ms-10 text-xl font-bold'>QA Projects:</p>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postma/Newman automated API tests (scripts) + CI of  <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>e-shop</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/automationExcercise-postman-api-test">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests + CI of <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>e-shop</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/automationExcercise-cypress-test">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests + CI of <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>to-do app</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/todo-app-testing">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests of <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>registration form</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/registration-form-list">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman/Neman automated tests (scripts) of CRUD API built with PostgreSQL, Node.js and Express for managing <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>movies and actors</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/movie-actor-api-postgreeDB">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman simple test of CRUD API built with Node.js and Express for managing <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>movies and actors</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/movie-actor-api">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman simple test of CRUD API built with Node.js and Express for managing <b className={`${isDarkMode ? 'text-[#ffffff]]' : ' text-[#000000]'}`}>shops</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/shop-api">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={jest} alt="jest" className='w-[40px] rounded-full' />
                    <p>Unit tests with Jest, covering a variety of common <b className={`${isDarkMode ? 'text-[#ffffff]' : 'text-[#000000]'}`}>algorithmic problems</b> and <b className={`${isDarkMode ? 'text-[#ffffff]' : 'text-[#000000]'}`}>mathematical functions</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/unit-testing-jest">
                        <b className="github-button">Github</b>
                    </a>
                </div>
            </div>
            <hr className={`border-t-1 mt-20 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


