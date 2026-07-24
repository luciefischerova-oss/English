import React from 'react';
import { Users, Smile, BookOpen, MessageCircle } from 'lucide-react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Individuální přístup',
      description: 'Výuka přizpůsobená vašim potřebám a tempu učení. Každá lekce je připravena speciálně pro vás.',
    },
    {
      icon: Smile,
      title: 'Přátelská atmosféra',
      description: 'Pozitivní a podporující prostředí, kde se nemusíte bát chyb. Učení by mělo být zábava!',
    },
    {
      icon: BookOpen,
      title: 'Moderní výuka',
      description: 'Používáme nejnovější metody a materiály. Výuka je interaktivní, poutavá a efektivní.',
    },
    {
      icon: MessageCircle,
      title: 'Praktická konverzace',
      description: 'Důraz na skutečnou komunikaci. Naučíte se anglicky tak, aby vám sloužila v praxi.',
    },
  ];

  return (
    <section className={`${styles.features} section-padding`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-slide-up">Proč právě se mnou?</h2>
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Jsem věnovaná výuce angličtiny s přístupem zaměřeným na vaše úspěchy
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`card ${styles.featureCard}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;