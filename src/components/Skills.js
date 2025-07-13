import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

import {
  FaJava, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase, FaStream, FaTools,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostgresql, SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Kafka', icon: <FaStream /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'CI/CD', icon: <FaTools /> },
  { name: 'Database', icon: <FaDatabase /> },
];

const Skills = () => (
  <Container id="skills" className="skills-section">
    <h2 className="skills-title">Technical Skills</h2>
    <Row className="justify-content-center">
      {skills.map((skill, index) => (
        <Col
          key={index}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="d-flex flex-column align-items-center glass-card"
        >
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-name">{skill.name}</div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Skills;
