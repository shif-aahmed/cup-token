import React, { useRef, useEffect } from 'react';
import '../styles/TiltCard.css';

const TiltCard = () => {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;

    let x = 0;
    let y = 0;

    const updateTilt = () => {
      const { width, height } = card.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      const rotateX = ((y - centerY) / centerY) * 20;
      const rotateY = ((x - centerX) / centerX) * 20;

      inner.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleTilt = (e) => {
      x = e.clientX - card.getBoundingClientRect().left;
      y = e.clientY - card.getBoundingClientRect().top;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(updateTilt);
    };

    const resetTilt = () => {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    if (window.innerWidth > 768) {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
      card.removeEventListener('mousemove', handleTilt);
      card.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  return (
    <div className="tilt-card" ref={cardRef}>
      <div className="tilt-inner" ref={innerRef}>
        <h2>One Token. Infinite Use</h2>
      </div>
    </div>
  );
};

export default TiltCard;
