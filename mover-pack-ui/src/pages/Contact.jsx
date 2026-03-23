import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className="bg-primary text-white py-5">
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead opacity-75 max-w-2xl mx-auto">Get in touch for a free quote or any inquiries about our services.</p>
        </Container>
      </div>

      <Container className="py-5 my-md-4">
        <Row className="g-5">
          <Col lg={5}>
            <div className="pe-lg-4">
              <h3 className="fw-bold text-primary mb-4">Get In Touch</h3>
              <p className="text-muted mb-5">
                Whether you're planning a local move or relocating across the country, our team is ready to help at every step of the process. Fill out the form or reach us through the contact details below.
              </p>

              <div className="d-flex mb-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-secondary flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                  <FaMapMarkerAlt />
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold text-primary mb-1">Our Location</h5>
                  <p className="text-muted mb-0">123 Moving Avenue<br/>Logistics Park, NY 10001</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-secondary flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                  <FaPhoneAlt />
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold text-primary mb-1">Phone Number</h5>
                  <p className="text-muted mb-0">+1 (800) 123-MOVE<br/>+1 (800) 456-PACK</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-secondary flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                  <FaEnvelope />
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold text-primary mb-1">Email Address</h5>
                  <p className="text-muted mb-0">info@packupexpress.com<br/>support@packupexpress.com</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center text-secondary flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                  <FaClock />
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold text-primary mb-1">Working Hours</h5>
                  <p className="text-muted mb-0">Monday - Friday: 8AM - 8PM<br/>Saturday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-lg p-md-4">
              <Card.Body>
                <h3 className="fw-bold text-primary mb-4">Request a Free Quote</h3>
                <Form>
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">First Name</Form.Label>
                        <Form.Control type="text" placeholder="John" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Doe" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="john@example.com" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="(123) 456-7890" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">Moving From</Form.Label>
                        <Form.Control type="text" placeholder="Current Zip Code" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold text-muted small">Moving To</Form.Label>
                        <Form.Control type="text" placeholder="Destination Zip Code" className="bg-light py-2" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold text-muted small">Expected Moving Date</Form.Label>
                    <Form.Control type="date" className="bg-light py-2" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-muted small">Additional Details</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Tell us about the size of your move (e.g., 3-bedroom house, small office)..." className="bg-light py-2" />
                  </Form.Group>

                  <Button variant="primary" size="lg" className="w-100 fw-bold py-3">
                    Get My Free Quote
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;