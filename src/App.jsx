import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import luciaImage from './assets/lucia.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero luciaImage={luciaImage} />
      <About luciaImage={luciaImage} />
      <Courses />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;