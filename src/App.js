import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Footer from './components/Footer';
import Referee from './components/Referee';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <PersonalDetails/>
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <Referee/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
