import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '✓',
      title: 'Individuální přístup',
      description: 'Každá lekce je připravena speciálně pro vás. Učím se podle vašeho tempa a stylů učení.',
    },
    {
      icon: '✓',
      title: 'Přátelská atmosféra',
      description: 'Vytváříme bezpečné prostředí bez stresu. Chyby jsou součást učení a jsou vítány.',
    },
    {
      icon: '✓',
      title: 'Praktická konverzace',
      description: 'Fokus na skutečné komunikaci a praktické situace, které využijete v reálném životě.',
    },
    {
      icon: '✓',
      title: 'Online i osobně',
      description: 'Flexibilita volby - online lekce nebo osobně podle vašich preferencí a potřeb.',
    },
  ];

  return (
    <section className="benefits" role="region" aria-label="Proč si vybrat mě">
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Proč si vybrat mě?</h2>
          <p>Sedm let zkušeností v profesionální výuce angličtiny</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card benefit-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;