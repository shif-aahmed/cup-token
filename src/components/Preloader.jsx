import '../styles/Preloader.css';
import logo from '../assets/pre-img.png';
import { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      if (onFinish) onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`preloader ${hide ? 'hide' : ''}`}>
      <img src={logo} alt="Logo" height="100" />
    </div>
  );
};

export default Preloader;
