import '../styles/Footer.css';
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaReddit,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer bg-white text-dark pb-4 pt-5">
      <div className="container">
        <div className="row">
          <hr className="mt-0" />
          
          {/* LOGO */}
          <div className="col-md-3 mb-4 d-flex align-items-start mt-3">
            <img src={logo} alt="CUP Token Logo" height="40" className="mb-3" />
          </div>

          {/* Footer Links */}
          <div className="col-md-9 text-start">
            <div className="row g-4 mt-1">
              
              {/* Explore */}
              <div className="col-6 col-md-4">
                <h5 className="fw-bold mb-3">Explore</h5>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About</li>
                  <li>Tokenomics</li>
                  <li>Roadmap</li>
                  <li>NFTs</li>
                  <li>How to Buy</li>
                  <li>Whitepaper</li>
                </ul>
              </div>

              {/* Earn & Use */}
              <div className="col-6 col-md-4">
                <h5 className="fw-bold mb-3">Earn & Use</h5>
                <ul className="list-unstyled">
                  <li>Staking</li>
                  <li>Referral Program</li>
                  <li>Buy on PancakeSwap</li>
                  <li>Airdrop</li>
                  <li>Wallet Integration</li>
                </ul>
              </div>

              {/* Support */}
              <div className="col-6 col-md-4">
                <h5 className="fw-bold mb-3">Support</h5>
                <ul className="list-unstyled">
                  <li>Security</li>
                  <li>FAQ</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Language & Social */}
        <div className="footer-bottom mt-4">
          <div className="d-flex flex-column align-items-start">
            <p className="mb-2 mb-md-0 text-black small fw-semibold">
              🌐 English (UK)
            </p>
            <div className="social-icons d-flex flex-wrap justify-content-start gap-2 mt-4">
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaDiscord />
              <FaReddit />
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-legal mt-3 small">
          <p className="mb-0 text-start">
            <a href="#" className="me-3 text-black small">CUP Token</a>
            <a href="#" className="me-3 text-black small">Privacy Policy</a>
            <a href="#" className="me-3 text-black small">Terms of Use</a>
            <a href="#" className="me-3 text-black small">Accessibility</a>
            <a href="#" className="me-3 text-black small">Sitemap</a>
          </p>
          <p className="mb-0 mt-2 text-end small text-muted">
            &copy; {new Date().getFullYear()} CUP Token. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
