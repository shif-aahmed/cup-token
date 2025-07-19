import React, { useEffect } from 'react';

import '../styles/About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (

    <div className="about-wrapper">
      <header className="about-hero">
        <h1>About CUP Token</h1>
        <p>
          CUP Token is a revolutionary DeFi asset built on BNB Smart Chain. Designed for long-term
          utility, CUP offers staking rewards, exclusive NFTs, and a deflationary model that empowers holders.
        </p>
      </header>

      <section className="about-section" id="mission">
        <h2>Our Mission</h2>
        <p>
          We aim to empower users by providing a secure, rewarding, and innovative decentralized financial ecosystem.
        </p>
      </section>

      <section className="about-section" id="why">
        <h2>Why Choose CUP</h2>
        <ul>
          <li>Deflationary: 0.7% burn per transaction</li>
          <li>Real staking rewards for holders</li>
          <li>Access to limited NFTs with utility</li>
          <li>Low fees, fast transactions via BNB Smart Chain</li>
        </ul>
      </section>

      <section className="about-section" id="ecosystem">
        <h2>Join Our Ecosystem</h2>
        <p>
          Get involved through staking, referrals, NFT collection, or participating in our airdrops. CUP is designed for community growth and long-term value.
        </p>
      </section>
    </div>

  );
};

export default About;
