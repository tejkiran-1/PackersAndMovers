import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBoxOpen, FaTruck, FaClock, FaShieldAlt, FaRoute, FaClipboardList } from 'react-icons/fa';

const Home = () => {
  const services = [
    { title: 'Residential Moving', icon: <FaHome />, desc: 'Tailored moves for apartments, condos, and family homes with careful packing.' },
    { title: 'Commercial Moving', icon: <FaBuilding />, desc: 'Minimal downtime relocations for offices, stores, and workspaces.' },
    { title: 'Packing & Materials', icon: <FaBoxOpen />, desc: 'Premium packing, labeling, and supplies to keep every item safe.' },
    { title: 'Fleet & Transport', icon: <FaTruck />, desc: 'Modern trucks with GPS tracking and pro drivers for secure transit.' },
  ];

  const steps = [
    { label: 'Request', desc: 'Share your route, inventory, and dates.' },
    { label: 'Plan', desc: 'We map timelines, packing, and crew size.' },
    { label: 'Move', desc: 'On-time arrival, careful loading, safe delivery.' },
    { label: 'Settle', desc: 'Unpack, place, and final walkthrough.' },
  ];

  return (
    <>
      {/* Hero & Booking */}
      <section className="hero-section redesign-hero">
        <div className="hero-overlay" />
        <Container className="position-relative">
          <Row className="align-items-center">
            <Col lg={6} className="text-white mb-5 mb-lg-0">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white bg-opacity-10 border border-light border-opacity-25 mb-3">
                <span className="badge rounded-pill bg-secondary text-dark fw-bold">24/7</span>
                <small className="text-white-50 fw-semibold">On-demand moving support</small>
              </div>
              <h1 className="display-4 fw-bold mb-3">Move Faster.<br/>Move Safer.<br/><span className="text-highlight">Move with PackUp.</span></h1>
              <p className="lead text-white-75 mb-4">Instant quotes, real-time coordination, and pro movers that treat your belongings like their own.</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button as={Link} to="/contact" size="lg" className="fw-bold px-4 hero-primary">Book Your Move</Button>
                <Button as={Link} to="/services" variant="outline-light" size="lg" className="fw-bold px-4">View Services</Button>
              </div>
              <div className="d-flex gap-4 mt-4 text-white-75 small">
                <div className="d-flex align-items-center gap-2"><FaClock className="text-secondary" /> On-time guarantee</div>
                <div className="d-flex align-items-center gap-2"><FaShieldAlt className="text-secondary" /> Fully insured</div>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="booking-card shadow-lg border-0">
                <Card.Body>
                  <h3 className="fw-bold text-primary mb-3">Get a fast quote</h3>
                  <p className="text-muted mb-4">Tell us your route and we’ll send an instant estimate with crew size and timings.</p>
                  <Form className="booking-form">
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Pick-up Location</Form.Label>
                          <Form.Control type="text" placeholder="Current address" className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Drop-off Location</Form.Label>
                          <Form.Control type="text" placeholder="New address" className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Move Date</Form.Label>
                          <Form.Control type="date" className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Phone</Form.Label>
                          <Form.Control type="tel" placeholder="(555) 123-4567" className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Move Type</Form.Label>
                          <Form.Select className="py-2">
                            <option>Apartment / Home</option>
                            <option>Office / Commercial</option>
                            <option>Storage Run</option>
                            <option>Vehicle Transport</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="text-muted small fw-semibold">Notes</Form.Label>
                          <Form.Control as="textarea" rows={2} placeholder="Elevators? Fragile items? Timing windows?" className="py-2" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button type="button" className="w-100 fw-bold mt-3 hero-primary py-3">Get Estimate</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service highlights */}
      <section className="section-light">
        <Container>
          <div className="section-head text-center mb-4">
            <p className="eyebrow text-secondary">Services</p>
            <h2 className="fw-bold text-primary">Everything you need for a smooth move</h2>
            <p className="text-muted">From packing to final placement, we handle the details so you don’t have to.</p>
          </div>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="service-pill h-100">
                  <Card.Body>
                    <div className="service-icon-lg">{service.icon}</div>
                    <h5 className="fw-bold text-primary mb-2">{service.title}</h5>
                    <p className="text-muted mb-0 small">{service.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="section-dark text-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <p className="eyebrow text-secondary">Why PackUp</p>
              <h2 className="fw-bold mb-3">Predictable moves with premium care.</h2>
              <p className="text-white-75 mb-4">Dedicated coordinators, insured crews, and transparent pricing keep your move stress-free.</p>
              <div className="d-grid gap-3">
                <div className="pill-row">
                  <FaShieldAlt className="text-secondary" />
                  <div>
                    <h6 className="mb-1 text-white">Insurance-first</h6>
                    <small className="text-white-50">Coverage options for every move size and timeline.</small>
                  </div>
                </div>
                <div className="pill-row">
                  <FaRoute className="text-secondary" />
                  <div>
                    <h6 className="mb-1 text-white">Route-smart</h6>
                    <small className="text-white-50">Optimized paths and time windows to avoid delays.</small>
                  </div>
                </div>
                <div className="pill-row">
                  <FaClipboardList className="text-secondary" />
                  <div>
                    <h6 className="mb-1 text-white">Crew & checklist</h6>
                    <small className="text-white-50">Trained teams, labeled boxes, and verified inventory.</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Card className="stats-card">
                <Card.Body className="d-grid gap-4">
                  <Row className="g-3 text-center">
                    <Col sm={4} className="border-end border-light border-opacity-25">
                      <h3 className="fw-bold text-secondary mb-1">1.2k+</h3>
                      <small className="text-white-50">Moves completed</small>
                    </Col>
                    <Col sm={4} className="border-end border-light border-opacity-25">
                      <h3 className="fw-bold text-secondary mb-1">4.9/5</h3>
                      <small className="text-white-50">Customer rating</small>
                    </Col>
                    <Col sm={4}>
                      <h3 className="fw-bold text-secondary mb-1">50+</h3>
                      <small className="text-white-50">Cities served</small>
                    </Col>
                  </Row>
                  <Row className="g-3 text-center text-lg-start">
                    <Col md={6}>
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <h6 className="text-white mb-2">White-glove handling</h6>
                        <p className="text-white-75 mb-0 small">Custom crating for art, antiques, and sensitive equipment.</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="bg-white bg-opacity-10 rounded-3 p-3 h-100">
                        <h6 className="text-white mb-2">Live updates</h6>
                        <p className="text-white-75 mb-0 small">Status notifications from dispatch to delivery.</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Steps */}
      <section className="section-light">
        <Container>
          <div className="section-head text-center mb-5">
            <p className="eyebrow text-secondary">How it works</p>
            <h2 className="fw-bold text-primary">Your move, simplified</h2>
          </div>
          <Row className="g-4">
            {steps.map((step, idx) => (
              <Col md={3} key={idx}>
                <div className="step-card h-100 text-center">
                  <div className="step-number">{idx + 1}</div>
                  <h6 className="fw-bold text-primary mb-2">{step.label}</h6>
                  <p className="text-muted small mb-0">{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          <div>
            <p className="eyebrow text-secondary mb-1">Ready?</p>
            <h3 className="fw-bold text-white mb-2">Lock in your move window today.</h3>
            <p className="text-white-75 mb-0">We’ll confirm crew size, truck type, and insurance options in minutes.</p>
          </div>
          <div className="d-flex gap-2">
            <Button as={Link} to="/contact" size="lg" className="fw-bold hero-primary">Schedule Pickup</Button>
            <Button as={Link} to="/services" variant="outline-light" size="lg" className="fw-bold">See Plans</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;