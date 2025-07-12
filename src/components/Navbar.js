import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
    <Container>
      <Navbar.Brand href="#about" className="navbar-brand-custom">Subodh Kumar</Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-navbar" />
      <Navbar.Collapse id="portfolio-navbar">
        <Nav className="ms-auto nav-links">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
