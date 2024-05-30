import PropTypes from 'prop-types';
export default function About ({isDarkMode}) {
    return (
        <div className='about' id='about'>
            <div className='space text-justify pt-24 mb-16 px-10'>
                <p>Hello there! My name is <b className="font-bold">Simona</b> and I&apos;m design-minded, detail oriented  front-end developer with a passion for creating visually captivating and seamlessly functional interfaces. Eager to contribute and grow in the world of <b className="font-bold"> web development!</b></p><br />
                <p>I aspire toward a career where I can leverage my creativity to design captivating software and immersive user experiences. I bring proficiency in essential frontend technologies, including <b className="font-bold">HTML5, CSS3, and JavaScript,</b> along with hands-on experience in popular frameworks such as <b className="font-bold">React.js</b>. I&apos;m comfortable working with <b className="font-bold">responsive design</b> principles and implementing <b className="font-bold">UI/UX  </b>best practices to deliver engaging user experiences. Additionally, I excel at translating <b className="font-bold">Figma</b> designs into high-quality, responsive, pixel-perfect, HTML, CSS, and JavaScript code.</p><br />
                <p>When Im not at the computer, you&apos;ll probably find me cycling, exploring new hiking trails, diving headfirst into a captivating book, or traveling the world!</p>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#26265f]' }`} />
        </div>
    )
}
About.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
