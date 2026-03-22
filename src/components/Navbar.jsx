/**
 * Navbar Component
 * 
 * Responsive navigation bar that displays:
 * - Desktop: Logo + Navigation links + Auth buttons
 * - Mobile: Logo + Hamburger menu icon (opens mobile menu)
 * 
 * Features:
 * - Responsive design using CSS media queries (768px breakpoint)
 * - Mobile menu toggle functionality
 * - Clean, semantic HTML structure
 */

import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle mobile menu open/closed
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="Shortly Logo" />
      </div>
      
      {/* Desktop Menu */}
      <div className="navbar__desktop-menu">
        <ul className="navbar__links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
        <div className="navbar__auth">
          <a href="#login" className="login-link">Login</a>
          <button className="btn btn--signup">Sign Up</button>
        </div>
      </div>

      {/* Mobile Hamburger/Close Icon */}
      <div 
        className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
