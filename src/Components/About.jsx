
import React from 'react';
import './About.css';
import binitImage from './binit.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="left-section">
        {/* Photo of yourself */}
        <div className="photo">
          <img src={binitImage} alt="Binit Kumar Jha" />
        </div>

        {/* Education Background */}
        <div className="education-background">
          <h2 className="education-heading">Education</h2>
          <p className="education-details">
            B.Tech in Computer Science and Engineering<br />
            Maulana Abul Kalam Azad University of Technology, West Bengal (2021-2025)
          </p>
          <p className="education-details">
            12th Grade - [MLSM College Darbhanga]
          </p>
          <p className="education-details">
            10th Grade - [+2 B.K.S High School]
          </p>
        </div>
      </div>

      {/* About me section */}
      <div className="right-section">
        <h1 className="heading">About Me</h1>
        <p className="about">
          Hello, I'm Binit Kumar Jha, a dedicated Computer Science and Engineering student currently in my 4th year at Maulana Abul Kalam Azad University of Technology, West Bengal. I am passionate about turning innovative ideas into reality through technology. My strong suit lies in data structures and algorithms, 
          and I'm always eager to expand my knowledge and take on new challenges in the world of computer science. 
          Feel free to connect with me to discuss opportunities or collaborate on exciting projects.
        </p>
      </div>

      {/* Background image */}
      <div className="background-image">
        <img src="[your background image URL]" alt="Background Image" />
      </div>
    </div>
  );
};

export default About;
