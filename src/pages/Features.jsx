// src/components/Features.jsx
import React, { useEffect } from 'react';
import '../styles/About.css'; // Using the same CSS

const Features = () => {
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
        <h1>CUP Token Features</h1>
        <p>
          Explore the powerful features that make CUP Token a unique, high-utility DeFi asset built on BNB Smart Chain.
        </p>
      </header>

      <section className="about-section">
        <h2>Deflationary Model</h2>
        <p>
          Every transaction burns 0.7% of CUP tokens permanently, reducing the total supply over time and increasing scarcity. This makes CUP more valuable the more it is used.
        </p>
      </section>

      <section className="about-section">
        <h2>Staking Rewards</h2>
        <p>
          Stake your CUP tokens to earn passive income. Rewards are distributed fairly and encourage long-term holding rather than speculation.
        </p>
      </section>

      <section className="about-section">
        <h2>NFT Utility</h2>
        <p>
          CUP NFTs are not just collectibles — they unlock platform perks, enhanced staking yields, and access to exclusive events and features.
        </p>
      </section>

      <section className="about-section">
        <h2>Built on BNB Smart Chain</h2>
        <p>
          CUP leverages the speed, security, and low fees of BNB Smart Chain to ensure fast and cost-efficient transactions for all users.
        </p>
      </section>

      <section className="about-section">
        <h2>Community Driven</h2>
        <p>
          From governance to reward structures, the CUP ecosystem is designed to grow with its holders. Future decisions will be guided by the community.
        </p>
      </section>
    </div>
  );
};

export default Features;
