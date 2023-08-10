import React from 'react';
import { Card,Container,Row,Col } from 'react-bootstrap';

const Experience = () => {
  const experienceData = [
    {
      title: 'System Development',
      duration: '2022 to Present',
      company: 'Nour Al-Yaqeen Foundation',
      description: 'Back-end Development of Online Orphan Registration System',
    },
    {
      title: 'Junior Developer',
      duration: '2018 to 2020',
      company: 'Company B',
      description: 'Assisted in building and testing web applications, contributing to team projects.',
    },
    // ... add more experience items
  ];

  return (
    <section style={{ backgroundColor: '#eee' }}>
    <Container className="py-5">

      <Row>
        <Col>

        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
              <h5 className="education-heading">Experience</h5>
              </ol>
            </nav>

        </Col>
      </Row>
      {experienceData.map((experience, index) => (
        <div key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{experience.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
              <Card.Text>{experience.company}</Card.Text>
              <Card.Text>{experience.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
    </section>
  );
};

export default Experience;
