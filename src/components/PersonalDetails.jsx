import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PersonalDetails = () => {
  return (
    <div className="section">
      <h2>Personal Details</h2>
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img
              src={process.env.PUBLIC_URL + '/profile-photo.jpg'} // Path to your profile photo
              alt="Profile"
              className="profile-photo"
            />
          </Col>
          <Col md={8}>
            <p><strong>Name:</strong> Mohamed Sadik Hababuu</p>
            <p><strong>Address:</strong> Mombasa, Zanzibar, Tanzania, ZIP</p>
            <p><strong>Phone:</strong> (+255) 778665524</p>
            <p><strong>Email:</strong> dulisadik@gmail.com</p>
            {/* Add more personal details here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalDetails;
