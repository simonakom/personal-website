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
import postman from '../assets/images/postman.png';
import office from '../assets/images/office.png';
import photoshop from '../assets/images/photoshop.png';
import salesforce from '../assets/images/salesforce.png';

export default function Experience ({isDarkMode}) {
    return (
        <div className='experience' id="experience">
            <p className='my-16 ms-10 text-lg'>Some <b className="font-bold">technologies</b> I&apos;ve worked with:</p>
            <div className='text-justify pb-24 px-10 ms-5 grid grid-cols-3 gap-6'>
                <div>
                    <img src={js} alt="js" className='w-[60px] rounded-xl' />
                    <p className='mt-1'>JavaScript</p>
                </div>
                <div>
                    <img src={html} alt="html" className='w-[60px] rounded-xl' />
                    <p className='mt-1 ms-2'>HTML5</p>
                </div>
                <div>
                    <img src={css} alt="css" className='w-[60px] rounded-xl' />
                    <p className='mt-1 ms-2'>CCS3</p>
                </div>
                <div>
                    <img src={react} alt="react" className='w-[60px] rounded-xl' />
                    <p className='mt-1 ms-2'>React</p>
                </div>
                <div>
                    <img src={vite} alt="vite" className='w-[60px] rounded-xl' />
                    <p className='mt-1 ms-5'>Vite</p>
                </div>
                <div>
                    <img src={github} alt="github" className='w-[60px] rounded-xl' />
                    <p className='mt-1 ms-1'>GitHub</p>
                </div>
                <div>
                    <img src={bootstrap} alt="bootstrap" className='w-[60px] rounded-xl mt-4' />
                    <p className='mt-4'>Bootstrap</p>
                </div>
                <div>
                    <img src={tailwind} alt="tailwind" className='w-[60px] rounded-xl mt-5' />
                    <p className='mt-6'>Tailwind</p>
                </div>
                <div>
                    <img src={figma} alt="figma" className='w-[50px] rounded-xl' />
                    <p className='mt-1 ms-2'>Figma</p>
                </div>
                <div>
                    <img src={node} alt="node" className='w-[60px] rounded-xl' />
                    <p className='ms-1 mt-1'>Node.js</p>
                </div>
                <div>
                    <img src={sql} alt="sql" className='w-[60px] rounded-xl mt-2' />
                    <p className='ms-2 mt-1'>MySql</p>
                </div>
                <div>
                    <img src={mongo} alt="mongo" className='w-[60px] rounded-xl mt-1' />
                    <p className='mt-2'>Mondo DB</p>
                </div>
                <div>
                    <img src={postman} alt="postman" className='w-[60px] rounded-xl' />
                    <p className='mt-2'>Postman</p>
                </div>
                <div>
                    <img src={jira} alt="jira" className='h-[55px] w-[60px] rounded-xl' />
                    <p className='ms-5 mt-2'>Jira</p>
                </div>
                <div>
                    <img src={confluence} alt="confluence" className='w-[55px] rounded-xl mt-1' />
                    <p className='mt-2'>Confluence</p>
                </div>
                <div>
                    <img src={office} alt="office" className='w-[50px] rounded-xl mt-3' />
                    <p className='mt-4'>MS package</p>
                </div>
                <div>
                    <img src={photoshop} alt="photoshop" className='w-[50px] rounded-xl' />
                    <p className='mt-1'>Photoshop</p>
                </div>
                <div>
                    <img src={salesforce} alt="salesforce" className='w-[50px] rounded-xl mt-2' />
                    <p className='mt-2'>SalesForce</p>
                </div>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#26265f]' }`} />
        </div>
    )
}
Experience.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

