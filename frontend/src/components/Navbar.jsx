import React, { useState } from 'react';
import logo from '../assets/img/logo.png'; // Importing the logo image
import CButton from './Common/CButton';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for menu and close

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full d-flex align-items-center bg-white shadow-md z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 ">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src={logo} alt="DreamFields Logo" className="h-8" />
          <h1 className="text-lg font-semibold">DreamFields</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex  space-x-8 text-black ">
          <ul className="flex space-x-6 lg:items-center">
            <li><a href="#hero" className="hover:text-gray-600">Home</a></li>
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#features" className="hover:text-gray-600">Features</a></li>
            <li><a href="#contact" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-3">
          <CButton text={"login"} link={"/login"} color={true} />
          <CButton text={"signup"} link={"/signup"} color={true} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-2xl text-black cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-start p-4 space-y-4 z-20">
          <ul className="flex flex-col space-y-4 w-full">
            <li><a href="#hero" onClick={toggleMenu} className="w-full text-lg text-gray-800 hover:text-gray-600">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="w-full text-lg text-gray-800 hover:text-gray-600">About</a></li>
            <li><a href="#features" onClick={toggleMenu} className="w-full text-lg text-gray-800 hover:text-gray-600">Features</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="w-full text-lg text-gray-800 hover:text-gray-600">Contact Us</a></li>
          </ul>
          <div className="flex flex-col space-y-3 w-full">
            <CButton text={"login"} link={"/login"} color={true} />
            <CButton text={"signup"} link={"/signup"} color={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
