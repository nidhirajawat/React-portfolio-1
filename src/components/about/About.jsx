import React from 'react'
import './about.css'
// import theme_pattern from '../../assets'
import profile_imgages from '../../assets/n2.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_imgages} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Develoer with over a decode of professional experties in the field. Throughout my career.
                    I have had the provolege of collaborating with prestigious organizations,
                    contributing to their sucess and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About