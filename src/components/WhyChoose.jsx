import React from 'react';
import { Users, Zap, Award, BookOpen } from 'lucide-react';
import styles from './WhyChoose.module.css';

const WhyChoose = () => {
  const features = [
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'Each lesson is tailored to your specific needs, pace, and learning style.',
    },
    {
      icon: Zap,
      title: 'Engaging & Fun',
      description: 'Interactive lessons with games, discussions, and real-world scenarios.',
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'TEFL certified with proven results and satisfied students worldwide.',
    },
    {
      icon: BookOpen,
      title: 'Flexible Schedule',
      description: 'Book lessons at times that work for you, online or in-person.',
    },
  ];

  return (
    <section className={`${styles.whyChoose} section-padding`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">Why Choose Me?</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Experience the difference quality English instruction can make
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`card ${styles.featureCard}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;