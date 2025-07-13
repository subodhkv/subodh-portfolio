import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';  
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

        {/* Typed animation */}
        <div className="typed-intro mb-3">
          <ReactTyped
            strings={[
              "Hi, I’m Subodh Kumar 👋",
              "Java + Spring Boot Developer 💻",
              "React Enthusiast 🚀",
              "Cloud + DevOps Explorer ☁️"
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>

        <p className="about-text">
          I’m a dedicated Software Engineer with <strong>2.8+ years</strong> of experience building scalable backend services and frontend applications.
          My core skills include <strong>Java, Spring Boot, REST APIs, React</strong>, and I work confidently with <strong>AWS, GCP, and Docker</strong>.
        </p>
        <p className="about-text">
          I enjoy solving real-world problems and writing clean, testable code in Agile teams. I’m passionate about continuously learning and improving my craft.
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
