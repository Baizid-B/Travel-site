import { Helmet } from 'react-helmet';
import myImg from '../../assets/About_Photo/banner.png'
import mySignature from '../../assets/BaizidSignaturePNG/signature.png'

const AboutUs = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>
                        Travel | About Us
                    </title>
                </Helmet>
            </div>

            <div className='max-w-screen-xl mx-auto p-4 mb-16'>
                {/* heading text */}
                <div className='flex justify-start items-center gap-0.5 my-10'>
                    <h1 className='text-2xl font-medium'>About Us</h1>
                    <div className='w-12 h-[1px] bg-black mt-1.5'></div>
                </div>

                {/* Main-Content */}
                <div className='flex items-start gap-28 border p-8 shadow-lg hover:'>
                    <div className=''>
                        <figure className='w-[400px] overflow-hidden'>
                            <img className='overflow-hidden duration-700 hover:scale-110' src={myImg} alt="About Image" />
                        </figure>
                        <figure>
                            <img className='w-14' src={mySignature} alt="" />
                        </figure>
                    </div>

                    <div className='space-y-6'>
                       <div>
                            <h1 className='text-3xl font-bold'>Baizid Bostami,</h1>
                            <p className='font-light'>front-End Developer</p>
                       </div>
                        <p className='leading-relaxed text-lg'>A passionate and detail-oriented Front-End Developer with a strong focus on creating responsive, user-friendly, and visually appealing web applications. Skilled in modern technologies such as HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, and DaisyUI, with a keen eye for design and usability. Experienced in translating UI/UX wireframes into high-quality code, optimizing performance, and ensuring cross-browser compatibility. Dedicated to delivering seamless user experiences while collaborating effectively with back-end developers, designers, and stakeholders to bring ideas to life. Always eager to learn and adapt to new trends, tools, and best practices in the rapidly evolving front-end ecosystem.</p>
                        <div className='flex justify-between item-center'>
                           
                            {/* Experience*/}
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Experience -</p>
                                <p className='font-medium'>Softvence Agency</p>
                                <p><span className='font-semibold'>1+</span> Years</p>
                            </div>

                            {/* Education */}
                            <div className='space-y-2'>
                                <p className='text-xl font-semibold'>Education -</p>
                                <p className='font-medium'>World University of Bangladesh</p>
                                <p>Subject: Computer science and Engineering</p>
                                <p>CGPA: <span className='font-semibold'>Running</span></p>
                            </div>

                             {/* skills */}
                            <div>
                                <p className='text-xl font-semibold'>Skills -</p>
                                    <ol class="list-decimal ml-3 ">
                                        <li>HTML 5</li>
                                        <li>CSS 3</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>TailwindCSS</li>
                                        <li>DaisyUI</li>
                                        <li>Node JS</li>
                                        <li>MongoDB</li>
                                        <li>Express JS</li>
                                        <li>Next JS</li>
                                        <li>Git/Github</li>
                                    </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;

