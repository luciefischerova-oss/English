import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      icon: '🇬🇧',
      title: 'Angličtina pro děti',
      description: 'Zábavná a interaktivní výuka s hrami, písničkami a příběhy. Ideální pro začínající učence od 4 let.',
      features: ['Věková skupina: 4-12 let', 'Hravý přístup', 'Základní komunikace'],
    },
    {
      icon: '📚',
      title: 'Angličtina pro studenty',
      description: 'Příprava na zkoušky a test. Fokus na mluvení, poslouchání, čtení a psaní s praktickými cvičeními.',
      features: ['Věková skupina: 13-18 let', 'Příprava na testy', 'Konverzace'],
    },
    {
      icon: '💼',
      title: 'Angličtina pro dospělé',
      description: 'Kurzy zaměřené na pracovní angličtinu nebo obecné zlepšení. Přizpůsobeno vašim konkrétním cílům.',
      features: ['Věková skupina: 18+', 'Pracovní angličtina', 'Flexibilní program'],
    },
  ];

  return (
    <section className="courses" id="courses" role="region" aria-label="Kurzy">
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Moje Kurzy</h2>
          <p>Vyberte si kurz, který odpovídá vašim potřebám</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={index}
              className="card course-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <ul className="course-features">
                {course.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Více informací
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;