import React from 'react';
import CV from '../img/cv.pdf';

const Resume = () => {
  return (
    <div className="container my-5">
      <h2>Resume</h2>
      <a href={CV} download className="btn btn-primary my-4 shadow-sm">
        Download CV
      </a>
    </div>
  );
};

export default Resume;
