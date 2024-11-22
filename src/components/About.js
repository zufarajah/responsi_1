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
            Muhammad Zuhfar Arsalan, seorang programmer yang menggabungkan logika pemrograman dengan desain yang intuitif untuk menciptakan produk digital yang bernilai. 
          </p>
          <p>
            Saya memiliki kemampuan pemecahan masalah yang kuat dan dapat berpikir secara kritis untuk menemukan solusi yang optimal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
