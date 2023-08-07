import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Referee = () => {
  return (
    <div className="section">
      <h2>Referees</h2>
      <Container>
        <Row>
          <Col md={3} className="referee">
            <h5>Mr. Slim Diwani </h5>
            <p>Lecturer at University of Dodoma</p>
            <p>University of Dodoma</p>
            <p>Email:  diwania.salim@gmail.com</p>
            <p>Phone:  +255782 769 720</p>
          </Col>
          <Col md={3} className="referee">
            <h5>Mr. Sadiq John Makanyaga</h5>
            <p>Head of Division of ICT department of Education</p>
            <p>Head of Division of ICT department of Education</p>
            <p>Email: <a href="mailto:dulisadik@gmail.com"> sadiq.makanyaga@moez.go.tz</a></p>
            <p>Phone:  +255 652 965 440</p>
          </Col>
          <Col md={3} className="referee">
            <h5>Mr. Sadiq John Makanyaga</h5>
            <p>Head of Division of ICT department of Education</p>
            <p>Head of Division of ICT department of Education</p>
            <p>Email:  sadiq.makanyaga@moez.go.tz</p>
            <p>Phone:  +255 652 965 440</p>
          </Col>
          <Col md={3} className="referee">
            <h5>Mr. Sadiq John Makanyaga</h5>
            <p>Head of Division of ICT department of Education</p>
            <p>Head of Division of ICT department of Education</p>
            <p>Email:  sadiq.makanyaga@moez.go.tz</p>
            <p>Phone:  +255 652 965 440</p>
          </Col>
        </Row>
        {/* Add more referee entries here */}
      </Container>
    </div>
  );
};

export default Referee;
