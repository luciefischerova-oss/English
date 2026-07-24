import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = 'https://wa.me/420777686465?text=Dobr%C3%BD%20den,%20m%C4%9Bla%20bych%20z%C3%A1jem%20o%20lekci%20angli%C4%8Dtiny.';

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <h3>🇬🇧 Angličtina s Lucií</h3>
            <p>Profesionální výuka angličtiny s fokusem na vaši úspěšnost a sebevědomost.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Navigace</h4>
            <nav aria-label="Patička - navigace">
              <ul>
                <li><a href="#home">Domů</a></li>
                <li><a href="#courses">Kurzy</a></li>
                <li><a href="#about">O mně</a></li>
                <li><a href="#testimonials">Reference</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="mailto:lucie@anglictina.cz" aria-label="Email na Lucii">✉ lucie@anglictina.cz</a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp na Lucii">💬 +420 777 686 465</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4>Sledujte mě</h4>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" title="LinkedIn">in</a>
              <a href="#" aria-label="Facebook" title="Facebook">f</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">w</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Angličtina s Lucií. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;