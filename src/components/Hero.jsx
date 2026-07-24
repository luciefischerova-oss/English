import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ luciaImage }) => {
  return (
    <section className={`${styles.hero} section-padding`} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.textContent}>
            <h1 className={`${styles.title} animate-slide-in-left`}>
              Master English with Confidence
            </h1>
            <p className={`${styles.subtitle} animate-slide-in-left`} style={{ animationDelay: '0.1s' }}>
              Professional English tutor offering personalized lessons for children, students, and adults. Online and in-person lessons available.
            </p>
            <div className={styles.buttonGroup}>
              <button className="btn btn-primary btn-lg animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Book a Lesson
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary btn-lg animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Photo */}
          <div className={`${styles.photoWrapper} animate-slide-in-right`}>
            <div className={styles.photoContainer}>
              {luciaImage && (
                <img src={luciaImage} alt="Lucia - English Tutor" className={styles.photo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;