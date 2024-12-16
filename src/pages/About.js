// src/pages/About.js

import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Allied Studios is a creative studio that specializes in video production, post-production, and other creative arts activities. 
          We strive to push the boundaries of creativity and deliver high-quality projects tailored to our clients' needs.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to produce compelling and engaging content that resonates with audiences and leaves a lasting impression. 
          We are committed to delivering innovative solutions in every project we undertake, ensuring the highest standards of quality.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We aim to be a leading creative studio, recognized for our excellence in production and entertainment services. 
          Our goal is to bring visionary ideas to life, creating a lasting impact on the media and entertainment industry.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation - We constantly push the boundaries of creativity.</li>
          <li>Quality - We deliver the best in every project.</li>
          <li>Collaboration - We work closely with clients to bring their vision to life.</li>
          <li>Integrity - We uphold the highest ethical standards in all our endeavors.</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
