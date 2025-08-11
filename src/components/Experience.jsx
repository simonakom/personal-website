import { IoColorPaletteOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { PiTestTubeFill } from "react-icons/pi";
import { TbDatabaseCog } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { TbReportSearch } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiPaintBrushBold } from "react-icons/pi";
import PropTypes from 'prop-types';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import vite from '../assets/images/vite.png';
import github from '../assets/images/github.jpg';
import tailwind from '../assets/images/tailwind.png';
import bootstrap from '../assets/images/bootstrap.svg';
import figma from '../assets/images/figma.png';
import jira from '../assets/images/jira.svg';
import confluence from '../assets/images/confluence.png';
import node from '../assets/images/node.png';
import mongo from '../assets/images/mongo.png';
import sql from '../assets/images/sql.png';
import postgress from '../assets/images/postgress.png';
import postman from '../assets/images/postman.png';
import cypress from '../assets/images/cypress.jpg';
import swagger from '../assets/images/swagger.png';
import jest from '../assets/images/jest.png';
import apache from '../assets/images/apache.png';
import jenkins from '../assets/images/jenkins.png';
import git from '../assets/images/git.png';
import trello from '../assets/images/trello.png';
import testomat from '../assets/images/testomat.png';
import office from '../assets/images/office.png';
import photoshop from '../assets/images/photoshop.png';
import salesforce from '../assets/images/salesforce.png';
import express from '../assets/images/expressjs.png';
import playwright from '../assets/images/playwright.png';
import qase from '../assets/images/qase.png';
import lovable from '../assets/images/lovable.png';
import cursor from '../assets/images/cursor.png';
import mixpanel from '../assets/images/mixpanel.png';
import sentry from '../assets/images/sentry.png';
import datagrip from '../assets/images/datagrip.png';
import notion from '../assets/images/notion.png';
import algolia from '../assets/images/algolia.svg';
import hotjar from '../assets/images/hotjar.png';
import basedash from '../assets/images/basedash.png';
import devtools from '../assets/images/chrome-devtools.svg';
import slack from '../assets/images/slack.png';

