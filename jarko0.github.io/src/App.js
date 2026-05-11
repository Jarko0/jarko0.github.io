import './App.css';

const products = [
  {
    id: 1,
    title: 'E-book Starter Pack',
    subtitle: 'Praktyczny poradnik w wersji PDF',
    description:
      'Krótki, konkretny e-book z gotowymi wskazówkami, checklistą i przykładami do wdrożenia od razu.',
    price: '49 zł',
    tag: 'Bestseller',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
  {
    id: 2,
    title: 'Social Media dla twórcy',
    subtitle: 'Jak budować markę osobistą',
    description:
      'Materiały o publikowaniu treści, planowaniu rolek i budowaniu zaangażowanej społeczności.',
    price: '59 zł',
    tag: 'Nowość',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
  {
    id: 3,
    title: 'Sprzedawaj wiedzę online',
    subtitle: 'E-book dla początkujących autorów',
    description:
      'Pomysły na sprzedaż produktów cyfrowych, przygotowanie oferty i prosty lejek sprzedażowy.',
    price: '69 zł',
    tag: 'Premium',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
];

const socials = [
  {
    name: 'Instagram',
    handle: '@twojprofil',
    href: 'https://www.instagram.com/',
    label: 'Zobacz kulisy pracy, premiery e-booków i codzienne tipy.',
  },
  {
    name: 'TikTok',
    handle: '@twojprofil',
    href: 'https://www.tiktok.com/',
    label: 'Krótkie materiały video, porady i fragmenty produktów.',
  },
];

function Logo() {
  return (
    <svg className="brand-logo" viewBox="0 0 64 64" aria-label="Bookly Studio logo" role="img">
      <rect x="8" y="10" width="20" height="44" rx="10" fill="currentColor" opacity="0.14" />
      <path
        d="M18 16c8-4 15-4 23 0v32c-8-4-15-4-23 0V16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M41 16c8-4 13-4 19 0v32c-6-4-11-4-19 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M41 16v32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function App() {
  return (
    <div className="page-shell">
      <script src="https://gumroad.com/js/gumroad.js"></script>

      <a className="skip-link" href="#main-content">
        Przejdź do treści
      </a>

      <header className="site-header">
        <div className="brand-block">
          <Logo />
          <div>
            <p className="eyebrow">Sklep autora</p>
            <h1>Bookly Studio</h1>
          </div>
        </div>

        <nav className="main-nav" aria-label="Główna nawigacja">
          <a href="#produkty">Produkty</a>
          <a href="#o-mnie">O mnie</a>
          <a href="#sociale">Moje sociale</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">E-booki, które pomagają działać</p>
            <h2>Sprzedawaj swoje produkty cyfrowe na nowoczesnej i responsywnej stronie.</h2>
            <p className="hero-text">
              Masz tutaj gotowy frontend z sekcją produktów, zakładką o autorze i linkami do social mediów.
              Całość jest przygotowana pod mobile i desktop.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#produkty">
                Zobacz e-booki
              </a>
              <a className="btn btn-secondary" href="#o-mnie">
                Poznaj autora
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Najważniejsze informacje">
            <div className="stat-card">
              <span>Format</span>
              <strong>PDF / digital</strong>
            </div>
            <div className="stat-card">
              <span>Sprzedaż</span>
              <strong>Gumroad</strong>
            </div>
            <div className="stat-card">
              <span>Dostęp</span>
              <strong>24/7 online</strong>
            </div>
          </aside>
        </section>

        <section className="section" id="produkty">
          <div className="section-heading">
            <p className="eyebrow">Produkty</p>
            <h2>Twoje e-booki w czytelnym układzie</h2>
            <p>
              Każda karta produktu ma opis, cenę i przycisk zakupu prowadzący bezpośrednio do Gumroad.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <span className="pill">{product.tag}</span>
                <h3>{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                <p>{product.description}</p>
                <div className="product-footer">
                  <strong>{product.price}</strong>
                  <a
                    className="btn btn-primary gumroad-button"
                    href={product.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kup teraz
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="o-mnie">
          <div className="section-heading narrow">
            <p className="eyebrow">O mnie</p>
            <h2>Poznaj autora i historię stojącą za e-bookami</h2>
          </div>

          <div className="about-layout">
            <article className="about-card">
              <h3>Kim jest autor?</h3>
              <p>
                Jestem twórcą produktów cyfrowych i dzielę się wiedzą w prosty, praktyczny sposób. Tworzę
                materiały, które pomagają szybciej ruszyć z własnym projektem, marką albo sprzedażą online.
              </p>
              <p>
                W moich e-bookach stawiam na konkret: mniej teorii, więcej przykładów, checklist i gotowych
                rozwiązań do wdrożenia od razu.
              </p>
            </article>

            <article className="about-card highlight-card">
              <h3>Co znajdziesz w środku?</h3>
              <ul>
                <li>praktyczne instrukcje krok po kroku,</li>
                <li>proste strategie do wdrożenia,</li>
                <li>materiały dla osób, które chcą zarabiać na wiedzy.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="sociale">
          <div className="section-heading">
            <p className="eyebrow">Moje sociale</p>
            <h2>Bądź na bieżąco z nowymi materiałami</h2>
            <p>
              Tutaj możesz dodać swoje prawdziwe linki do Instagrama i TikToka. Na ten moment zostawiłem gotowe
              miejsce do podmiany.
            </p>
          </div>

          <div className="social-grid">
            {socials.map((social) => (
              <a
                key={social.name}
                className="social-card"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <p className="social-name">{social.name}</p>
                  <p className="social-handle">{social.handle}</p>
                </div>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;