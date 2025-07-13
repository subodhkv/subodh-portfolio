import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#about" className="navbar-brand-custom">
          {/* Add logo if you have one: <img src={logo} className="navbar-logo" alt="logo" /> */}
          Subodh Kumar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#about" className={active === 'about' ? 'active-link' : ''}>About</Nav.Link>
            <Nav.Link href="#experience" className={active === 'experience' ? 'active-link' : ''}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={active === 'projects' ? 'active-link' : ''}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={active === 'skills' ? 'active-link' : ''}>Skills</Nav.Link>
            <Nav.Link href="#contact" className={active === 'contact' ? 'active-link' : ''}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
