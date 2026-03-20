import React from 'react';
import workingIllustration from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="btn btn--get-started">Get Started</button>
      </div>
      <div className="hero__image">
        <img src={workingIllustration} alt="Person working at a desk" />
      </div>
    </section>
  );
};

export default Hero;
