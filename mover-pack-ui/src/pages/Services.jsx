import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHome, FaBuilding, FaBox, FaCarSide, FaTape, FaWarehouse } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Residential Moving',
      icon: <FaHome />,
      description: 'Moving to a new home can be overwhelming. Let our experts handle the heavy lifting while you focus on settling in. We offer local and long-distance residential moving services tailored to your specific needs.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Commercial Moving',
      icon: <FaBuilding />,
      description: 'We understand that in business, time is money. Our commercial moving teams are trained to execute office relocations swiftly and efficiently, minimizing downtime and disruption to your daily operations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Packing & Unpacking',
      icon: <FaBox />,
      description: 'Save hours of tedious work with our professional packing services. We use high-quality, specialized materials to ensure your fragile items, artwork, and electronics are thoroughly protected during transit.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Storage Solutions',
      icon: <FaWarehouse />,
      description: 'Need a place to keep your belongings during a transition? We offer secure, climate-controlled, and monitored storage facilities for both short-term and long-term needs.',
      image: 'https://images.unsplash.com/photo-1595054378120-6d43e223023e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Vehicle Transport',
      icon: <FaCarSide />,
      description: 'Moving across the country and need your car transported? We provide safe and reliable vehicle transportation services, ensuring your car arrives at its destination in the exact condition it left.',
      image: 'https://images.unsplash.com/photo-1565042661556-9deac9bb0e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Moving Supplies',
      icon: <FaTape />,
      description: 'Prefer to pack yourself? We offer a comprehensive range of high-quality moving boxes, bubble wrap, packing tape, and specialized containers for wardrobes and delicate items.',
      image: 'https://images.unsplash.com/photo-1582299863339-da73f2a89369?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <>
      <div className="bg-primary text-white py-5">
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead opacity-75 max-w-2xl mx-auto">Comprehensive moving and logistics solutions designed for your unique needs.</p>
        </Container>
      </div>

      <Container className="py-5 my-md-4">
        <Row className="g-4 g-lg-5">
          {servicesData.map((service) => (
            <Col lg={4} md={6} key={service.id}>
              <Card className="h-100 border-0 shadow-sm service-page-card overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                </div>
                <Card.Body className="p-4 position-relative">
                  <div 
                    className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center position-absolute shadow"
                    style={{ width: '60px', height: '60px', top: '-30px', right: '30px', fontSize: '1.5rem' }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="fw-bold text-primary mb-3 mt-2">{service.title}</h4>
                  <p className="text-muted mb-0">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;