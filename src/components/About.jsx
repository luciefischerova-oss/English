import React from 'react';
import { CheckCircle } from 'lucide-react';
import styles from './About.module.css';

const About = ({ luciaImage }) => {
  const highlights = [
    'Native English speaker with years of experience',
    'TEFL certified English teacher',
    '500+ hours of tutoring delivered',
    '150+ satisfied students',
    'Specialized in all proficiency levels',
    'Both online and in-person lessons',
  ];

  return (
    <section className={`${styles.about} section-padding`} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Image */}
          <div className={`${styles.imageWrapper} animate-slide-in-left`}>
            <div className={styles.imagePlaceholder}>
              {luciaImage && (
                <img src={luciaImage} alt="About Lucia" className={styles.aboutImage} />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className={`${styles.textContent} animate-slide-in-right`}>
            <div>
              <h2>About Me</h2>
              <p>
                Hi! I'm Lucia, a passionate English tutor dedicated to helping students of all ages achieve their language goals.
              </p>
              <p>
                With over 8 years of teaching experience, I've had the privilege of working with children, teenagers, and adults. My approach focuses on creating a supportive, judgment-free environment where learning is both effective and enjoyable.
              </p>
            </div>

            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary btn-lg">
              Schedule Your First Lesson
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;