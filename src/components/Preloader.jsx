import '../styles/Preloader.css';
import logo from '../assets/pre-img.png';
import { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const waitTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);

    const removeTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => {
      clearTimeout(waitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${startAnimation ? 'hide' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        height="100"
        className="d-inline-block align-top me-2"
      />
    </div>
  );
};

export default Preloader;
