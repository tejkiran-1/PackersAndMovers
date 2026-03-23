import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="mb-4">
              <span className="text-white" style={{ fontSize: '1.5rem', fontWeight: '800' }}>PackUp</span>
              <span className="text-secondary" style={{ fontSize: '1.5rem', fontWeight: '800' }}> Express</span>
            </div>
            <p className="text-light opacity-75 mb-4">
              Your trusted partner for safe, fast, and reliable moving services. We handle your belongings with the utmost care from start to finish.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white bg-secondary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><FaFacebook /></a>
              <a href="#" className="text-white bg-secondary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><FaTwitter /></a>
              <a href="#" className="text-white bg-secondary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><FaInstagram /></a>
              <a href="#" className="text-white bg-secondary rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><FaLinkedin /></a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mt-4 mt-md-0">
            <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/about">About Us</Link>
            <Link className="footer-link" to="/services">Services</Link>
            <Link className="footer-link" to="/contact">Contact</Link>
            <Link className="footer-link" to="/faq">FAQ</Link>
          </Col>
          
          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <h5 className="text-white mb-4 fw-bold">Our Services</h5>
            <Link className="footer-link" to="/services">Residential Moving</Link>
            <Link className="footer-link" to="/services">Commercial Moving</Link>
            <Link className="footer-link" to="/services">Packing & Unpacking</Link>
            <Link className="footer-link" to="/services">Storage Solutions</Link>
            <Link className="footer-link" to="/services">Vehicle Transportation</Link>
          </Col>
          
          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <h5 className="text-white mb-4 fw-bold">Contact Info</h5>
            <div className="contact-info-item text-light opacity-75">
              <FaMapMarkerAlt className="text-secondary mt-1 me-3 flex-shrink-0" />
              <span>123 Moving Avenue, Logistics Park, NY 10001</span>
            </div>
            <div className="contact-info-item text-light opacity-75">
              <FaPhoneAlt className="text-secondary mt-1 me-3 flex-shrink-0" />
              <span>+1 (800) 123-MOVE</span>
            </div>
            <div className="contact-info-item text-light opacity-75">
              <FaEnvelope className="text-secondary mt-1 me-3 flex-shrink-0" />
              <span>info@packupexpress.com</span>
            </div>
          </Col>
        </Row>
        
        <hr className="mt-5 mb-4 border-light opacity-25" />
        
        <Row>
          <Col className="text-center text-light opacity-75 col-12">
            <p className="mb-0">&copy; {new Date().getFullYear()} PackUp Express. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;