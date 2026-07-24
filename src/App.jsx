import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Vaše fotografie z Imgur
  const luciaImage = 'https://i.imgur.com/Q0FNI53.jpg';

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