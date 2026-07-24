import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emma Rodriguez',
      role: 'Student',
      content: 'Lucia is an amazing teacher! Her lessons are always engaging and she really understands how to help me improve my English.',
      rating: 5,
    },
    {
      name: 'John Smith',
      role: 'Adult Learner',
      content: 'I\'ve tried many English tutors, but Lucia is by far the best. She\'s professional, patient, and makes learning fun.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      role: 'Parent',
      content: 'My daughter loves her lessons with Lucia. She\'s more confident speaking English now. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section className={`${styles.testimonials} section-padding`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">What Students Say</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Don't just take our word for it
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card ${styles.testimonialCard}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.stars}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className={styles.star} />
                ))}
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;