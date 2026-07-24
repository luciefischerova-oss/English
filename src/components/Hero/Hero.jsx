import React from 'react';
import './Hero.css';

const Hero = ({ image }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" role="region" aria-label="Hlavní úvodní sekce">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text animate-slide-in-left">
            <h1>Naučte se anglicky s jistotou.</h1>
            <p className="hero-subtitle">
              Individuální výuka angličtiny pro děti, studenty i dospělé. Online i osobně.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg" onClick={scrollToContact}>
                Rezervovat lekci
              </button>
              <a href="#courses" className="btn btn-secondary btn-lg">
                Moje kurzy
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image animate-slide-in-right">
            <div className="image-wrapper">
              {image && (
                <img src={image} alt="Lucia - lektorka angličtiny" className="profile-image" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="hero-decoration"></div>
    </section>
  );
};

export default Hero;