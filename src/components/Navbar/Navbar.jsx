import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Domů', href: '#home' },
    { label: 'Kurzy', href: '#courses' },
    { label: 'O mně', href: '#about' },
    { label: 'Reference', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Hlavní navigace">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" aria-label="Domů">
          <span className="logo-emoji">🇬🇧</span>
          <span className="logo-text">Angličtina s Lucií</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Přepnout navigaci"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <button className="btn btn-primary btn-sm">Rezervovat lekci</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-menu-mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link-mobile"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Rezervovat lekci
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;