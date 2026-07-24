import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const whatsappUrl = 'https://wa.me/420777686465?text=Dobr%C3%BD%20den,%20m%C4%9Bla%20bych%20z%C3%A1jem%20o%20lekci%20angli%C4%8Dtiny.';

  return (
    <section className={`${styles.contact} section-padding`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">Get In Touch</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ready to start your English learning journey?
          </p>
        </div>

        <div className={styles.contactWrapper}>
          {/* Contact Methods */}
          <div className={`${styles.contactMethods} animate-slide-in-left`}>
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-whatsapp btn-lg ${styles.contactButton}`}
            >
              <MessageCircle size={24} />
              <span>
                <strong>WhatsApp</strong>
                <small>+420 777 686 465</small>
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:lucie@anglictina.cz"
              className={`btn ${styles.emailButton} ${styles.contactButton}`}
            >
              <Mail size={24} />
              <span>
                <strong>Email</strong>
                <small>lucie@anglictina.cz</small>
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <form className={`card ${styles.contactForm} animate-slide-in-right`} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
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
                placeholder="john@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your English learning goals..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Send Message
            </button>
            {submitted && <p className={styles.successMessage}>✓ Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;