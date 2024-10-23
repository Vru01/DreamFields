import React from 'react';
import logo from '../assets/img/logo.png'; // Importing the logo image
import CButton from './Common/CButton';

const Navbar = () => {
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        
        <a href="#hero" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="DreamFields Logo" className="img-fluid" /> {/* Use the imported logo */}
          <h1 className="sitename">DreamFields</h1>
        </a>
        <nav className="navmenu text-black">
          <ul>
            <li><a href="#hero" className="">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a className="btn-getstarted" href="#about">Get Started</a>
        <div className='p-1 space-x-3 ml-3 mr-0'> {/* Add a left margin class here */}
          <CButton text={"login"} link={"/login"} color={true} />
          <CButton text={"signup"} link={"/signup"} color={true} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;