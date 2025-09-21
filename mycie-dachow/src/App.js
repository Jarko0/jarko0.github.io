import './App.css';

function App() {
  return (
    <div className="main-bg">
      <header>
        <h1>Profesjonalne Mycie Dachów i Prace Wysokościowe</h1>
        <p className="subtitle">Zadbaj o swój dom — powierz dach i elewację specjalistom</p>
      </header>
      <section className="services">
        <h2>Zakres usług</h2>
        <ul>
          <li>Mycie dachów (blachodachówka, dachówka, gont) — usuwanie mchu, brudu, osadów</li>
          <li>Czyszczenie i impregnacja elewacji</li>
          <li>Mycie i udrażnianie rynien</li>
          <li>Usuwanie śniegu i sopli z dachów w sezonie zimowym</li>
          <li>Mycie kostki brukowej i ogrodzeń</li>
          <li>Prace alpinistyczne (prace na wysokości z użyciem lin)</li>
          <li>Impregnacja dachów i powierzchni pionowych</li>
          <li>Usuwanie graffiti i trudnych zabrudzeń</li>
          <li>Naprawy drobnych usterek dekarskich (uszczelnienia, wymiana dachówek)</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Kontakt</h2>
        <p>Umów się na wycenę lub zapytaj o usługę:</p>
        <a href="tel:+48123456789" className="btn">Zadzwoń: 123 456 789</a>
        <a href="mailto:kontakt@myciedachu.pl" className="btn">Wyślij e-mail</a>
        <a href="https://m.me/mysmycie" target="_blank" rel="noopener noreferrer" className="btn">Napisz na Messengerze</a>
        <p style={{marginTop: 16}}>Działamy w województwie Lubelskim i okolicach!</p>
      </section>
      <footer>
        &copy; 2025 Mycie Dachów pro | Bezpłatna wycena | Strona na GitHub Pages
      </footer>
    </div>
  );
}

export default App;
