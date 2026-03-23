import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTruckMoving } from 'react-icons/fa';

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaTruckMoving className="text-secondary me-2" size={32} />
          <div>
            <span className="text-primary" style={{ fontSize: '1.5rem', fontWeight: '800' }}>PackUp</span>
            <span className="text-secondary" style={{ fontSize: '1.5rem', fontWeight: '800' }}> Express</span>
            <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#666', letterSpacing: '1px', marginTop: '-5px' }}>
              SAFE & FAST MOVING
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" active={location.pathname === '/services'}>Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
            <Button as={Link} to="/contact" variant="primary" className="ms-lg-3 mt-2 mt-lg-0 fw-bold px-4 py-2">
              Get a Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;