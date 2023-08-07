import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
  return (
    <div className="section">
      <h2>Education</h2>
      <hr/>
      <Container>
        <Row>
          <Col md={3} className="education-year">
            <p>2019 - 2023</p>
          </Col>
          <Col md={9}>
            <h4>Bachelor's Degree in Software Engineering</h4>
            <p className="education-institution">University of Dodoma</p>
            <p>Completed coursework in programming, algorithms, and software engineering.</p>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="education-year">
            <p>2016 - 2019</p>
          </Col>
          <Col md={9}>
            <h4>Advanced Secondary Education</h4>
            <p className="education-institution">Zanzibar Commercial Secondary School</p>
            <p>Completed coursework in Computer Sciece, Mathematics, and Physics (PMC).</p>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="education-year">
            <p>2013 - 2016</p>
          </Col>
          <Col md={9}>
            <h4>Secondary Education</h4>
            <p className="education-institution">Zanzibar Commercial Secondary School</p>
            <p>Completed coursework in Computer Sciece.</p>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="education-year">
            <p>2006 - 2012</p>
          </Col>
          <Col md={9}>
            <h4>Primary Education</h4>
            <p className="education-institution">Kiembesamaki Primary School</p>
            <p>Completed coursework in Computer Sciece.</p>
          </Col>
        </Row>
        {/* Add more education entries here */}
      </Container>
    </div>
  );
};

export default Education;
