import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/home';
import Features from './pages/Features';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import Preloader from './components/Preloader';
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
      </Router>

      {/* Preloader always on top of page */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}
    </>
  );
}

export default App;
