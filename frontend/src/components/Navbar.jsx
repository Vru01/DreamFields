import React from 'react';
import logo from '../assets/img/logo.png'; // Importing the logo image

const Navbar = () => {
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#hero" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="DreamFields Logo" className="img-fluid" /> {/* Use the imported logo */}
          <h1 className="sitename">DreamFields</h1>
        </a>
        <nav className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
};

export default Navbar;
