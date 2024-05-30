import PropTypes from 'prop-types';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdAutoFixHigh } from "react-icons/md";

export default function Skills ({isDarkMode}) {
    return (
        <div className='skills' id="skills">
            <hr />
            <p className='mt-16 mb-10 ms-10 text-lg font-bold'>Skills:</p>
            <div className='text-justify flex flex-col gap-5 pb-20 px-10'>
                <div className="flex gap-5">
                    <div className="text-5xl mt-10"><BsRocketTakeoff /></div>
                    <div><b className="font-bold">Quick learner: </b>In fast-paced environments, I swiftly grasp new concepts, tools, and technologies, enabling me to adapt and contribute effectively to the team&apos;s objectives. My ability to rapidly acquire knowledge empowers me to tackle challenges head-on and continuously innovate within projects.</div>
                </div>
                <div className="flex gap-5">
                    <div className="text-5xl mt-10"><FaHandshakeAngle /></div>
                    <div><b className="font-bold">Team player:</b> I excel at fostering strong teamwork by integrating diverse skills, encouraging open communication, and aligning goals, thereby creating synergy within the group. Through effective delegation, active listening, and creating a supportive atmosphere, I aim to enhance collective achievements.</div>
                </div>
                <div className="flex gap-5">
                    <div className="text-5xl mt-10"><MdAutoFixHigh /></div>
                    <div><b className="font-bold">Positive mind: </b>I approach challenges with optimism, turning them into opportunities for growth. With a positive mindset, I solve problems adeptly, leveraging creative solutions to overcome obstacles and drive progress within the team.</div>
                </div>
                <div className="flex gap-5 ">
                    <div className="text-5xl mt-10"><MdOutlineScreenSearchDesktop/></div>
                    <div><b className="font-bold">Search wizard:</b> My proficiency in retrieving information from the depths of the internet resembles a finely honed skill. Whether it involves locating a specific code snippet or accessing comprehensive documentation, I can swiftly locate what&apos;s needed to accomplish tasks accurately and promptly.</div>
                </div>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#26265f]' }`} />
        </div>
    )
}
Skills.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};