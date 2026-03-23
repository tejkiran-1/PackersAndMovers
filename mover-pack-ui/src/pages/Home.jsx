import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBoxOpen, FaTruck, FaClock, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  const services = [
    { title: 'Residential Moving', icon: <FaHome />, desc: 'Safe and hassle-free relocation for you and your family to your new home.' },
    { title: 'Commercial Moving', icon: <FaBuilding />, desc: 'Efficient office relocations to minimize downtime for your business.' },
    { title: 'Packing Services', icon: <FaBoxOpen />, desc: 'Professional packing and unpacking services using high-quality materials.' },
    { title: 'Transport Services', icon: <FaTruck />, desc: 'Modern fleet of vehicles ensuring secure transportation of your belongings.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">Fast, Safe & Reliable<br/><span className="text-secondary">Moving Services</span></h1>
              <p className="lead mb-5 opacity-75">We take the stress out of your move. Whether it's across town or across the country, our experienced team ensures your belongings arrive safely and on time.</p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button as={Link} to="/contact" variant="primary" size="lg" className="fw-bold px-5 py-3">Get a Free Quote</Button>
                <Button as={Link} to="/services" variant="outline-light" size="lg" className="fw-bold px-5 py-3 bg-white text-primary border-white">Our Services</Button>
              </div>
            </Col>
            <Col lg={5}>
              <Card className="quote-card border-0">
                <Card.Body>
                  <h3 className="text-primary fw-bold mb-4 text-center">Request a Call Back</h3>
                  <form>
                    <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Name" required />
                    <input type="email" className="form-control form-control-lg bg-light" placeholder="Email Address" required />
                    <input type="tel" className="form-control form-control-lg bg-light" placeholder="Phone Number" required />
                    <select className="form-select form-select-lg bg-light">
                      <option defaultValue>Move Type</option>
                      <option value="1">Residential</option>
                      <option value="2">Commercial</option>
                      <option value="3">Storage</option>
                    </select>
                    <Button variant="primary" size="lg" className="w-100 fw-bold mt-3">Submit Request</Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center py-4">
            <Col md={4} className="mb-4 mb-md-0">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 text-secondary" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                <FaClock />
              </div>
              <h4 className="fw-bold text-primary">On-Time Delivery</h4>
              <p className="text-muted">We value your time. Our team ensures strict adherence to schedules for pickup and delivery.</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 text-secondary" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                <FaShieldAlt />
              </div>
              <h4 className="fw-bold text-primary">Fully Insured</h4>
              <p className="text-muted">Complete peace of mind knowing your valuable belongings are fully protected and insured.</p>
            </Col>
            <Col md={4}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 text-secondary" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                <FaTruck />
              </div>
              <h4 className="fw-bold text-primary">Modern Fleet</h4>
              <p className="text-muted">Well-maintained, specialized vehicles equipped to handle all types of moving requirements.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-5 my-md-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-secondary fw-bold text-uppercase tracking-wider">Our Services</h6>
            <h2 className="display-5 fw-bold text-primary">What We Offer</h2>
            <div className="mx-auto bg-secondary mt-3" style={{ height: '3px', width: '80px' }}></div>
          </div>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="service-card text-center p-4">
                  <Card.Body>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <Card.Title className="fw-bold text-primary mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {service.desc}
                    </Card.Text>
                    <Link to="/services" className="text-secondary fw-bold text-decoration-none">
                      Read More &rarr;
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-4">
          <Row className="align-items-center text-center text-md-start">
            <Col md={8}>
              <h2 className="fw-bold mb-3">Ready to Make Your Move?</h2>
              <p className="lead mb-0 opacity-75">Contact us today for a free, no-obligation moving quote and consultation.</p>
            </Col>
            <Col md={4} className="text-md-end mt-4 mt-md-0">
              <Button as={Link} to="/contact" variant="secondary" size="lg" className="fw-bold px-5 py-3 text-white">Contact Us Now</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;