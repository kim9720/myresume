import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Import your custom styles

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
