import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import './About.css';
import profileImg from '../assets/profile.jpeg';

const About = () => (
  <Container id="about" className="about-section">
    <Row className="align-items-center">
      <Col md={4} className="text-center mb-4 mb-md-0">
        <Image
          src={profileImg}
          roundedCircle
          fluid
          alt="Subodh Kumar"
          className="profile-img animated-img"
        />
      </Col>
      <Col md={8}>
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m <strong>Subodh Kumar</strong>, a dedicated Software Engineer with <strong>2.8+ years</strong> of experience in building robust backend services and modern frontend applications.
          My core competencies include <strong>Java, Spring Boot, Microservices, RESTful APIs, and React</strong>. I work extensively with cloud platforms like AWS and GCP, and containerized deployments using Docker.
        </p>
        <p className="about-text">
          I’m passionate about clean code, agile development, and solving real-world business problems through scalable and secure software solutions.
          I'm continuously learning and pushing boundaries to stay ahead in the evolving tech landscape.
        </p>
        <a
          href="https://drive.google.com/file/d/1DKNcVUYhYG9WTX_0-j80UuNzXjkjDW_4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-resume mt-3"
        >
          <FaDownload className="me-2" />
          Download Resume
        </a>
      </Col>
    </Row>
  </Container>
);

export default About;
