import PropTypes from 'prop-types';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdAutoFixHigh } from "react-icons/md";

export default function Skills ({isDarkMode}) {
    return (
        <div className='skills' id="skills">
            <div className='px-9 max-w-3xl mx-auto'>
                <p className='mt-14 mb-10 text-xl font-bold'>Skills</p>
                <div className='text-justify flex flex-col gap-5 pb-14'>
                    
                <div className="gradient-border-left gradient-border-blue pl-6">
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                        <BsRocketTakeoff className="text-xl text-blue-600 dark:text-blue-400" />
                        Quick learner
                    </h3>
                    <p className="text-base leading-relaxed">In fast-paced environments, I swiftly grasp new concepts, tools, and technologies, enabling me to adapt and contribute effectively to the team&apos;s objectives. My ability to rapidly acquire knowledge empowers me to tackle challenges head-on and continuously innovate within projects.</p>
                </div>
                <div className="gradient-border-left gradient-border-blue pl-6">
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                        <FaHandshakeAngle className="text-xl text-blue-600 dark:text-blue-400" />
                        Team player
                    </h3>
                    <p className="text-base leading-relaxed">I excel at fostering strong teamwork by integrating diverse skills, encouraging open communication, and aligning goals, thereby creating synergy within the group. Through effective delegation, active listening, and creating a supportive atmosphere, I aim to enhance collective achievements.</p>
                </div>
                <div className="gradient-border-left gradient-border-blue pl-6">
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                        <MdAutoFixHigh className="text-xl text-blue-600 dark:text-blue-400" />
                        Positive mind
                    </h3>
                    <p className="text-base leading-relaxed">I approach challenges with optimism, turning them into opportunities for growth. With a positive mindset, I solve problems adeptly, leveraging creative solutions to overcome obstacles and drive progress within the team.</p>
                </div>
                <div className="gradient-border-left gradient-border-blue pl-6">
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                        <MdOutlineScreenSearchDesktop className="text-xl text-blue-600 dark:text-blue-400" />
                        Search wizard
                    </h3>
                    <p className="text-base leading-relaxed">My proficiency in retrieving information from the depths of the internet resembles a finely honed skill. Whether it involves locating a specific code snippet or accessing comprehensive documentation, I can swiftly locate what&apos;s needed to accomplish tasks accurately and promptly.</p>
                </div>
                </div>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#878788]' }`} />
        </div>
    )
}
Skills.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};