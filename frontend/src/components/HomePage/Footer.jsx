import React from 'react';
import '../Style/main.css'; 

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="footer-description">
          <h4>DreamFields - Career Guidance Counseling</h4>
          <p>Your trusted partner in discovering the right career path. Our platform offers personalized career advice to help you make informed decisions for a successful future.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Our Features</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2024 DreamFields. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
