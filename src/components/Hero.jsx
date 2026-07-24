import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} section-padding`}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.textContent}>
            <h1 className={`${styles.title} animate-slide-in-left`}>
              Naučte se anglicky s jistotou.
            </h1>
            <p className={`${styles.subtitle} animate-slide-in-left`} style={{ animationDelay: '0.1s' }}>
              Individuální výuka angličtiny pro děti, studenty i dospělé. Online i osobně.
            </p>
            <div className={styles.buttonGroup}>
              <button className="btn btn-primary btn-lg animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Rezervovat lekci
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary btn-lg animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Nabídka kurzů
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className={`${styles.illustration} animate-slide-in-right`}>
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.illustrationSvg}
            >
              {/* Background Circle */}
              <circle cx="200" cy="200" r="180" fill="#f3f4f6" />
              <circle cx="200" cy="200" r="160" fill="#ffffff" />

              {/* Gradient Circle */}
              <circle cx="200" cy="200" r="150" fill="url(#gradientCircle)" opacity="0.1" />
              <defs>
                <linearGradient id="gradientCircle" x1="0" y1="0" x2="400" y2="400">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>

              {/* Book/Document Icon */}
              <rect x="140" y="80" width="120" height="150" rx="8" fill="#2563EB" />
              <line x1="160" y1="120" x2="240" y2="120" stroke="white" strokeWidth="2" />
              <line x1="160" y1="150" x2="240" y2="150" stroke="white" strokeWidth="2" />
              <line x1="160" y1="180" x2="220" y2="180" stroke="white" strokeWidth="2" />
              <line x1="160" y1="210" x2="240" y2="210" stroke="white" strokeWidth="2" />

              {/* Speech Bubble */}
              <circle cx="280" cy="280" r="50" fill="#3b82f6" />
              <circle cx="280" cy="280" r="45" fill="#2563EB" />
              <path d="M 270 310 L 280 330 L 290 310" fill="#2563EB" />
              <text x="280" y="290" fontSize="28" fill="white" textAnchor="middle" fontWeight="bold">
                🎧
              </text>

              {/* Decorative Elements */}
              <circle cx="100" cy="100" r="8" fill="#3b82f6" opacity="0.5" />
              <circle cx="320" cy="120" r="6" fill="#3b82f6" opacity="0.3" />
              <circle cx="90" cy="280" r="7" fill="#3b82f6" opacity="0.4" />
              <circle cx="330" cy="320" r="5" fill="#3b82f6" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;