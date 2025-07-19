import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import Tokenomics from './pages/Tokenomics.jsx';
import Preloader from './components/Preloader.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/Tokenomics" element={<Tokenomics />} /> 
        </Routes>
        <Footer />
      </Router>

      {/* Preloader always on top of page */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}
    </>
  );
}

export default App;
