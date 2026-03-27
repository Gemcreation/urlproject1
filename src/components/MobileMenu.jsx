/* MobileMenu Component, Dropdown menu that appears on mobile devices when hamburger icon is clicked. And doing responsivenesss. Displays navigation links and authentication options in vertical layout.
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
