import "./App.css";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">🇬🇧 Angličtina s Lucií</div>

        <div className="menu">
          <a href="#kurzy">Kurzy</a>
          <a href="#omne">O mně</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <button className="navButton">Rezervovat lekci</button>
      </nav>

      <header className="hero">
        <div className="heroText">
          <h1>Naučte se anglicky s jistotou.</h1>

          <p>
            Individuální výuka angličtiny pro děti, studenty i dospělé.
            Přátelská atmosféra, moderní metody a výuka přizpůsobená vašim
            cílům.
          </p>

          <div className="buttons">
            <button>Rezervovat lekci</button>
            <button className="secondary">Nabídka kurzů</button>
          </div>
        </div>

        <div className="heroImage">
          <div className="card">
            <span>🇬🇧</span>
            <h3>English made easy</h3>
            <p>Mluvte anglicky sebevědomě.</p>
          </div>
        </div>
      </header>
    </div>
  );
}
