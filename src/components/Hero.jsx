/* Hero Component */
//what to do
// text content and image content. Tetx at the elft while image at the right.

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
