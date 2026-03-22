/**
 * Boost Component
 * 
 * Call-to-action section that encourages users to get started.
 * 
 * Features:
 * - Dark purple background with decorative background image
 * - Centered headline text
 * - Large "Get Started" button
 * - Full-width section
 * 
 * Styling:
 * - Different background images for mobile vs desktop
 * - bg-boost-mobile.svg for mobile devices
 * - bg-boost-desktop.svg for desktop/tablet
 * - Responsive padding and text sizing
 */

import React from 'react';

const Boost = () => {
  return (
    <section className="boost">
      <h2>Boost your links today</h2>
      <button className="btn btn--get-started">Get Started</button>
    </section>
  );
};

export default Boost;
