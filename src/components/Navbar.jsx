import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🇬🇧</span>
          <span className={styles.logoText}>Lucia's English</span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="btn btn-primary btn-sm">
          Get Started
        </a>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={styles.mobileMenuLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;