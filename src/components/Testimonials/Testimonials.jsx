import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emma Nováková',
      role: 'Student',
      content: 'Lucia je nejlepší lektorka, kterou jsem měl. Její lekce jsou vždy zajímavé a já jsem se opravdu zlepšil v mluvení. Velmi ji doporučuji!',
      rating: 5,
    },
    {
      name: 'Jan Svoboda',
      role: 'Dospělý student',
      content: 'Vyzkoušel jsem mnoho lektorů, ale Lucia je výjimečná. Je profesionální, trpělivá a vytváří skvělou atmosféru. Jsem velmi spokojený.',
      rating: 5,
    },
    {
      name: 'Petra Kuchařová',
      role: 'Rodič',
      content: 'Moje dcera se opravdu těší na lekce s Lucií. Vidím pokrok a zlepšení v její angličtině. Díky Lucii je nyní sebevědomá v mluvení angličtiny!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" id="testimonials" role="region" aria-label="Reference">
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Co říkají moji studenti</h2>
          <p>Reálné zkušenosti a pocity mých studentů</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card testimonial-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;