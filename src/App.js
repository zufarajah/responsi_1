import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import komponen-komponen dari folder components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Navbar akan ditampilkan di semua halaman */}
      <Navbar />
      <Routes>
        {/* Setiap Route akan mengarahkan ke komponen yang sesuai */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
