import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../images/kim.jpg';

const PersonalDetails = () => {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
 
        <Row>
          <Col>

            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                Personal Details
              </ol>
            </nav>

          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={image} alt="avatar" className="rounded-circle-9% img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">Mohamed Sadik</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Tomondo, Zanzibar, TZ</p>
              </div>
            </div>
          </Col>
          
      <Col lg={8}>
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Mohamed Sadik Hababuu</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">dulisadik@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nick Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">kim</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(+255) 778665524</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Tomondo, Zanzibar, TZ</p>
              </div>
            </div>


          </div>
        </div>
        
        <Row>
          <Col md={6}>
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                {/* Project status details */}
                {/* ... */}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                {/* Project status details */}
                {/* ... */}
              </div>
            </div>
          </Col>
        </Row>
        </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">@kim9720</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>

              </ul>
            </div>
          </div>
        </Col>
      </Row>



      
    </Container>
    </section>
  );
};

export default PersonalDetails;
