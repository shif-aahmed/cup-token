import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import CryptoCards from './cards';
import CardComponent from '../components/info';
import '../styles/HeroSection.css';

function HeroSection() {
  const [showHeroContainer, setShowHeroContainer] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const footerRef = useRef(null);

  const isMobile = window.innerWidth < 1201;

  useEffect(() => {
    AOS.init({ duration: 7000 });

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Scale values
      const shrinkScale = Math.max(0.2, 1 - scrollY / 1000);
      document.documentElement.style.setProperty('--gif-scale', shrinkScale);
      const headingScale = Math.max(0.1, 1 - scrollY / 1400);
      document.documentElement.style.setProperty('--heading-scale', headingScale);

      setShowHeroContainer(scrollY >= 300);

      // Show the gif only when scrollY reaches 40% of screen height
      if (scrollY >= window.innerHeight * 0.4) {
        setShowGif(true);
      } else {
        setShowGif(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = document.querySelector('.hero-container');
    const wrapper = document.querySelector('.hero-section');
    if (!container || !wrapper) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 480;
      const rotateX = ((centerY - y) / centerY) * 480;
      container.style.setProperty('--hero-rotate-x', `${rotateX}deg`);
      container.style.setProperty('--hero-rotate-y', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      container.style.setProperty('--hero-rotate-x', `0deg`);
      container.style.setProperty('--hero-rotate-y', `0deg`);
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
      footerRef.current = footer;
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <section className="hero-section container-fluid">
      <div className="hero-header text-center mt-5">
        <h1 className="hero-heading">Power Your Wallet with CUP</h1>
        <button className="hero-button mt-4">Get CUP</button>
      </div>

      {isMobile && (
        <div className="mobile-hero-header">
          <h2 className="mobile-hero-heading">
            CUP is a deflationary DeFi token with staking, NFT rewards, and a 2M supply — 0.7% burned per transaction.
          </h2>
        </div>
      )}

      {/* ✅ Show GIF only after hero image shrinks into app.jpg */}
      {showGif && (
        <div className={`floating-gif ${isFooterVisible ? 'hidden' : ''}`}>
          <img src="src/assets/animation.gif" alt="CUP Animation" className="cat-gif" />
        </div>
      )}

      <CryptoCards />
      <CardComponent />
    </section>
  );
}

export default HeroSection;
