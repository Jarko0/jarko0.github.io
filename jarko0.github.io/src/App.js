import './App.css';

const products = [
  {
    id: 1,
    title: 'Przebudzenie intuicji',
    subtitle: 'E-book dla kobiet wracających do swojej wewnętrznej prawdy',
    description:
      'Materiał, który pomaga wsłuchać się w siebie, zaufać swojej energii i otworzyć się na głębsze prowadzenie.',
    price: '49 zł',
    tag: 'Bestseller',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
  {
    id: 2,
    title: 'Manifestacja z intencją',
    subtitle: 'Praktyka kreacji w zgodzie z duszą',
    description:
      'E-book o manifestowaniu, energii intencji i świadomym tworzeniu rzeczywistości w zgodzie ze sobą.',
    price: '59 zł',
    tag: 'Nowość',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
  {
    id: 3,
    title: 'Tarot i kobieca moc',
    subtitle: 'Przewodnik po symbolice, energii i odczytach',
    description:
      'Przestrzeń do odkrywania Tarota jako lustra duszy, narzędzia transformacji i głębszego kontaktu ze sobą.',
    price: '69 zł',
    tag: 'Premium',
    cta: 'https://mrozikk.gumroad.com/l/xlohl',
  },
];

const socials = [
  {
    name: 'Instagram',
    handle: '@emilia.mrozik',
    href: 'https://www.instagram.com/',
    label: 'Codzienna energia, intuicja, kobieca moc i inspiracje do pracy ze sobą.',
  },
  {
    name: 'TikTok',
    handle: '@emilia.mrozik',
    href: 'https://www.tiktok.com/',
    label: 'Krótkie przekazy, duchowe treści i materiały o transformacji oraz intencji.',
  },
];

function Logo() {
  return (
    <svg className="brand-logo" viewBox="0 0 64 64" aria-label="Emilia Mrozik logo" role="img">
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
            <p className="eyebrow">Przestrzeń transformacji</p>
            <h1>Emilia Mrozik</h1>
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
            <p className="eyebrow">E-booki jako narzędzia transformacji</p>
            <h2>To nie jest lekki rozwój osobisty. To powrót do siebie.</h2>
            <p className="hero-text">
              Tworzę przestrzeń dla kobiet, które chcą obudzić intuicję, wrócić do swojej mocy i wejść głębiej w
              kontakt z własną energią, prawdą oraz intencją.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#produkty">
                Zobacz e-booki
              </a>
              <a className="btn btn-secondary" href="#o-mnie">
                Poznaj moją przestrzeń
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Najważniejsze informacje">
            <div className="stat-card">
              <span>Przestrzeń</span>
              <strong>Intuicja i kobieca energia</strong>
            </div>
            <div className="stat-card">
              <span>Narzędzia</span>
              <strong>Tarot, intencja, manifestacja</strong>
            </div>
            <div className="stat-card">
              <span>Forma</span>
              <strong>E-booki i odczyty</strong>
            </div>
          </aside>
        </section>

        <section className="section" id="produkty">
          <div className="section-heading">
            <p className="eyebrow">Produkty</p>
            <h2>E-booki stworzone do pracy z energią i transformacją</h2>
            <p>
              Każdy produkt możesz kupić bezpośrednio przez Gumroad. To miejsce na Twoje e-booki, boostery i
              materiały wspierające kobiecą drogę powrotu do siebie.
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
            <h2>Jestem tutaj, aby przypominać</h2>
          </div>

          <div className="about-layout single-column">
            <article className="about-card about-main-card">
              <h3>Kim jestem</h3>
              <p>
                Jestem Emilia Mrozik i od prawie 6 lat pracuję z Tarotem, energią oraz światem duchowym. Nie
                traktuję tego jako zainteresowania, ale jako mój język, mój rytm i moje naturalne środowisko.
              </p>
              <p>
                Od zawsze czułam, że istnieje coś więcej niż to, co widać. Coś cichego, pierwotnego, co porusza
                się pod powierzchnią rzeczywistości. I właśnie tam prowadzę innych, do miejsc, gdzie zaczyna się
                prawda o nich samych.
              </p>
            </article>

            <article className="about-card highlight-card">
              <h3>✧ Moja przestrzeń</h3>
              <p>Tworzę przestrzeń, w której spotykają się:</p>
              <ul>
                <li>energia kobieca i intuicja,</li>
                <li>manifestacja i kreacja rzeczywistości,</li>
                <li>Tarot jako lustro duszy,</li>
                <li>matryca losu i głębokie odczyty energii,</li>
                <li>boostery energetyczne i praca z intencją,</li>
                <li>e-booki jako narzędzia transformacji.</li>
              </ul>
              <p>
                To nie jest lekki rozwój osobisty. To powrót do siebie. Do tego, co pierwotne, dzikie i prawdziwe.
              </p>
            </article>

            <article className="about-card">
              <h3>✧ Dla kogo jestem</h3>
              <p>Ta przestrzeń jest dla Ciebie, jeśli czujesz, że:</p>
              <ul>
                <li>coś w Tobie pamięta, ale jeszcze nie zostało obudzone,</li>
                <li>pod warstwami codzienności żyje w Tobie pradawna kobieta - intuicyjna, silna i nieokiełznana.</li>
              </ul>
              <p>Szczególnie wspieram kobiety, które czują, że:</p>
              <ul>
                <li>nie chcą już być małe,</li>
                <li>nie chcą się dopasowywać,</li>
                <li>są gotowe obudzić swoją wewnętrzną moc.</li>
              </ul>
            </article>

            <article className="about-card intention-card">
              <h3>✧ Moja intencja</h3>
              <p>Nie jestem tu, aby Cię naprawiać. Nie jesteś zepsuta.</p>
              <p>
                Jestem tutaj, aby przypominać. Bo prawda jest taka, że Ty już to masz - ja tylko pomagam Ci to
                zobaczyć.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="sociale">
          <div className="section-heading">
            <p className="eyebrow">Moje sociale</p>
            <h2>Bądź blisko mojej energii i nowych treści</h2>
            <p>
              Tutaj możesz podmienić linki na swoje prawdziwe profile. Sekcja jest już gotowa pod Instagram i
              TikTok.
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