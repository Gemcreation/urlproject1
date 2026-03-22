/**
 * Footer Component
 * 
 * Website footer with branding, navigation links, and social media.
 * 
 * Features:
 * - Logo on the left (white filtered)
 * - Three columns of navigation links:
 *   1. Features (Link Shortening, Branded Links, Analytics)
 *   2. Resources (Blog, Developers, Support)
 *   3. Company (About, Our Team, Careers, Contact)
 * - Social media icons (Facebook, Twitter, Pinterest, Instagram)
 * - Very dark background for contrast
 * 
 * Responsive Behavior:
 * - Mobile (< 768px): Centered stacked layout, single column
 * - Desktop (768px+): Row layout with logo left, links center, socials right
 * 
 * Styling:
 * - White text/elements on dark background
 * - Logo uses CSS filter for white color effect
 * - Hover effects on links (change to cyan) and social icons
 * - Smooth transitions for hover states
 */

import React from 'react';
import logo from '../assets/images/logo.svg';
import faceBookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__logo">
          {/* Apply CSS filter to make logo white as required in design */}
          <img src={logo} alt="Shortly Logo" className="logo-white" />
        </div>
        
        <div className="footer__links">
          <div className="footer__column">
            <h4>Features</h4>
            <ul>
              <li><a href="#link-shortening">Link Shortening</a></li>
              <li><a href="#branded-links">Branded Links</a></li>
              <li><a href="#analytics">Analytics</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#developers">Developers</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#our-team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__socials">
          <a href="#facebook"><img src={faceBookIcon} alt="Facebook" /></a>
          <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#pinterest"><img src={pinterestIcon} alt="Pinterest" /></a>
          <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