export default function Experience ({isDarkMode}) {
    return (
        <div className='experience' id="experience">
            <div className='px-9 max-w-3xl mx-auto'>
                <p className='my-14 text-xl font-bold'>Technologies I have worked with:</p>
                
                <div className='space-y-8 pb-24'>
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Frontend Development
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={js} alt="js" className='w-[50px] rounded-xl ms-2' />
                            <p className='mt-1 text-sm'><span className="font-light">JavaScript</span></p>
                        </div>
                        <div>
                            <img src={html} alt="html" className='w-[50px] rounded-xl ms-1' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">HTML5</span></p>
                        </div>
                        <div>
                            <img src={css} alt="css" className='w-[50px] rounded-xl' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">CSS3</span></p>
                        </div>
                        <div>
                            <img src={react} alt="react" className='w-[49px] rounded-xl' />
                            <p className='mt-1 ms-1 text-sm'><span className="font-light">React</span></p>
                        </div>
                        <div>
                            <img src={vite} alt="vite" className='w-[49px] rounded-xl' />
                            <p className='mt-1 ms-4 text-sm'><span className="font-light">Vite</span></p>
                        </div>
                        <div>
                            <img src={bootstrap} alt="bootstrap" className='w-[45px] rounded-xl mt-1 ms-2' />
                            <p className='mt-4 text-sm'><span className="font-light">Bootstrap</span></p>
                        </div>
                        <div>
                            <img src={tailwind} alt="tailwind" className='w-[52px] rounded-xl mt-2 ms-1' />
                            <p className='mt-4 text-sm'><span className="font-light">Tailwind</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <FaLaptopCode className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Backend Development
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={node} alt="node" className='w-[47px] rounded-xl ms-1' />
                            <p className='ms-1 mt-2 text-sm'><span className="font-light">Node.js</span></p>
                        </div>
                        <div>
                            <img src={express} alt="express" className='w-[53px] rounded-xl brightness-150 ms-1' />
                            <p className='mt-2 text-sm'><span className="font-light">ExpressJS</span></p>
                        </div>
                        <div>
                            <img src={swagger} alt="swagger" className='w-[49px] rounded-xl mt-1 ms-3' />
                            <p className='mt-2 ms-2 text-sm'><span className="font-light">Swagger</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <PiTestTubeFill className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Testing & Quality Assurance
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={playwright} alt="playwright" className='w-[50px] rounded-xl ms-2' />
                            <p className='mt-2 text-sm'><span className="font-light">Playwright</span></p>
                        </div>
                        <div>
                            <img src={cypress} alt="cypress" className='w-[50px] rounded-xl ms-1' />
                            <p className='mt-2 ms-1 text-sm'><span className="font-light">Cypress</span></p>
                        </div>
                        <div>
                            <img src={postman} alt="postman" className='w-[50px] rounded-xl ms-1' />
                            <p className='mt-2 text-sm'><span className="font-light">Postman</span></p>
                        </div>
                        <div>
                            <img src={jest} alt="jest" className='w-[55px] rounded-xl' />
                            <p className='mt-2 ms-3 text-sm'><span className="font-light">Jest</span></p>
                        </div>
                        <div>
                            <img src={apache} alt="apache" className='w-[32px] rounded-xl ms-4' />
                            <p className='mt-0 text-sm'><span className="font-light">JMeter</span></p>
                        </div>
                        <div>
                            <img src={jenkins} alt="jenkins" className='w-[38px] rounded-xl mt-1' />
                            <p className='mt-1 text-sm'><span className="font-light">Jenkins</span></p>
                        </div>
                        <div>
                            <img src={qase} alt="qase" className='w-[63px] rounded-xl mt-6' />
                            <p className='mt-4 ms-2 text-sm'><span className="font-light">Qase</span></p>
                        </div>
                        <div>
                            <img src={testomat} alt="testomat" className='w-[48px] rounded-xl mt-1 ms-2' />
                            <p className='mt-2 ms-1 text-sm'><span className="font-light">Testomat</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Databases & Data Tools
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={sql} alt="sql" className='w-[52px] rounded-xl mt-2 ms-4' />
                            <p className='ms-5 mt-1 text-sm'><span className="font-light">MySQL</span></p>
                        </div>
                        <div>
                            <img src={postgress} alt="postgress" className='w-[50px] rounded-xl mt-2 ms-3' />
                            <p className='mt-1 ms-1 text-sm'><span className="font-light">PostgreSQL</span></p>
                        </div>
                        <div>
                            <img src={mongo} alt="mongo" className='w-[52px] rounded-xl mt-1 ms-3' />
                            <p className='mt-2 ms-2 text-sm'><span className="font-light">MongoDB</span></p>
                        </div>
                        <div>
                            <img src={datagrip} alt="datagrip" className='w-[52px] rounded-xl ms-1 mt-2' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">Datagrip</span></p>
                        </div>
                        <div>
                            <img src={basedash} alt="basedash" className='w-[52px] rounded-xl ms-3 mt-2' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">Basedash</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Development Tools
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={git} alt="git" className='w-[52px] rounded-xl' />
                            <p className='mt-2 ms-5 text-sm'><span className="font-light">Git</span></p>
                        </div>
                        <div>
                            <img src={github} alt="github" className='w-[50px] rounded-xl' />
                            <p className='mt-3 ms-1 text-sm'><span className="font-light">GitHub</span></p>
                        </div>
                        <div>
                            <img src={devtools} alt="devtools" className='w-[48px] rounded-xl ms-1' />
                            <p className='mt-3 text-sm'><span className="font-light">DevTools</span></p>
                        </div>
                        <div>
                            <img src={cursor} alt="cursor" className='w-[51px] rounded-xl' />
                            <p className='mt-2 ms-2 text-sm'><span className="font-light">Cursor</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Project Management
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={jira} alt="jira" className='h-[51px] rounded-xl ms-2 mt-1' />
                            <p className='ms-5 mt-1 text-sm'><span className="font-light">Jira</span></p>
                        </div>
                        <div>
                            <img src={confluence} alt="confluence" className='w-[44px] rounded-xl m-2 ms-4' />
                            <p className='mt-2 text-sm'><span className="font-light">Confluence</span></p>
                        </div>
                        <div>
                            <img src={notion} alt="notion" className='w-[50px] rounded-xl mt-1 ms-2' />
                            <p className='mt-1 ms-3 text-sm'><span className="font-light">Notion</span></p>
                        </div>
                        <div>
                            <img src={trello} alt="trello" className='w-[50px] rounded-xl ms-1 mt-1' />
                            <p className='ms-3 mt-1 text-sm'><span className="font-light">Trello</span></p>
                        </div>
                        <div>
                            <img src={slack} alt="slack" className='w-[50px] rounded-xl mt-1' />
                            <p className='mt-1 ms-1 text-sm'><span className="font-light">Slack</span></p>
                        </div>
                        <div>
                            <img src={office} alt="office" className='w-[50px] rounded-xl mt-3' />
                            <p className='mt-5 text-sm'><span className="font-light">MS Office</span></p>
                        </div>
                        <div>
                            <img src={salesforce} alt="office" className='w-[50px] rounded-xl mt-2' />
                            <p className='mt-3 text-sm'><span className="font-light">SalesForce</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Analytics
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={mixpanel} alt="mixpanel" className='w-[50px] rounded-xl ms-1' />
                            <p className='mt-1 text-sm'><span className="font-light">Mixpanel</span></p>
                        </div>
                        <div>
                            <img src={sentry} alt="sentry" className='w-[50px] rounded-xl ms-1' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">Sentry</span></p>
                        </div>
                        <div>
                            <img src={hotjar} alt="hotjar" className='w-[50px] rounded-xl' />
                            <p className='mt-1 ms-2 text-sm'><span className="font-light">Hotjar</span></p>
                        </div>
                        <div>
                            <img src={algolia} alt="algolia" className='w-[57px] rounded-xl mt-4' />
                            <p className='mt-6 ms-2 text-sm'><span className="font-light">Algolia</span></p>
                        </div>
                    </div>
                </div>

                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/50 border border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
                        <IoColorPaletteOutline className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-black'}`} />
                        Design
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                        <div>
                            <img src={figma} alt="figma" className='w-[33px] rounded-xl ms-2' />
                            <p className='mt-1 text-sm'><span className="font-light">Figma</span></p>
                        </div><div>
                            <img src={lovable} alt="lovable" className='h-[50px] w-[50px] rounded-xl' />
                            <p className='mt-1 text-sm'><span className="font-light">Lovable</span></p>
                        </div>
                        <div>
                            <img src={photoshop} alt="photoshop" className='w-[52px] rounded-xl' />
                            <p className='mt-1 text-sm'><span className="font-light">Photoshop</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
Experience.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

