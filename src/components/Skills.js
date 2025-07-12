import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

// React Icons for logos
import { FaJava, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase, FaStream, FaTools } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
  { name: 'React', icon: <FaReact color="#61DBFB" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'MySQL', icon: <SiMysql color="#00758F" /> },
  { name: 'Kafka', icon: <FaStream color="#000000" /> }, // fallback icon
  { name: 'Docker', icon: <FaDocker color="#0db7ed" /> },
  { name: 'AWS', icon: <FaAws color="#FF9900" /> },
  { name: 'Git', icon: <FaGitAlt color="#F1502F" /> },
  { name: 'CI/CD', icon: <FaTools color="#6c757d" /> }, // replaced SiCicd with FaTools
  { name: 'Database', icon: <FaDatabase color="#444" /> },
];

const Skills = () => {
  return (
    <Container id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
