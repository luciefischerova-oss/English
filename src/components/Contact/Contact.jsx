import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Prosím vyplňte všechna pole');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Prosím zadejte platný email');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const whatsappUrl = 'https://wa.me/420777686465?text=Dobr%C3%BD%20den,%20m%C4%9Bla%20bych%20z%C3%A1jem%20o%20lekci%20angli%C4%8Dtiny.';

  return (
    <section className="contact" id="contact" role="region" aria-label="Kontakt">
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Kontaktujte Mě</h2>
          <p>Jsem připravena odpovědět na vaše otázky a pomoci vám začít</p>
        </div>

        <div className="contact-content">
          {/* Contact Methods */}
          <div className="contact-methods animate-slide-in-left">
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg contact-button"
              aria-label="Kontaktujte mě přes WhatsApp"
            >
              <span className="whatsapp-icon">💬</span>
              <span className="button-text">
                <span className="button-label">WhatsApp</span>
                <span className="button-subtitle">+420 777 686 465</span>
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:lucie@anglictina.cz"
              className="btn contact-button email-button"
              aria-label="Pošlete mi email"
            >
              <span className="email-icon">✉</span>
              <span className="button-text">
                <span className="button-label">Email</span>
                <span className="button-subtitle">lucie@anglictina.cz</span>
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <form className="contact-form card animate-slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Vaše jméno *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jan Novák"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Váš email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jan@example.com"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Zpráva *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Napište mi vaší zprávu..."
                rows="5"
                required
                aria-required="true"
              />
            </div>

            {error && <div className="form-error" role="alert">{error}</div>}
            {submitted && <div className="form-success" role="status">✓ Zpráva byla úspěšně odeslána!</div>}

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Odeslat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;