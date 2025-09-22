import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-bg">
      <header>
        <img src="image.jpg" alt="Logo REMIX" className="remix-logo" />
        <h1>REMIX – Profesjonalne mycie i malowanie dachów</h1>
        <p className="subtitle">
          Firma REMIX specjalizuje się w kompleksowej renowacji dachów, oferując profesjonalne mycie, czyszczenie oraz malowanie pokryć dachowych. Dzięki doświadczeniu i nowoczesnym technologiom przywracamy dachom estetyczny wygląd oraz przedłużamy ich trwałość.
        </p>
      </header>

      <section className="about">
        <h2>Nasze usługi obejmują:</h2>
        <ul>
          <li>Dokładne mycie dachów z osadów, mchów i zabrudzeń</li>
          <li>Malowanie i impregnację dachówki oraz blachodachówki</li>
          <li>Zabezpieczenia hydrofobowe i antykorozyjne</li>
          <li>Doradztwo w zakresie doboru odpowiednich powłok ochronnych</li>
        </ul>
        <p>
          Stawiamy na rzetelność, terminowość i najwyższą jakość wykonania. Pracujemy na sprawdzonych materiałach, zapewniając dachom trwałą ochronę przed warunkami atmosferycznymi. Naszym celem jest, aby każdy dach wyglądał jak nowy – solidny, estetyczny i odporny na lata.
        </p>
      </section>

      <section className="offer">
        <h2>REMIX – Mycie i malowanie dachów</h2>
        <p>Dbamy o Twój dach tak, by wyglądał jak nowy!</p>
        <ul>
          <li>Profesjonalne mycie i czyszczenie dachów</li>
          <li>Malowanie i impregnację</li>
          <li>Zabezpieczenia przed korozją i wilgocią</li>
        </ul>
        <p>
          Działamy szybko, solidnie i z gwarancją jakości. Z nami Twój dach odzyska świeżość i trwałość na lata!
        </p>
      </section>
      <section className="gallery">
        <h2>Galeria wykonanych prac</h2>
        <div className="gallery-wrapper">
          <div className="gallery-item">
            <h3>Przed</h3>
            <img src="przed.jpg" alt="Dach przed czyszczeniem" className="gallery-photo" />
          </div>
          <div className="gallery-item">
            <h3>Po</h3>
            <img src="po.jpg" alt="Dach po czyszczeniu" className="gallery-photo" />
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Kontakt</h2>
        <p>Skontaktuj się z nami i umów darmową wycenę:</p>
        <a href="tel:+48123456789" className="btn">Zadzwoń: 123 456 789</a>
        <a href="mailto:kontakt@remix-dachy.pl" className="btn">Wyślij e-mail</a>
        <a href="https://www.facebook.com/messages/t/61581199533740" target="_blank" rel="noopener noreferrer" className="btn">Napisz na Messengerze</a>
      </section>

      <footer>
        &copy; 2025 REMIX – Mycie i malowanie dachów | Gwarancja świeżości i trwałości!
      </footer>
    </div>
  );
}

export default App;
