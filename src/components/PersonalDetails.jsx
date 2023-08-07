import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../images/kim.jpg';

const PersonalDetails = () => {
  return (
    <div className="section">
      <h2>Personal Details</h2>
      <hr/>
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img
              src={image} // Path to your profile photo
              alt="Profile"
              className="profile-photo"
            />
          </Col>
          <Col md={8}>
            <p><strong>Name:</strong> Mohamed Sadik Hababuu</p>
            <p><strong>Address:</strong> Mombasa, Zanzibar, Tanzania, ZIP</p>
            <p><strong>Sex:</strong> Male</p>
            <p><strong>Marital Status:</strong> Single</p>
            <p><strong>Nationality:</strong> Tanzanian</p>
            <p><strong>Address</strong>
            <p><strong>Phone:</strong> <a href="tel:+255778665524">(+255) 778665524</a></p>
            <p><strong>Email:</strong><a href="mailto:dulisadik@gmail.com"> dulisadik@gmail.com</a></p>
            </p>
            {/* Add more personal details here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalDetails;
