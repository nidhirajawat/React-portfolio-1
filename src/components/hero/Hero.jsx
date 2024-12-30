// import React from 'react'
// import './Hero.css'
// // import profile_img from '../../assets/nidhi-black(1).jpeg'
// import profile_img from '../../assets/n4.jpeg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// const Hero = () => {
//   return (
//     <div id='hero' className='hero'>
//         <img src={profile_img} alt="" />
//         <h1><span>I'm Nidhi Rajawat</span>, frontend developer based in India.</h1>
//         <p>I specialize in building user-friendly and visually appealing web applications. I am passionate about coding, design, and creating seamless user experiences.</p>
//         <div className='hero-action'>
//             <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
//             <div className="hero-resume">My resume</div>
//         </div>
//     </div>
//   )
// }

// export default Hero






import React from 'react';
import './Hero.css';
import profile_img from '../../assets/n4.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Nidhi Rajawat</span>, frontend developer based in India.</h1>
      <p>
        I specialize in building user-friendly and visually appealing web applications. 
        I am passionate about coding, design, and creating seamless user experiences.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a 
            href="./nidhirajawat.pdf" 
            download="Nidhi_Rajawat_Resume.pdf" 
            className="resume-link">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
