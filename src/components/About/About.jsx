import React from 'react';
import './About.css';

const About = ({ image }) => {
  return (
    <section className="about" id="about" role="region" aria-label="O mně">
      <div className="container">
        <div className="about-content">
          {/* Image */}
          <div className="about-image animate-slide-in-left">
            <div className="circular-image">
              {image && (
                <img src={image} alt="Lucia - lektorka angličtiny" className="profile-circular" />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="about-text animate-slide-in-right">
            <h2>O mně</h2>
            <p>
              Jsem Lucia, nadšená lektorka angličtiny s více než 8 lety zkušeností v pedagogické práci. Mojím cílem je vytvořit podpůrné a bezpečné prostředí, kde se každý student cítí sebevědomě.
            </p>
            <p>
              Specialistuji se na individuální přístup, který se přizpůsobuje vašim potřebám, tempu učení a osobním cílům. Ať už se chcete zlepšit pro zkoušku, pro práci nebo jen pro osobní rozvoj, jsem tu pro vás.
            </p>
            <p>
              Mám certifikaci TEFL a vysokoškolské vzdělání v oboru anglické filologie. Neustále se vzdělávám a zlepšuji své dovednosti, abych vám poskytla tu nejlepší výuku.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Hodin výuky</p>
              </div>
              <div className="stat">
                <h4>150+</h4>
                <p>Spokojených studentů</p>
              </div>
              <div className="stat">
                <h4>8+</h4>
                <p>Let zkušeností</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;