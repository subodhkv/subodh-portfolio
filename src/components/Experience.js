import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Experience.css';
import infusionLogo from '../assets/Infusion-main-logo.png';
import optumLogo from '../assets/optum-logo-ora-rgb1.svg';

const experiences = [
  {
    company: "Infusion Analysts",
    role: "Software Engineer",
    duration: "May 2023 – Present",
    logo: infusionLogo,
    responsibilities: [
      "Designed and developed scalable microservices using Spring Boot and Spring Security.",
      "Built RESTful APIs for HR lifecycle modules (recruitment, payroll, attendance).",
      "Implemented OAuth2 and JWT for secure authentication across services.",
      "Integrated Gmail APIs for automated HR notifications.",
      "Built intuitive React UI for HR team to manage employee records.",
    ],
  },
  {
    company: "Optum Global Solutions (UnitedHealth Group)",
    role: "Technology Apprentice",
    duration: "Dec 2020 – Jun 2021",
    logo: optumLogo,
    responsibilities: [
      "Worked with ITSO team to maintain and enhance internal web portals.",
      "Developed responsive interfaces using HTML, CSS, JavaScript, React, and Bootstrap.",
      "Improved user experience across multiple internal tools.",
    ],
  },
];

const Experience = () => (
  <Container id="experience" className="py-5 experience-section">
    <h2 className="experience-title text-center mb-5">Experience</h2>
    {experiences.map((exp, idx) => (
      <Card className="experience-card mb-5 fade-in" key={idx}>
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={12} md={1} className="text-center mb-3 mb-md-0">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="company-logo"
                fluid
              />
            </Col>
            <Col md={8}>
              <h5 className="experience-role">
                {exp.role} <span className="company-name">@ {exp.company}</span>
              </h5>
              <ul className="experience-list mt-2">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </Col>
            <Col md={3} className="text-md-end text-muted">
              <span className="experience-duration">{exp.duration}</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
  </Container>
);

export default Experience;
