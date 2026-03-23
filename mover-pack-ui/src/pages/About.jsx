import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaUsers, FaTrophy, FaHandshake } from 'react-icons/fa';
import aboutImage from '../images/packers-and-movers-about.jpg';

const About = () => {
  return (
    <>
      <div className="bg-primary text-white py-5">
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold">About PackUp Express</h1>
          <p className="lead opacity-75 max-w-2xl mx-auto">Your trusted partner in moving and logistics since 2010.</p>
        </Container>
      </div>

      <Container className="py-5 my-md-4">
        <Row className="align-items-center mb-5 pb-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img 
              src={aboutImage}
              alt="Moving Team" 
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col lg={6} className="ps-lg-5">
            <h6 className="text-secondary fw-bold text-uppercase">Our Story</h6>
            <h2 className="display-6 fw-bold text-primary mb-4">Redefining the Moving Experience</h2>
            <p className="text-muted lead mb-4">
              Founded on the principles of reliability, care, and customer satisfaction, PackUp Express has grown to become a leading name in the moving industry.
            </p>
            <p className="text-muted mb-4">
              We understand that moving isn't just about transporting boxes; it's about transitioning lives and businesses. Our team of dedicated professionals is trained to handle your valuables with the utmost respect and care, ensuring a seamless journey from your old space to your new beginning.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-secondary me-3 fs-5" /> <span className="text-muted">Over 10 years of industry experience</span></li>
              <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-secondary me-3 fs-5" /> <span className="text-muted">Thousands of successful relocations</span></li>
              <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-secondary me-3 fs-5" /> <span className="text-muted">Highly trained and vetted moving staff</span></li>
              <li className="d-flex align-items-center"><FaCheckCircle className="text-secondary me-3 fs-5" /> <span className="text-muted">Comprehensive insurance coverage</span></li>
            </ul>
          </Col>
        </Row>

        <Row className="g-4 text-center mt-5">
          <div className="col-12 mb-4">
            <h2 className="fw-bold text-primary">Why Choose Us?</h2>
            <div className="mx-auto bg-secondary mt-3" style={{ height: '3px', width: '80px' }}></div>
          </div>
          
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 py-4">
              <Card.Body>
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  <FaUsers />
                </div>
                <h4 className="fw-bold text-primary">Expert Team</h4>
                <p className="text-muted">Our movers are professionals who undergo rigorous training in packing, loading, and customer service.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 py-4">
              <Card.Body>
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  <FaHandshake />
                </div>
                <h4 className="fw-bold text-primary">Transparent Pricing</h4>
                <p className="text-muted">No hidden fees or surprises. We provide detailed quotes and stick to them throughout the process.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 py-4">
              <Card.Body>
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  <FaTrophy />
                </div>
                <h4 className="fw-bold text-primary">Award Winning</h4>
                <p className="text-muted">Recognized for our excellence in service delivery and outstanding customer satisfaction ratings.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;