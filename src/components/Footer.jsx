import React from 'react';
import { Mail, MessageCircle, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = 'https://wa.me/420777686465?text=Dobr%C3%BD%20den,%20m%C4%9Bla%20bych%20z%C3%A1jem%20o%20lekci%20angli%C4%8Dtiny.';

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <h3>🇬🇧 Lucia's English</h3>
            <p>Professional English tutor dedicated to helping students achieve their language goals with confidence.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:lucie@anglictina.cz">
                  <Mail size={18} />
                  lucie@anglictina.cz
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  +420 777 686 465
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.footerSection}>
            <h4>Follow Me</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" title="Twitter">
                <Twitter size={20} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Lucia's English. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;