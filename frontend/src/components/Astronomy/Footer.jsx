import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="p-6 bg-black text-gray-400">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h4 className="text-xl font-bold text-white">DreamFields</h4>
        <p className="text-sm">Empowering students through knowledge and exploration.</p>
      </div>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About Us</Link>
        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </nav>
      <div className="text-sm mt-4 md:mt-0">
        &copy; 2024 DreamFields. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
