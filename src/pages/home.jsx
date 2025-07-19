import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import HeroImage from '../components/HeroImage.jsx';
import CardComponent from '../components/Info.jsx';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <style>
        {`
          .page-reveal {
            clip-path: circle(0% at 50% 50%);
            transition: clip-path 1.2s ease-in-out;
          }

          .page-reveal.reveal {
            clip-path: circle(150% at 50% 50%);
          }
        `}
      </style>

      <div className="page-reveal reveal mt-5">
        <HeroSection />
          <HeroImage />
        <CardComponent />
      </div>
    </div>
  );
}

export default Home;
