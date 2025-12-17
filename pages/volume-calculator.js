import { useCallback, useState } from 'react';

function Header({ isNavOpen, onToggleNav }) {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="pill pill-outline">Branches: Cape Town · Durban · Johannesburg</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+27210360333">021 036 0333</a>
            <span className="divider" />
            <a href="tel:+27315691451">031 569 1451</a>
            <span className="divider" />
            <a href="tel:+27113877000">011 387 7000</a>
          </div>
        </div>
      </div>

      <header className={`site-header${isNavOpen ? ' is-open' : ''}`}>
        <div className="container header-inner">
          <a href="/" className="logo">
            <div className="logo-mark">FF</div>
            <div className="logo-text">
              <span className="logo-title">First Freight</span>
              <span className="logo-subtitle">Regional &amp; Cross‑Border Logistics</span>
            </div>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            onClick={onToggleNav}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="nav" aria-label="Main navigation">
            <ul>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#tools">Online Tools</a>
              </li>
              <li>
                <a href="/#sectors">Our Customers</a>
              </li>
              <li>
                <a href="/#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/#branches">Branches</a>
              </li>
              <li>
                <a href="/#quote">30‑Day Account</a>
              </li>
            </ul>
            <div className="nav-cta">
              <a href="/#track" className="btn btn-ghost">
                Track Parcel
              </a>
              <a href="/get-a-quote" className="btn btn-primary">
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo-mark small">FF</div>
          <div>
            <p className="footer-title">First Freight</p>
            <p className="footer-tagline">Courier, freight &amp; warehousing solutions across Southern Africa.</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-heading">Quick links</p>
            <a href="/">Home</a>
            <a href="/#tools">Online Tools</a>
            <a href="/get-a-quote">Get a Quote</a>
            <a href="/#quote">30‑Day Account</a>
          </div>
          <div>
            <p className="footer-heading">Compliance</p>
            <a href="https://firstfreight.co.za" target="_blank" rel="noreferrer">
              Disclaimer &amp; T&apos;s &amp; C&apos;s
            </a>
            <a href="https://sacoronavirus.co.za" target="_blank" rel="noreferrer">
              COVID‑19 Info
            </a>
          </div>
        </div>
        <div className="footer-meta">
          <p>© 2025 First Freight. All rights reserved.</p>
          <p className="footer-small">
            Volumetric calculator inspired by the original tool at{' '}
            <a href="https://firstfreight.co.za/volume-calculator/" target="_blank" rel="noreferrer">
              firstfreight.co.za/volume-calculator
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function VolumeCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [actualWeight, setActualWeight] = useState('');

  const parseNumber = (value) => {
    const num = parseFloat(String(value).replace(',', '.'));
    return Number.isNaN(num) ? 0 : num;
  };

  const getResults = () => {
    const l = parseNumber(length);
    const w = parseNumber(width);
    const h = parseNumber(height);
    const q = parseNumber(quantity) || 1;
    const actual = parseNumber(actualWeight);

    const volumeCm3 = l * w * h * q;
    const volumeM3 = volumeCm3 / 1_000_000;
    const volumetricKg = volumeCm3 / 5_000; // industry-standard divisor used by many couriers
    const chargeableKg = Math.max(actual || 0, volumetricKg);

    return {
      volumeM3,
      volumetricKg,
      chargeableKg,
    };
  };

  const { volumeM3, volumetricKg, chargeableKg } = getResults();

  const handlePreset = useCallback((l, w, h) => {
    setLength(String(l));
    setWidth(String(w));
    setHeight(String(h));
  }, []);

  return (
    <section className="section animate-section">
      <div className="container quote-layout">
        <div className="quote-intro">
          <span className="pill pill-solid">Online Tool</span>
          <h1>Volume &amp; volumetric weight calculator</h1>
          <p>
            Use this tool to estimate the volume and volumetric (chargeable) weight of your shipment. Enter
            the dimensions in centimetres as they will be packed for collection.
          </p>
          <ul className="bullet-list">
            <li>Works for cartons, crates and pallets</li>
            <li>Uses a 5&nbsp;000 divisor for volumetric kilograms</li>
            <li>Compares volumetric and actual weight to show chargeable weight</li>
          </ul>

          <div className="bullet-list" style={{ marginTop: '1rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              Quick presets
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => handlePreset(40, 30, 20)}
              >
                Small box (40×30×20)
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => handlePreset(60, 40, 40)}
              >
                Medium box (60×40×40)
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => handlePreset(120, 100, 80)}
              >
                Pallet (120×100×80)
              </button>
            </div>
          </div>
        </div>

        <div className="card quote-form" aria-label="Volume calculator">
          <div className="form-grid">
            <label className="field">
              <span>Length (cm)*</span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
              />
            </label>
            <label className="field">
              <span>Breadth (cm)*</span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Height (cm)*</span>
              <input
                type="number"
                min={0}
                step={0.1}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </label>
            <label className="field">
              <span>Number of pieces*</span>
              <input
                type="number"
                min={1}
                step={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </label>
          </div>

          <label className="field">
            <span>Actual weight (kg) – optional</span>
            <input
              type="number"
              min={0}
              step={0.1}
              placeholder="e.g. 18.5"
              value={actualWeight}
              onChange={(e) => setActualWeight(e.target.value)}
            />
          </label>

          <div className="card" style={{ marginTop: '1.2rem', background: 'rgba(0,0,0,0.8)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.6rem' }}>Results</h3>
            <p className="helper-text" style={{ marginBottom: '0.8rem' }}>
              Values are approximate and for guidance only. Final chargeable weight will be confirmed on
              booking.
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Volume</strong>: {volumeM3 ? volumeM3.toFixed(3) : '0.000'} m³
              </li>
              <li>
                <strong>Volumetric weight</strong>: {volumetricKg ? volumetricKg.toFixed(1) : '0.0'} kg
              </li>
              <li>
                <strong>Chargeable weight</strong> (max of actual vs volumetric):{' '}
                {chargeableKg ? chargeableKg.toFixed(1) : '0.0'} kg
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VolumeCalculatorPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((open) => !open);
  }, []);

  return (
    <>
      <Header isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />
      <main>
        <VolumeCalculator />
      </main>
      <Footer />
    </>
  );
}

