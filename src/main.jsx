import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MainApp() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS (Animations on Scroll)
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
