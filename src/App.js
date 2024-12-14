import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Interests from './Components/Interests';
import Contact from './Components/Contact';
import Header from './Components/Header';


const App = () => {
  return (
    <>
    <Header/>
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Interests />
      <Contact />
    </div>
    </>
  );
};

export default App;
