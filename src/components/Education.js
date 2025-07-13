import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      college: "Shaheed Bhagat Singh State Technical Campus",
      university: "Maharaja Ranjit Singh Punjab Technical University",
      duration: "2016 – 2020",
    },
    // You can add more entries here if needed
  ];

  return (
    <Container id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <Row className="justify-content-center">
        {educationData.map((edu, index) => (
          <Col md={10} lg={8} key={index}>
            <Card className="education-card mb-4">
              <Card.Body>
                <Card.Title className="degree">{edu.degree}</Card.Title>
                <Card.Subtitle className="college">{edu.college}</Card.Subtitle>
                <Card.Text className="university">{edu.university}</Card.Text>
                <div className="duration">{edu.duration}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
