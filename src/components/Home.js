import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-section">
         {/* Profile Photo */}
      <div className="profile-photo-container">
        <div className="profile-photo"></div>
      </div>

      {/* Home Content */}
      <div className="home-content">
        <h1 className="home-name">Muhammad Zufar Arsalan</h1>
        <p className="home-description">Jangan di senggol sudah wudhu</p>
        <div className="home-button">
          <Link to="/about" className="btn btn-primary">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
