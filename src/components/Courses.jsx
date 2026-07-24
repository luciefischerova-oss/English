import React from 'react';
import { Check } from 'lucide-react';
import styles from './Courses.module.css';

const Courses = () => {
  const courses = [
    {
      title: 'Angličtina pro děti',
      age: '4-12 let',
      description: 'Zábavná a interaktivní výuka angličtiny. Hry, písničky a příběhy.',
      features: ['Přátelský přístup', 'Herní prvky', 'Rozvoj výslovnosti', 'Základní slovní zásoba'],
      price: 'Od 300 Kč/lekce',
    },
    {
      title: 'Angličtina pro studenty',
      age: '13-18 let',
      description: 'Příprava na testy a zkoušky. Konverzace a gramatika v praxi.',
      features: ['Příprava na zkoušky', 'Konverzace', 'Gramatika a slovní zásoba', 'Čtení a poslech'],
      price: 'Od 350 Kč/lekce',
    },
    {
      title: 'Angličtina pro dospělé',
      age: '18+ let',
      description: 'Výuka zaměřená na vaše cíle. Pracovní angličtina nebo cestovní angličtina.',
      features: ['Pracovní angličtina', 'Cestovní angličtina', 'Konverzace', 'Běžné situace'],
      price: 'Od 400 Kč/lekce',
    },
  ];

  return (
    <section className={`${styles.courses} section-padding`} id="courses">
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">Moje kurzy</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Vyběr si kurz, který vám vyhovuje
          </p>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`card ${styles.courseCard}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
                <button className="btn btn-primary btn-sm">Více informací</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;