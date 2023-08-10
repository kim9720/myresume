import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      year: '2019 - 2023',
      education: "Bachelor's Degree in Software Engineering",
      institution: 'University of Dodoma',
      details: 'Completed coursework in programming, algorithms, and software engineering.',
    },
    {
      year: '2016 - 2019',
      education: 'Advanced Secondary Education',
      institution: 'Zanzibar Commercial Secondary School',
      details: 'Completed coursework in Computer Science, Mathematics, and Physics (PMC).',
    },
    {
      year: '2013 - 2016',
      education: 'Secondary Education',
      institution: 'Zanzibar Commercial Secondary School',
      details: 'Completed coursework in Computer Science.',
    },
    {
      year: '2006 - 2012',
      education: 'Primary Education',
      institution: 'Kiembesamaki Primary School',
      details: 'Completed coursework in Computer Science.',
    },
  ];
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Row>
          <Col>

            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                Education
              </ol>
            </nav>

          </Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Year</th>
              <th>Education</th>
              <th>Institution</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.education}</td>
                <td>{item.institution}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    </section>
  );
};

export default Education;
