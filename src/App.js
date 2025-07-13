import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div>
      <NavigationBar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />  
      <Contact />
    </div>
  );
}

export default App;
