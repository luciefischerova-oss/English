import "./App.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🇬🇧 Angličtina s Lucií</div>

        <ul className="menu">
          <li><a href="#kurzy">Kurzy</a></li>
          <li><a href="#omne">O mně</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>

        <a className="cta" href="#kontakt">
          Rezervovat lekci
        </a>
      </nav>

      <header className="hero">
        <div className="hero-left">
          <span className="badge">Online i osobně</span>

          <h1>Naučte se anglicky s jistotou.</h1>

          <p>
            Individuální lekce angličtiny pro děti, studenty i dospělé.
            Přátelská atmosféra, moderní výuka a zaměření na skutečnou
            komunikaci.
          </p>

          <div className="hero-buttons">
            <a className="primary" href="#kontakt">
              Rezervovat lekci
            </a>

            <a className="secondary" href="#kurzy">
              Zobrazit kurzy
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="card">
            <div className="emoji">🇬🇧</div>
            <h3>Mluvte sebevědomě.</h3>
            <p>
              Praktická angličtina pro každodenní život, školu i práci.
            </p>
          </div>
        </div>
      </header>

      <section id="kurzy" className="section">
        <h2>Kurzy</h2>

        <div className="cards">
          <article className="course">
            <h3>🧒 Děti</h3>
            <p>Hravá výuka přizpůsobená věku dítěte.</p>
          </article>

          <article className="course">
            <h3>🎓 Studenti</h3>
            <p>Příprava do školy, na maturitu i zkoušky.</p>
          </article>

          <article className="course">
            <h3>💼 Dospělí</h3>
            <p>Konverzace, cestování i pracovní angličtina.</p>
          </article>
        </div>
      </section>

      <section id="kontakt" className="section contact">
        <h2>Rezervujte si první lekci</h2>

        <p>
          Napište mi a společně vybereme kurz, který bude vyhovovat právě vám.
        </p>

        <a className="primary" href="mailto:info@example.com">
          Kontaktovat mě
        </a>
      </section>
    </>
  );
}
