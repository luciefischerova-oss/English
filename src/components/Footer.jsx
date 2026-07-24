import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <h3>🇬🇧 Angličtina s Lucií</h3>
            <p>Profesionální výuka angličtiny pro všechny věkové kategorie.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Navigace</h4>
            <ul>
              <li>
                <a href="#home">Domů</a>
              </li>
              <li>
                <a href="#courses">Kurzy</a>
              </li>
              <li>
                <a href="#about">O mně</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="mailto:lucie@anglictina.cz">
                  <Mail size={18} />
                  lucie@anglictina.cz
                </a>
              </li>
              <li>
                <a href="tel:+420123456789">+420 123 456 789</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.footerSection}>
            <h4>Sociální sítě</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" title="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:lucie@anglictina.cz" aria-label="Email" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Angličtina s Lucií. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;