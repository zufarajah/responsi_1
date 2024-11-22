import React from 'react';
import profileImage from '../img/haice.jpeg'; // Image for profile

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-subtitle">A passionate web developer who loves to create!</p>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm a web developer with a passion for creating dynamic and interactive web applications. I specialize in both front-end and back-end development, continuously exploring new technologies to improve my skill set. 
          </p>
          <p>
            I love building websites that are user-friendly, responsive, and efficient. When I'm not coding, you can find me exploring new tech, reading, or collaborating on exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
