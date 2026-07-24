import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.about} section-padding`} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Image Placeholder */}
          <div className={`${styles.imageWrapper} animate-slide-in-left`}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.emoji}>👨‍🏫</span>
            </div>
          </div>

          {/* Text Content */}
          <div className={`${styles.textContent} animate-slide-in-right`}>
            <h2>O mně</h2>
            <p>
              Jmenuji se Lucie a angličtina je moje vášeň. Učím angličtinu již více než 8 let a mám zkušenosti s
              učením dětí, studentů i dospělých.
            </p>
            <p>
              Věřím, že každý může být v angličtině úspěšný. Mým cílem je vytvořit takové prostředí, kde se nemusíte
              bát chyb a kde se angličtina učíte přirozeně a efektivně.
            </p>
            <p>
              Jsem držitelkou certifikátu TEFL a mám vysokoškolské vzdělání v oboru anglické filologie. Neustále se
              vzdělávám a zlepšuji své dovednosti, abych vám mohla poskytnout tu nejlepší výuku.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <h4>500+</h4>
                <p>Hodin výuky</p>
              </div>
              <div className={styles.stat}>
                <h4>150+</h4>
                <p>Spokojených studentů</p>
              </div>
              <div className={styles.stat}>
                <h4>8+</h4>
                <p>Let zkušeností</p>
              </div>
            </div>

            <button className="btn btn-primary btn-lg">
              Zarezervujte si lekci
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;