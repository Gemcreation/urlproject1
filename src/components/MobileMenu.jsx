/**
 * MobileMenu Component
 * 
 * Dropdown menu that appears on mobile devices when hamburger icon is clicked.
 * Displays navigation links and authentication options in vertical layout.
 * 
 * Features:
 * - Styled as a card with dark purple background
 * - Vertical stacked navigation links
 * - Divider between navigation and auth sections
 * - Full-width Sign Up button
 * - Positioned absolutely to appear below navbar
 * 
 * Responsive Behavior:
 * - Only visible on screens < 768px
 * - Styled to overlay content with shadow
 */

import React from 'react';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      <div className="mobile-menu__divider"></div>
      <div className="mobile-menu__auth">
        <a href="#login" className="login-link">Login</a>
        <button className="btn btn--signup-full">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
