import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Referee = () => {
  const refereesData = [
    {
      name: 'Mr. Slim Diwani',
      position: 'Lecturer at University of Dodoma',
      description: 'My Supervisor of Final year project',
      email: 'diwania.salim@gmail.com',
      phone: '+255 782 769 720',
    },
    {
      name: 'Mr. Sadiq John Makanyaga',
      position: 'Head of Division of ICT department of Education at MOEZ',
      description: 'My Supervisor of Industrial Practical Training at MOEVT Zanzibar',
      email: 'sadiq.makanyaga@moez.go.tz',
      phone: '+255 652 965 440',
    },
    {
      name: 'Mr. Hemed Hashim Said',
      position: 'Head of infrastructure and system in Division of ICT department of Education at MOEZ',
      description: 'Supervisor of Industrial Practical Training at MOEVT Zanzibar',
      email: 'hemed.said@moez.go.tz',
      phone: '+255 652 965 440',
    },
  ];
  return (
    <section style={{ backgroundColor: '#eee' }}>
    <Container className="py-5">
  
      <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
              <h5 className="education-heading">Referee</h5>
              </ol>
            </nav>
     
      <Row>
        {refereesData.map((referee, index) => (
          <Col key={index} md={4} className="referee mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{referee.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{referee.position}</Card.Subtitle>
                <Card.Text>{referee.description}</Card.Text>
                <Card.Text>Email: <a href={`mailto:${referee.email}`}>{referee.email}</a></Card.Text>
                <Card.Text>Phone: <a href={`tel:${referee.phone}`}>{referee.phone}</a></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  
      
        {/* Add more referee entries here */}
      </Container>
    </section>
  );
};

export default Referee;
