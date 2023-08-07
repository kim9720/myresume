import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Referee = () => {
  return (
    <div className="section">
      <h2>Referees</h2>
      <hr/>
      <Container>
        <Row>
          <Col md={4} className="referee">
            <h5>Mr. Slim Diwani </h5>
            <p>Lecturer at University of Dodoma</p>
            <p>University of Dodoma</p>
            <p>My Supervisor of Final year project </p>
            <p>Email:  <a href="mailto:diwania.salim@gmail.com">diwania.salim@gmail.com</a></p>
            <p>Phone:  <a href="tell:+255782769720">+255 782 769 720</a></p>
          </Col>
          <Col md={4} className="referee">
            <h5>Mr. Sadiq John Makanyaga</h5>
            <p>Head of Division of ICT department of Education at MOEZ</p>
            <p>My Supervisor of Industrial Practical Training at MOEVT Zanzibar</p>
            <p>Email: <a href="mailto:sadiq.makanyaga@moez.go.tz">sadiq.makanyaga@moez.go.tz</a></p>
            <p>Phone:  <a href="tell:+255652965440">+255 652 965 440</a></p>
          </Col>
          <Col md={4} className="referee">
            <h5>Mr. Hemed Hashim Said </h5>
            <p>Head of infrastructure and system in Division of ICT department of Educationat MOEZ</p>
            <p>Supervisor of Industrial Practical Training at MOEVT Zanzibar</p>
            <p>Email: <a href="mailto:hemed.said@moez.go.tz">hemed.said@moez.go.tz</a></p>
            <p>Phone: <a href="tell:+255652965440"> +255 652 965 440</a></p>
          </Col>
          
        </Row>
        {/* Add more referee entries here */}
      </Container>
    </div>
  );
};

export default Referee;
