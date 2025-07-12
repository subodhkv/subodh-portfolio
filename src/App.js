import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavigationBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
