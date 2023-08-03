import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Referee = () => {
  return (
    <div className="section">
      <h2>Referees</h2>
      <Container>
        <Row>
          <Col md={6} className="referee">
            <h3>Jane Smith</h3>
            <p>Senior Manager</p>
            <p>Company A</p>
            <p>Email: jane@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={6} className="referee">
            <h3>Michael Johnson</h3>
            <p>Lead Developer</p>
            <p>Company B</p>
            <p>Email: michael@example.com</p>
            <p>Phone: (987) 654-3210</p>
          </Col>
        </Row>
        {/* Add more referee entries here */}
      </Container>
    </div>
  );
};

export default Referee;
