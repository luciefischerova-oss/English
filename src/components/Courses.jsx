import React from 'react';
import { Check } from 'lucide-react';
import styles from './Courses.module.css';

const Courses = () => {
  const courses = [
    {
      title: 'English for Kids',
      age: '4-12 years',
      description: 'Fun and interactive English lessons with games, songs, and stories.',
      features: ['Friendly approach', 'Game-based learning', 'Pronunciation focus', 'Basic vocabulary'],
      price: '$20/hour',
    },
    {
      title: 'English for Students',
      age: '13-18 years',
      description: 'Exam preparation and practical conversation skills for teens.',
      features: ['Exam preparation', 'Conversation practice', 'Grammar & vocabulary', 'Reading & listening'],
      price: '$25/hour',
      featured: true,
    },
    {
      title: 'English for Adults',
      age: '18+ years',
      description: 'Tailored lessons for your goals: business, travel, or general proficiency.',
      features: ['Business English', 'Travel English', 'Conversation skills', 'Real-world scenarios'],
      price: '$30/hour',
    },
  ];

  return (
    <section className={`${styles.courses} section-padding`} id="courses">
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">My Courses</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Choose the course that fits your needs
          </p>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`card ${styles.courseCard} ${course.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.featured && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.courseHeader}>
                <h3>{course.title}</h3>
                <span className={styles.age}>{course.age}</span>
              </div>
              <p className={styles.description}>{course.description}</p>
              <ul className={styles.featuresList}>
                {course.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                <p className={styles.price}>{course.price}</p>
                <button className="btn btn-primary btn-sm">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;