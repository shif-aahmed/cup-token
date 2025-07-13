import React, { useEffect } from 'react';
import '../styles/info.css';

const CardComponent = () => {
  useEffect(() => {
    // 🎁 Show a random NFT benefit
    const benefits = [
      'VIP platform access',
      'Enhanced staking yields',
      'Collectible status',
      'Early access to beta features',
      'Exclusive NFT holder chats',
    ];
    const random = benefits[Math.floor(Math.random() * benefits.length)];
    const bonusElement = document.getElementById('random-benefit');
    if (bonusElement) {
      bonusElement.textContent = `🎁 Bonus: ${random}`;
    }

    // 💥 Right card jump effect
    const rightCard = document.querySelector('.card-right');
    if (rightCard) {
      rightCard.addEventListener('click', () => {
        rightCard.classList.add('card-jump');
        setTimeout(() => {
          rightCard.classList.remove('card-jump');
        }, 400);
      });
    }

    // 🚀 Left card gradient & jump
    const leftCard = document.querySelector('.card-left');
    if (leftCard) {
      leftCard.addEventListener('click', () => {
        changeColors(leftCard);
        leftCard.classList.add('card-jump');
        setTimeout(() => {
          leftCard.classList.remove('card-jump');
        }, 400);
      });
    }

    // Cleanup on unmount
    return () => {
      if (rightCard) rightCard.replaceWith(rightCard.cloneNode(true));
      if (leftCard) leftCard.replaceWith(leftCard.cloneNode(true));
    };
  }, []);

  // 🎨 Gradient color changer
  const changeColors = (card) => {
    const gradients = [
      ['#f3d9ff', '#cf80ff'],
      ['#ffd6e8', '#ffb6c1'],
      ['#d0f0fd', '#a0e3ff'],
    ];
    const [start, end] = gradients[Math.floor(Math.random() * gradients.length)];
    card.style.background = `linear-gradient(135deg, ${start} 50%, ${end} 50%)`;
  };

  return (
    <div className="card-container">
      {/* Left Card */}
      <div className="card card-left">
        <div className="cup-nft-section">
          <h3>CUP NFTs</h3>
          <p>Own one of only 20 limited-edition NFTs and unlock premium benefits:</p>
          <ul id="nft-benefits">
            <li>VIP platform access</li>
            <li>Enhanced staking yields</li>
            <li>Collectible status</li>
          </ul>
          <p id="random-benefit"></p>
          <p className="nft-note">
            NFTs are earned through staking and referrals — not sold.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="card card-right">
        <h1>Security First</h1>
        <p>
          Built with OpenZeppelin secure standards<br />
          Uses ReentrancyGuard to prevent exploit risks<br />
          Scheduled for third-party audit (Certik/Hacken)
        </p>
        <button className="start-btn">LEARN MORE</button>
        <div className="image-wrapper">
          <img className="character-img" src="src\assets\character.avif" alt="Character" />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
