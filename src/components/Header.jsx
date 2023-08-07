import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Header.css'; // Import your custom styles

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col md={8} className="text-md-start text-center">
                        <h1 className="display-4">Mohamed Sadik</h1>
                        <p className="lead">Full Stack Developer</p>
                    </Col>
                    <Col md={4} className="text-md-end text-center">
                        <ul className="social-icons">
                            <li><a href="https://www.linkedin.com/in/mohamed-sadik-49b79120a
" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"> </i> </a></li>
                            <li><a href="dulisadik@gmail.com"><i className="fas fa-envelope"></i></a></li>
                            {/* Add more social icons here */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
