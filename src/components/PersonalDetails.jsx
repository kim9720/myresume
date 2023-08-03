import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PersonalDetails = () => {
  return (
    <div className="section">
      <h2>Personal Details</h2>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Location</h5>
            <p>Zanzibar, Tanzania</p>
          </Col>
          <Col md={4}>
            <h5>Phone</h5>
            <p>(+255) 778665524</p>
          </Col>
          <Col md={4}>
            <h5>Date of Birth</h5>
            <p>January 1, 1990</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalDetails;
