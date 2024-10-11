import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from "react-icons/fa";
import jest from '../assets/images/jest.png';
import postman from '../assets/images/postman.png';
import cypress from '../assets/images/cypress.jpg';
import './Projects.css';


export default function Projects({isDarkMode}) {

    return (
        <div className='qaprojects' id="qaprojects">
            <p className='mt-16 mb-10 ms-10 text-lg font-bold'>QA Projects:</p>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postma/Newman automated API tests (scripts) + CI of <b className='text-[#ffffff]'>e-shop</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/automationExcercise-postman-api-test">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests + CI of <b className='text-[#ffffff]'>e-shop</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/automationExcercise-cypress-test">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests + CI of <b className='text-[#ffffff]'>to-do app</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/todo-app-testing">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={cypress} alt="postman" className='w-[35px] rounded-full' />
                    <p>Cypress automated tests of <b className='text-[#ffffff]'>registration form</b></p> 
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/registration-form-list">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman/Neman automated tests (scripts) of CRUD API built with PostgressSQL, Node.js and Express for managing <b className='text-[#ffffff]'> movies and actors</b></p>    
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/movie-actor-api-postgreeDB">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman simple test of CRUD API built with Node.js and Express for managing <b className='text-[#ffffff]'> movies and actors</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/movie-actor-api">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={postman} alt="postman" className='w-[35px] rounded-full' />
                    <p>Postman simple test of CRUD API built with Node.js and Express for managing <b className='text-[#ffffff]'>shops</b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/shop-api">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
            <div className='flex mb-2 items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={jest} alt="jest" className='w-[40px] rounded-full' />
                    <p>Unit tests with Jest, covering a variety of common  <b className='text-[#ffffff]'>algorithmic problems</b>  and <b className='text-[#ffffff]'> mathematical functions </b></p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaAngleDoubleRight />
                    <a href="https://github.com/simonakom/unit-testing-jest">
                        <b className={`text-sm px-2 py-1 rounded-2xl ${isDarkMode ? 'bg-[#79afdc] text-black' : 'bg-[#3a3a9d] text-white'}`}>Github</b>
                    </a>
                </div>
            </div>
        <hr className={`border-t-1 mt-10 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#26265f]' }`} />
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


