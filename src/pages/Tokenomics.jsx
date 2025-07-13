// src/components/Tokenomics.jsx
import React, { useEffect } from 'react';
import '../styles/About.css'; // Reusing the same CSS

const Tokenomics = () => {
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
        <h1>CUP Tokenomics</h1>
        <p>
          Transparent, deflationary, and community-focused. CUP Token's economics are designed to ensure long-term growth and sustainability.
        </p>
      </header>

      <section className="about-section">
        <h2>Total Supply</h2>
        <p>
          CUP Token has a total fixed supply of <strong>2 million tokens</strong>. No more will ever be created, making it inherently scarce and valuable.
        </p>
      </section>

      <section className="about-section">
        <h2>Token Allocation</h2>
        <ul>
          <li><strong>Initial Liquidity:</strong> 70%</li>
          <li><strong>Staking Rewards:</strong> 15%</li>
          <li><strong>Team (Locked 1 Year):</strong> 10%</li>
          <li><strong>Community & Airdrops:</strong> 5%</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Fee Structure</h2>
        <ul>
          <li><strong>Buy/Sell Fee:</strong> 0.1%</li>
          <li><strong>Burn Fee:</strong> 0.7% per transaction</li>
        </ul>
        <p>
          Every transaction contributes to the token's scarcity by permanently burning 0.7% of the transferred amount.
        </p>
      </section>

      <section className="about-section">
        <h2>Roadmap (2023)</h2>
        <ul>
          <li><strong>Q1:</strong> Token Launch, Airdrop Campaigns</li>
          <li><strong>Q2:</strong> Staking Platform, NFT Rewards</li>
          <li><strong>Q3:</strong> CoinGecko Listing, Partnerships</li>
          <li><strong>Q4:</strong> Governance Launch, NFT Marketplace</li>
        </ul>
      </section>
    </div>
  );
};

export default Tokenomics;
