import PropTypes from 'prop-types';
export default function About ({isDarkMode}) {
    return (
        <div className='about' id='about'>
            <div className='space text-justify pt-24 mb-16 px-10'>
                <p>Hello there! My name is <b className="font-bold">Simona</b> and I am design-minded, detail-oriented front-end and QA engineer with a passion for creating visually captivating and seamlessly functional interfaces. Eager to contribute and grow in the world of <b className="font-bold"> web development</b> and <b className="font-bold">quality assurance </b>!</p><br />
                <p>I aspire toward a career where I can leverage my creativity to design captivating software and immersive user experiences while ensuring the highest standards of quality. I bring proficiency in essential frontend technologies, including <b className="font-bold">HTML5, CSS3, and JavaScript,</b> along with hands-on experience in popular frameworks such as <b className="font-bold">React</b>. I am comfortable working with <b className="font-bold">responsive design</b> principles and I excel at translating <b className="font-bold">Figma</b> designs into high-quality, pixel-perfect, HTML, CSS, and JavaScript code.</p><br />
                <p>As a <b className="font-bold">QA </b>engineer, I am equally passionate about ensuring that every product I work on meets the highest standards of <b className="font-bold">functionality, usability </b>and <b className="font-bold">performance.</b> I have experience in both manual and automated testing, utilizing tools such as <b className="font-bold">Cypress </b> for end-to-end testing and <b className="font-bold">Postman/Newman </b> for API testing, 
                
                
    focusing on identifying and resolving issues to deliver a flawless user experience.</p><br />
                <p>When I am not at the computer, you will probably find me cycling, exploring new hiking trails, diving headfirst into a captivating book, or traveling the world!</p>
            </div>
            <hr className={`border-t-1 ${isDarkMode ? 'border-[#cbd5e7]' : 'border-[#26265f]' }`} />
        </div>
    )
}
About.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
