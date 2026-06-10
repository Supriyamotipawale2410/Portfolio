import React, { useState } from "react";
import './Style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Hamburger Icon for small screens */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>

      <nav>
        {/* Show the nav links based on isMenuOpen */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
