import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className={`${styles.contact} section-padding`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">Kontaktujte mě</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Mám otázky? Rád vám pomůžu
          </p>
        </div>

        <div className={styles.contactWrapper}>
          {/* Contact Info */}
          <div className={`${styles.contactInfo} animate-slide-in-left`}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>lucie@anglictina.cz</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={24} />
              </div>
              <h3>Telefon</h3>
              <p>+420 123 456 789</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={24} />
              </div>
              <h3>Lokalita</h3>
              <p>Praha, Česká republika</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className={`card ${styles.contactForm} animate-slide-in-right`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Vaše jméno</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jan Dvořák"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jan@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Zpráva</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Napište mi svou zprávu..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Odeslat zprávu
            </button>
            {submitted && <p className={styles.successMessage}>✓ Zpráva byla úspěšně odeslána!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;