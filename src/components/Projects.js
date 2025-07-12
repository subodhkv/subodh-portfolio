import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaProjectDiagram } from 'react-icons/fa';
import './Projects.css'; // Assuming the CSS is in the same folder

// Import project images
import hrmsImg from '../assets/hrms-overview.jpg';
import interiorImg from '../assets/interior.jpg';
import tradingImg from '../assets/tradding.jpg';

const Projects = () => {
  const projects = [
    {
      title: "HREMS (HR Management System)",
      description:
        "An enterprise-level HR solution with modules for recruitment, payroll, attendance, and performance. Built using Spring Boot, OAuth2, and React.",
      image: hrmsImg,
    },
    {
      title: "Interior Design Microservice Platform",
      description:
        "Microservices-based platform improving customer interaction and backend maintainability using Spring Cloud and containerized services.",
      image: interiorImg,
    },
    {
      title: "RTSG Trading Platform",
      description:
        "Real-time trading system for SGX and global markets with Kafka messaging and high-throughput event-driven architecture.",
      image: tradingImg,
    },
  ];

  return (
    <Container id="projects" className="py-5">
      <h2 className="section-title">Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="project-card h-100">
              <Card.Img variant="top" src={proj.image} alt={proj.title} />
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaProjectDiagram className="project-icon" />
                  <span className="project-title">{proj.title}</span>
                </div>
                <Card.Text className="project-text">{proj.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
