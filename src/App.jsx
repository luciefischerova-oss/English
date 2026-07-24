import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import luciaImage from './assets/lucia.jpg';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero image={luciaImage} />
      <About image={luciaImage} />
      <Courses />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;