import PropTypes from 'prop-types';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import jest from '../assets/images/jest.png';
import postman from '../assets/images/postman.png';
import cypress from '../assets/images/cypress.jpg';
import './Projects.css';

export default function Projects({isDarkMode}) {
    const qaProjects = [
        {
            title: "E-Shop API Automation",
            description: "Automated API tests (scripts) with Postman integrated into CI pipeline",
            icon: postman,
            githubUrl: "https://github.com/simonakom/automationExcercise-postman-api-test"
        },
        {
            title: "E-Shop UI Automation",
            description: "End-to-end UI tests with Cypress integrated into CI pipeline",
            icon: cypress,
            githubUrl: "https://github.com/simonakom/automationExcercise-cypress-test"
        },
        {
            title: "To-Do App UI Automation",
            description: "End-to-end UI tests with Cypress integrated into CI pipeline",
            icon: cypress,
            githubUrl: "https://github.com/simonakom/todo-app-testing"
        },
        {
            title: "Registration Form Testing",
            description: "Validated a multi-step registration form using Cypress tests with custom commands and functions",
            icon: cypress,
            githubUrl: "https://github.com/simonakom/registration-form-list"
        },
        {
            title: "Movies & Actors API (PostgreSQL) Testing",
            description: "Node.js API with PostgreSQL storage, CRUD operations, and automated Postman/Newman tests",
            icon: postman,
            githubUrl: "https://github.com/simonakom/movie-actor-api-postgreeDB"
        },
        {
            title: "Movies & Actors API (In-Memory) Testing",
            description: "Node.js API with in-memory storage and Postman tests for CRUD functionality",
            icon: postman,
            githubUrl: "https://github.com/simonakom/movie-actor-api"
        },
        {
            title: "Shop & Items API Testing",
            description: "CRUD operations testing with Postman",
            icon: postman,
            githubUrl: "https://github.com/simonakom/shop-api"
        },
        {
            title: "Algorithm & Math Unit Tests",
            description: "Unit tests for algorithms and math functions",
            icon: jest,
            githubUrl: "https://github.com/simonakom/unit-testing-jest"
        }
    ];

    return (
        <div className='qaprojects' id="qaprojects">
            <div className='max-w-3xl mx-auto px-14 sm:px-10 md:px-10 lg:px-5'>
                <div className='mb-10'>
                    <p className={`mt-14 mb-3 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>QA Projects</p>
                    <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Quality assurance projects showcasing automated testing expertise across various technologies:</p>
                </div>
                
                <div className='grid gap-4'>
                    {qaProjects.map((project, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-xl border transition-all duration-500 hover:shadow-lg hover:scale-[1.01] ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' : 'bg-white/80 border-gray-200 hover:border-blue-400/50 shadow-md'}`}>
                            <div className='px-4 py-3'>
                                {/* Content and Button Container */}
                                <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-center xl:flex-row xl:items-center xl:justify-between'>
                                    {/* Technology Icon and Content */}
                                    <div className='flex items-center gap-4 flex-1 w-full'>
                                        {/* Technology Icon */}
                                        <div className={`flex-shrink-0 p-2 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
                                            <img 
                                                src={project.icon} 
                                                alt="technology icon" 
                                                className='w-8 h-8 rounded-lg' 
                                            />
                                        </div>
                                        
                                        {/* Project Content */}
                                        <div className='flex-1 min-w-0'>
                                            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {project.title}
                                            </h3>
                                            
                                            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* View Code Button - Bottom center on small screens, below content from 1024px-1279px (centered), right side for other sizes */}
                                    <div className='flex-shrink-0 flex items-center justify-center min-w-[120px] lg:min-w-[140px] lg:mt-3 xl:mt-0'>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 hover:border-gray-500 group-hover:bg-blue-600/20 group-hover:text-white group-hover:border-blue-500/40 hover:!bg-blue-600/60 hover:!text-white hover:!border-blue-500/50 hover:!shadow-lg hover:!shadow-blue-500/15' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 hover:border-gray-400 group-hover:bg-blue-100/60 group-hover:text-gray-800 group-hover:border-blue-300/60 hover:!bg-blue-300/40 hover:!text-gray-700 hover:!border-blue-400/30 hover:!shadow-lg hover:!shadow-blue-300/10'}`}
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
            </div>
            <hr className={`border-t-1 mt-14 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};


