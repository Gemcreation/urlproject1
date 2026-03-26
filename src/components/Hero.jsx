/**
 * Hero Component
 * 
 * Landing page hero section with headline, description, and CTA button.
 * 
 * Features:
 * - Two-column layout on desktop (text left, image right)
 * - Single column layout on mobile (image top, text bottom, centered)
 * - Large, attention-grabbing headline text
 * - Descriptive paragraph about the service
 * - "Get Started" call-to-action button
 * 
 * Responsive Behavior:
 * - Mobile (< 768px): Image appears first, centered text, column layout
 * - Desktop (768px+): Image and text side-by-side, text left-aligned
 * 
 * Image:
 * - Uses hero illustration from assets (illustration-working.svg)
 * - Responsive sizing with percentage scaling
 */

import React from 'react';
import workingIllustration from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero__content">
          <h1>
            More than just shorter links
            {/* <br /> */}
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn--get-started">Get Started</button>
        </div>
      </div>
      <div className="hero__image">
        <img src={workingIllustration} alt="Person working on a desk" />
      </div>
    </section>
  );
};

export default Hero;
