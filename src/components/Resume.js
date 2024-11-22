import React from 'react';
import CV from '../img/cv.pdf';
import CVpict from '../img/cvv.png';

const Resume = () => {
  return (
    <div className="container my-5">
      <h2>Resume</h2>
      <a href={CV} download className="btn btn-primary my-4 shadow-sm">
        Download CV
      </a>
      <img src={CVpict} alt="CVpict" className="img-fluid" />
    </div>
  );
};

export default Resume;
