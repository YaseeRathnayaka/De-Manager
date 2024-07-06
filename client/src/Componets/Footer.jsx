import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.png" alt="BMW Logo" className="logo-image" />
          <p>All rights reserved by BMW motors pvt(Ltd)</p>
        </div>
        <div className="footer-info">
          <h3>Find us</h3>
          <p>100, Hyde Park Corner, Colombo 2.<br />Sri Lanka</p>
          <p>+94 11 4797200</p>
          <a href="mailto:web@unitedmotors.lk">web@unitedmotors.lk</a>
          <p>Follow us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon"><FaFacebook /></a>
            <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com" className="social-icon"><FaLinkedin /></a>
            <a href="https://www.youtube.com" className="social-icon"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
