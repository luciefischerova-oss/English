import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Domů', href: '#home' },
    { label: 'Kurzy', href: '#courses' },
    { label: 'O mně', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🇬🇧</span>
          <span className={styles.logoText}>Angličtina s Lucií</span>
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
        <button className="btn btn-primary btn-sm">
          Rezervovat lekci
        </button>

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
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Rezervovat lekci
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;