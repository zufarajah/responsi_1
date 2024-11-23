import React from 'react';
import Navbar from './Navbar';
import igLogo from '../img/ig.png'; // Impor gambar Instagram
import waLogo from '../img/wa.png'; // Impor gambar WhatsApp
import GmailLogo from '../img/Gmail.png';



const Contact = () => {
  return (
    <div className="container my-5 text-center">
      <h2>Contact Me</h2>
      <p className="mb-4">Feel free to reach out through the following platforms!</p>

      {/* Contact Section */}
      <div className="contact-section d-flex justify-content-center align-items-center gap-5">
        {/* Instagram */}
        <div className="contact-item text-center">
          <a
            href="https://www.instagram.com/zufararsa/profilecard/?igsh=ajIybXFvc3JrMjE0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={igLogo}
              alt="Instagram Logo"
              title="Follow me on Instagram"
              className="social-logo"
            />
          </a>
          <p>
            <a
              href="https://www.instagram.com/zufararsa/profilecard/?igsh=ajIybXFvc3JrMjE0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              Follow me
            </a>
          </p>
                
        </div>
 {/* email */}
        <div className="contact-item text-center">
          <a
            href="mailto:zufar.arsalan15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GmailLogo}
              alt="Email Logo"
              title="Follow me on Instagram"
              className="social-logo"
            />
          </a>
          <p>
            <a
              href="mailto:zufar.arsalan15@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              Follow me
            </a>
          </p>
                
        </div>

        {/* WhatsApp */}
        <div className="contact-item text-center">
          <a
            href="https://wa.me/qr/IB2DE7MQ6UGSD1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={waLogo}
              alt="WhatsApp Logo"
              title="Chat with me on WhatsApp"
              className="social-logo"
            />
          </a>
          <p>
            <a
              href="https://wa.me/qr/IB2DE7MQ6UGSD1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
