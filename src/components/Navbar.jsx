import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGlobe, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCross, setShowCross] = useState(false);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      navigate('/');
      setShowCross(false);
    } else {
      navigate(path);
      setShowCross(true);
    }
  };

  const handleCrossClick = () => {
    navigate('/');
    setShowCross(false);
  };

  return (
    <Navbar expand="lg" className="shadow-sm">
      
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick('/about')} className="link">About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/features')} className="link">Features</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/tokenomics')} className="link">Tokenomics</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="link">
              <FaGlobe size={12} />
            </Nav.Link>
            <Nav.Link className="getMetamask">GET CUP</Nav.Link>
            {showCross && (
              <Nav.Link onClick={handleCrossClick}>
                <FaTimes size={20} />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
