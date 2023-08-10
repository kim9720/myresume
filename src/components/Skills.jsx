import React, { useState, useEffect } from 'react';
import { Card, ProgressBar,Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLaptopCode, faDesktop,  faServer, faPalette } from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  const skillsData = [
    { skill: 'ReactJS', proficiency: 40, icon: faServer },
    { skill: 'JavaScript', proficiency: 70, icon: faLaptopCode },
    { skill: 'HTML/CSS', proficiency: 95, icon: faDesktop },
    { skill: 'Bootstrap', proficiency: 70, icon: faPalette },
    { skill: 'Version Control (Git)', proficiency: 85, icon: faLaptopCode },
    // ... add more skills and icons as needed
  ];

  const [progress, setProgress] = useState({});
  
  useEffect(() => {
    const interval = setInterval(() => {
      let updatedProgress = {};
      skillsData.forEach(skill => {
        if (!progress[skill.skill]) {
          updatedProgress[skill.skill] = 1;
        } else if (progress[skill.skill] < skill.proficiency) {
          updatedProgress[skill.skill] = progress[skill.skill] + 1;
        } else {
          updatedProgress[skill.skill] = skill.proficiency;
        }
      });
      setProgress(updatedProgress);
    }, 20);

    return () => clearInterval(interval);
  }, [skillsData, progress]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Row>
          <Col>

          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
              <h5 className="education-heading">Skills</h5>
              </ol>
            </nav>

          </Col>
        </Row>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Card>
              <Card.Body>
              <FontAwesomeIcon icon={skill.icon} className="mr-2" />
                <Card.Title>{skill.skill}</Card.Title>
                <ProgressBar now={progress[skill.skill] || 0} label={`${progress[skill.skill] || 0}%`} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
    </section>
  );
};

export default Skills;
