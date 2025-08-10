import { FaCode } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { PiTestTubeFill } from "react-icons/pi";


import PropTypes from 'prop-types';
export default function About ({isDarkMode}) {
    return (
        <div className='about' id='about'>
            <div className='space text-justify pt-20 mb-16 px-9 max-w-3xl mx-auto'>
                <div className="mb-1">
                    <p className="text-base leading-relaxed mb-8">Hey! I am <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-70" style={{display: 'inline'}}>Simona</span>, a digital product specialist with experience in QA and full-stack web development. I am passionate about building user-focused digital products that combine great design with seamless functionality and deliver real value to both users and businesses. With a sharp eye for detail and clear communication, I thrive on solving meaningful problems and growing continuously in the field of product development!</p>
                </div>
                
                <div className="mb-12">
                    <p className="text-base leading-relaxed">I aspire toward a career where I can combine my technical skills, business mindset, and detail-oriented approach to drive product development and deliver exceptional user experiences with high-quality standards.</p>
                </div>

                <div className="space-y-8">
                    <div className="gradient-border-left gradient-border-blue pl-6">
                        <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                            <FaCode className="text-xl text-blue-600 dark:text-blue-400" />
                            Technical Skills
                        </h3>
                        <p className="text-base leading-relaxed">I bring proficiency in frontend technologies such as <span className="font-medium text-blue-600 dark:text-blue-400">HTML</span>, <span className="font-medium text-blue-600 dark:text-blue-400">CSS</span>, and <span className="font-medium text-blue-600 dark:text-blue-400">JavaScript</span>, with hands-on experience in <span className="font-medium text-blue-600 dark:text-blue-400">React</span>. I excel at responsive design and translating <span className="font-medium text-blue-600 dark:text-blue-400">Figma</span> designs into pixel-perfect code. Additionally, I have backend experience with <span className="font-medium text-blue-600 dark:text-blue-400">Node.js</span>, enabling me to build robust APIs and full-stack web applications.</p>
                    </div>
                    
                    <div className="gradient-border-left gradient-border-blue pl-6">
                        <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                            <FaListCheck className="text-xl text-blue-600 dark:text-blue-400" />
                            Product Management
                        </h3>
                        <p className="text-base leading-relaxed">With a business-oriented mindset, I support aligning product strategies with <span className="font-medium text-blue-600 dark:text-blue-400">company goals</span> and <span className="font-medium text-blue-600 dark:text-blue-400">user needs</span>. I assist in gathering and prioritizing requirements and collaborate closely with <span className="font-medium text-blue-600 dark:text-blue-400">cross-functional</span> teams to help drive projects from concept to launch, focusing on timely delivery and continuous improvement.</p>
                    </div>
                    
                    <div className="gradient-border-left gradient-border-blue pl-6">
                        <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                            <PiTestTubeFill className="text-xl text-blue-600 dark:text-blue-400" />
                            Quality Assurance
                        </h3>
                        <p className="text-base leading-relaxed">With a detail-oriented approach, I am passionate about ensuring every product meets the highest standards of <span className="font-medium text-blue-600 dark:text-blue-400">functionality</span>, <span className="font-medium text-blue-600 dark:text-blue-400">usability</span>, and <span className="font-medium text-blue-600 dark:text-blue-400">performance</span>. I have experience in manual and automated testing, utilizing tools like <span className="font-medium text-blue-600 dark:text-blue-400">Playwright</span>, <span className="font-medium text-blue-600 dark:text-blue-400">Cypress</span> for end-to-end testing and <span className="font-medium text-blue-600 dark:text-blue-400">Postman</span> for API testing, focusing on identifying and resolving issues to deliver a flawless user experience.</p>
                    </div>
                </div>
                
                <div className="mt-16">
                    <p className="text-base leading-relaxed mb-8 text-left">When I am not at the computer, you will probably find me cycling, exploring new hiking trails, or traveling the world! <span className="animated-magic ml-2 inline-block">🌍</span></p>
                </div>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
About.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
