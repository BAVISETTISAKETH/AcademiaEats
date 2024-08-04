// src/components/Footer.js
import React from 'react';
import '../assets/styles/Footer.css'; // Corrected import path
import instagramIcon from '../assets/images/instagram.png';
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
