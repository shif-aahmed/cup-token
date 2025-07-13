import React from 'react';
import '../styles/cards.css';

const openLink = (url) => {
  window.open(url, '_blank');
};

const CryptoCards = () => {
  return (
    <div className="container my-5">
      <div className="card-row-shift">
        {/* Card 1 */}
        <div className="col">
          <div className="card1 card custom-card">
            <img src="https://cdn-icons-png.flaticon.com/512/7341/7341341.png" alt="Airdrop" className="card-icon" />
            <h3 className="fs-5 mb-3">Join the Airdrop</h3>
            <p className="mb-4">Participate in our airdrop and receive free tokens instantly.</p>
            <button 
              className="btn w-100 custom-btn-green" 
              onClick={() => openLink('#airdrop')}
            >
              Join Airdrop
            </button>
          </div>
        </div>

        {/* Card 2 (shifted content) */}
        <div className="col">
          <div className="card2 card custom-card">
            <div className="custom-card-content">
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png" alt="PancakeSwap" className="card-icon" />
              <h3 className="fs-5 mb-3">Buy on PancakeSwap</h3>
              <p className="mb-4">Swap our token easily on PancakeSwap with low fees and high speed.</p>
              <button 
                className="btn w-100 custom-btn-blue" 
                onClick={() => openLink('https://pancakeswap.finance')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card3 card custom-card position-relative">
            <div className="bubbles">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Whitepaper" className="card-icon" />
            <h3 className="fs-5 mb-3">Read the Whitepaper</h3>
            <p className="mb-4">Explore the vision, tokenomics, and roadmap behind our project.</p>
            <button 
              className="btn w-100 custom-btn-purple" 
              onClick={() => openLink('whitepaper.pdf')}
            >
              Read Now
            </button>
          </div>
        </div>

        {/* Card 4 (shifted content) */}
        <div className="col">
          <div className="card4 card custom-card position-relative">
            <div className="custom-card-content">
              <i className="ri-shopping-cart-line fs-1"></i>
              <h3 className="fs-5 mb-0">How to Buy</h3>
              <ul className="list-unstyled text-center mb-0">
                <li>Connect MetaMask</li>
                <li>Import CUP token</li>
                <li>Swap BNB/USDT on PancakeSwap</li>
                <li>Add CUP to Wallet</li>
              </ul>
              <p className='mb-0'>Also earn via <strong>staking</strong> & <strong>giveaway</strong></p>
              <button 
                className="btn w-100 custom-btn-orange" 
                onClick={() => openLink('https://pancakeswap.finance')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCards;
