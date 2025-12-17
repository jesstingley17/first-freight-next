import { useCallback, useEffect, useMemo, useState } from 'react';

function Header({ isNavOpen, onToggleNav }) {
  return (
    <>
      {/* Top Contact Bar */}
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

      {/* Site Header */}
      <header className={`site-header${isNavOpen ? ' is-open' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="logo">
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
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tools">Online Tools</a>
              </li>
              <li>
                <a href="#sectors">Our Customers</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#branches">Branches</a>
              </li>
              <li>
                <a href="#quote">Get a Quote</a>
              </li>
            </ul>
            <div className="nav-cta">
              <a href="#track" className="btn btn-ghost">
                Track Parcel
              </a>
              <a href="#quote" className="btn btn-primary">
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

function Hero({ onOpenQuote, onSubmitTrack }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-pill-row">
            <span className="pill pill-solid">
              Available to all major regional &amp; international areas
            </span>
            <span className="hero-badge">Same Day · Overnight · Economy / Road Freight</span>
          </div>
          <h1>Reliable courier &amp; freight solutions across Southern Africa.</h1>
          <p className="hero-subtitle">
            Dedicated road and air freight, warehousing and cross‑border logistics with a personal,
            family‑orientated service. From urgent medical deliveries to full truck loads – we get it
            there.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary btn-lg" onClick={onOpenQuote}>
              Get a Business Quote
            </a>
            <a href="#track" className="btn btn-secondary btn-lg">
              Track My Parcel
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Key Hubs</span>
              <span className="meta-value">Cape Town · Durban · Johannesburg</span>
            </div>
            <div>
              <span className="meta-label">Services</span>
              <span className="meta-value">Same Day · Overnight · Economy Road · Cross‑Border</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="card hero-card" id="track">
            <h2>Track your parcel</h2>
            <p>Enter your waybill or tracking number to see the latest status.</p>
            <form
              className="stack-sm"
              aria-label="Track parcel form"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const tracking = data.get('tracking-number');
                onSubmitTrack(typeof tracking === 'string' ? tracking : '');
              }}
            >
              <label className="field">
                <span>Tracking Number</span>
                <input type="text" name="tracking-number" placeholder="e.g. FF123456789" />
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                Track Parcel
              </button>
              <p className="helper-text">
                Online tracking coming soon.&nbsp;
                <span className="highlight">Contact your nearest branch for live assistance.</span>
              </p>
            </form>
          </div>
          <div className="card hero-card subtle">
            <h3>Need an account?</h3>
            <p>
              Apply for a <strong>30‑day account</strong> and unlock preferential business rates, online
              tools and customised reporting.
            </p>
            <a href="#quote" className="btn-link" onClick={onOpenQuote}>
              Apply for an account →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section animate-section">
      <div className="container section-header">
        <div>
          <h2>Courier &amp; freight services</h2>
          <p>
            From envelopes to full truck loads, across town or across borders – we build the right mix of
            services to match your operation.
          </p>
        </div>
        <div className="chips">
          <span className="chip">Road Freight</span>
          <span className="chip">Air Freight</span>
          <span className="chip">Warehousing</span>
          <span className="chip">Cross‑Border</span>
          <span className="chip">Medical</span>
        </div>
      </div>

      <div className="container card-grid">
        <article className="card service-card">
          <h3>Road Freight</h3>
          <p>
            Dedicated or break‑bulk truckloads from Cape Town, Durban and Johannesburg to all major and
            outlying cities across South Africa and neighbouring countries.
          </p>
          <ul>
            <li>Economy / road freight</li>
            <li>Inter‑branch (IBT) transfers</li>
            <li>Retail deliveries &amp; reverse logistics</li>
          </ul>
        </article>

        <article className="card service-card">
          <h3>Air Freight</h3>
          <p>
            When time is critical, we move your cargo on the first available flight with proactive updates
            from collection to delivery.
          </p>
          <ul>
            <li>Same Day Express – collection within 60 minutes</li>
            <li>Overnight Express – delivery by 10:00 the next working day</li>
            <li>Normal Cargo – next business day delivery</li>
          </ul>
        </article>

        <article className="card service-card">
          <h3>Warehousing</h3>
          <p>
            Flexible storage and handling solutions integrated with our distribution network to streamline
            your supply chain.
          </p>
          <ul>
            <li>Short and long‑term storage</li>
            <li>Pick, pack &amp; dispatch</li>
            <li>Integrated stock visibility</li>
          </ul>
        </article>

        <article className="card service-card">
          <h3>Cross‑Border</h3>
          <p>
            Overland services to BLNS and neighbouring countries, from single pallets to full loads with
            tailored routing.
          </p>
          <ul>
            <li>Planned line‑haul and dedicated trucks</li>
            <li>Customs coordination support</li>
            <li>Flexible solutions for big or small consignments</li>
          </ul>
        </article>

        <article className="card service-card">
          <h3>Medical Logistics</h3>
          <p>
            High‑precision distribution between laboratories, hospitals, clinics and healthcare facilities,
            with a focus on urgency and care.
          </p>
          <ul>
            <li>Time‑sensitive emergency deliveries</li>
            <li>Dedicated handling procedures</li>
            <li>Reliable, repeat routes for healthcare groups</li>
          </ul>
        </article>

        <article className="card service-card">
          <h3>In‑house Freight Management</h3>
          <p>
            A complete software and onsite operator package to manage your warehouse and distribution
            operation, tailored to your volume.
          </p>
          <ul>
            <li>Free software &amp; training</li>
            <li>On‑site operator (for qualifying clients)</li>
            <li>Optimised routing &amp; cost visibility</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="section section-alt animate-section">
      <div className="container section-header">
        <div>
          <h2>Online tools that work with you</h2>
          <p>
            Empower your team with quick quotes, online tracking and tools that simplify day‑to‑day
            operations.
          </p>
        </div>
      </div>

      <div className="container card-grid tools-grid">
        <article className="card tool-card">
          <h3>Get a Quote</h3>
          <p>
            Share your requirements and our team will respond with a tailored rate structure for your
            business.
          </p>
          <a href="#quote" className="btn-link">
            Request a quote →
          </a>
        </article>

        <article className="card tool-card">
          <h3>Track Parcel</h3>
          <p>
            Use your waybill number to view the latest scan events and delivery status of your shipment.
          </p>
          <a href="#track" className="btn-link">
            Track a parcel →
          </a>
        </article>

        <article className="card tool-card">
          <h3>Online Customers</h3>
          <p>
            Business customers can access statements, PODs and shipment history via our secure online
            portal.
          </p>
          <span className="pill pill-outline small">Portal access for account customers</span>
        </article>

        <article className="card tool-card">
          <h3>Agent Portal</h3>
          <p>Tools and visibility for our agent network across South Africa and neighbouring countries.</p>
          <span className="pill pill-outline small">For approved agents</span>
        </article>

        <article className="card tool-card">
          <h3>Volume Calculator</h3>
          <p>Quickly estimate volumetric and chargeable weight for your shipments before booking.</p>
          <button className="btn btn-ghost btn-sm" type="button" disabled>
            Coming soon
          </button>
        </article>

        <article className="card tool-card highlight">
          <h3>30‑Day Account</h3>
          <p>
            Apply for a 30‑day account and simplify billing with consolidated invoices and agreed rates.
          </p>
          <a href="#quote" className="btn btn-primary btn-sm">
            Apply now
          </a>
        </article>
      </div>
    </section>
  );
}

function SectorsSection() {
  return (
    <section id="sectors" className="section animate-section">
      <div className="container section-header">
        <div>
          <h2>Trusted by leading South African retailers &amp; brands</h2>
          <p>
            We support national roll‑outs, store replenishment and reverse logistics for major retail groups
            and e‑commerce brands.
          </p>
        </div>
      </div>

      <div className="container brands-row">
        <span className="brand-pill">Foschini</span>
        <span className="brand-pill">Shoprite</span>
        <span className="brand-pill">Superbalist</span>
        <span className="brand-pill">Pick n Pay</span>
        <span className="brand-pill">Mr Price</span>
        <span className="brand-pill">Jumbo</span>
        <span className="brand-pill">Massmart</span>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section-alt animate-section">
      <div className="container section-header">
        <div>
          <h2>What our customers say</h2>
          <p>
            A personalised, family‑orientated team with the scale and expertise to move what matters most to
            your business.
          </p>
        </div>
      </div>

      <div className="container card-grid testimonials-grid">
        <article className="card testimonial-card">
          <p className="quote">
            “I highly recommend them as they have a personalised service and a very family‑orientated feel
            that makes day‑to‑day dealings easy and hassle free. Their attention to detail and prompt
            feedback enhances a smoother supply chain for us. They have out‑performed our previous logistics
            service provider of 23 years.”
          </p>
          <div className="testimonial-meta">
            <span className="name">Loriana Trisolino</span>
            <span className="role">Operations Manager | Accessories Spares Centre</span>
          </div>
        </article>

        <article className="card testimonial-card">
          <p className="quote">
            “When it comes to excellent service at competitive pricing, nobody can come close to First
            Freight. Whether it is regarding a revision of rates or a large‑volume, last‑minute collection
            that had to be dispatched on the day, they have always come through for us and supported us
            immensely while we were growing.”
          </p>
          <div className="testimonial-meta">
            <span className="name">Preshanthan Reddy</span>
            <span className="role">Operations Manager | Central Medical</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function BranchesSection() {
  return (
    <section id="branches" className="section animate-section">
      <div className="container section-header">
        <div>
          <h2>Talk to a branch that understands your region</h2>
          <p>
            Our teams in Cape Town, Durban and Johannesburg understand the realities of local and regional
            distribution – and are ready to help.
          </p>
        </div>
      </div>

      <div className="container branches-grid">
        <article className="card branch-card">
          <h3>Cape Town</h3>
          <p className="branch-phone">
            <a href="tel:+27210360333">021 036 0333</a>
          </p>
          <p className="branch-address">57 Mobile Road, Boquinar Industrial Area, 7490</p>
          <p className="branch-email">
            <a href="mailto:sales@firstfreightcpt.co.za">sales@firstfreightcpt.co.za</a>
          </p>
          <p className="branch-hours">Office Hours: 08:00 – 17:00</p>
        </article>

        <article className="card branch-card">
          <h3>Durban</h3>
          <p className="branch-phone">
            <a href="tel:+27315691451">031 569 1451</a>
          </p>
          <p className="branch-address">
            Unit 2, Riverside Industrial Park, 1 Jameson Drive, Avoca, Durban
          </p>
          <p className="branch-email">
            <a href="mailto:sales@firstfreightkzn.co.za">sales@firstfreightkzn.co.za</a>
          </p>
          <p className="branch-hours">Office Hours: 08:00 – 17:00</p>
        </article>

        <article className="card branch-card">
          <h3>Johannesburg</h3>
          <p className="branch-phone">
            <a href="tel:+27113877000">011 387 7000</a>
          </p>
          <p className="branch-address">4 Struwig Street, Witfield, Boksburg, 1459</p>
          <p className="branch-email">
            <a href="mailto:sales@firstfreight.co.za">sales@firstfreight.co.za</a>
          </p>
          <p className="branch-hours">Office Hours: 08:00 – 17:00</p>
        </article>
      </div>
    </section>
  );
}

function QuoteSection({ onSubmit }) {
  const serviceOptions = useMemo(
    () => [
      { value: 'economy-road', label: 'Economy Road Freight' },
      { value: 'air-freight', label: 'Air Freight' },
      { value: 'same-day', label: 'Same Day Express' },
      { value: 'overnight', label: 'Overnight Express' },
      { value: 'full-truck', label: 'Full Truck Loads' },
      { value: 'cross-border', label: 'Cross Border' },
      { value: 'warehousing', label: 'Warehousing' },
      { value: 'international-express', label: 'International Express' },
      { value: 'on-site', label: 'On‑Site / In‑House Requirements' },
    ],
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      payload.services = serviceOptions
        .map((option) => (data.getAll('service').includes(option.value) ? option.value : null))
        .filter(Boolean);

      onSubmit(payload);
    },
    [onSubmit, serviceOptions]
  );

  return (
    <section id="quote" className="section section-alt">
      <div className="container quote-layout">
        <div className="quote-intro">
          <h2>Request a quote or 30‑day account</h2>
          <p>
            Tell us more about your freight profile and our team will respond with a proposal tailored to
            your volumes, destinations and service requirements.
          </p>
          <ul className="bullet-list">
            <li>Preferential rates for regular shippers</li>
            <li>Customised routing and service combinations</li>
            <li>In‑house freight management options for larger operations</li>
          </ul>
        </div>

        <form className="card quote-form" aria-label="Get a quote form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>Company Name*</span>
              <input type="text" name="company" required />
            </label>
            <label className="field">
              <span>Physical Address*</span>
              <input type="text" name="address" required />
            </label>
            <label className="field">
              <span>Email*</span>
              <input type="email" name="email" required />
            </label>
            <label className="field">
              <span>Contact Number*</span>
              <input type="tel" name="phone" required />
            </label>
            <label className="field">
              <span>Contact First Name*</span>
              <input type="text" name="first-name" required />
            </label>
            <label className="field">
              <span>Contact Last Name*</span>
              <input type="text" name="last-name" required />
            </label>
          </div>

          <label className="field">
            <span>Commodity*</span>
            <input type="text" name="commodity" required />
          </label>

          <label className="field">
            <span>Description of typical packages*</span>
            <textarea name="package-description" rows={3} required />
          </label>

          <div className="form-grid">
            <label className="field">
              <span>Frequency of shipping*</span>
              <select name="frequency" required defaultValue="">
                <option value="">Select one</option>
                <option value="local">Local</option>
                <option value="national">National</option>
                <option value="international">International</option>
              </select>
            </label>
            <label className="field">
              <span>Estimated monthly spend (ZAR)*</span>
              <input type="number" name="monthly-spend" min={0} step={100} required />
            </label>
          </div>

          <label className="field">
            <span>Special requirements</span>
            <textarea
              name="special-requirements"
              rows={3}
              placeholder="e.g. medical, temperature control, after-hours collections"
            />
          </label>

          <fieldset className="field">
            <legend>Service requirements*</legend>
            <div className="checkbox-grid">
              {serviceOptions.map((option) => (
                <label key={option.value}>
                  <input type="checkbox" name="service" value={option.value} /> {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Nearest branch*</span>
            <select name="branch" required defaultValue="">
              <option value="">Select a branch</option>
              <option value="durban">Durban</option>
              <option value="cape-town">Cape Town</option>
              <option value="johannesburg">Johannesburg</option>
            </select>
          </label>

          <p className="helper-text">
            Submitting this form will send your details to our sales team, who will contact you with a quote
            or follow‑up questions.
          </p>

          <button type="submit" className="btn btn-primary btn-block">
            Submit details
          </button>
        </form>
      </div>
    </section>
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
            <a href="#services">Services</a>
            <a href="#tools">Online Tools</a>
            <a href="#branches">Branches</a>
            <a href="#quote">Get a Quote</a>
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
            Built as an improved concept based on the current First Freight website (
            <a href="https://firstfreight.co.za" target="_blank" rel="noreferrer">
              firstfreight.co.za
            </a>
            ).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((open) => !open);
  }, []);

  const handleOpenQuote = useCallback(() => {
    // Let default anchor behaviour handle smooth scrolling (CSS), but close nav on mobile
    setIsNavOpen(false);
  }, []);

  const handleTrackSubmit = useCallback((trackingNumber) => {
    const trimmed = trackingNumber.trim();
    if (!trimmed) {
      // eslint-disable-next-line no-alert
      alert('Please enter a tracking number.');
      return;
    }

    // eslint-disable-next-line no-alert
    alert(
      `Tracking for ${trimmed} is not yet wired to live scan data in this demo.\n\nPlease contact your nearest First Freight branch and provide this number for real-time status.`
    );
  }, []);

  const handleQuoteSubmit = useCallback((data) => {
    // eslint-disable-next-line no-console
    console.log('Quote form payload:', data);
    // eslint-disable-next-line no-alert
    alert(
      'Thank you for your interest in First Freight.\n\nThis demo form is not yet connected to a live system. Please forward these details to your nearest branch so our team can assist you.'
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.scroll-top');
      if (!btn) return;
      if (window.scrollY > 320) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
        btn.style.transform = 'translateY(12px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />
      <main>
        <Hero onOpenQuote={handleOpenQuote} onSubmitTrack={handleTrackSubmit} />
        <ServicesSection />
        <ToolsSection />
        <SectorsSection />
        <TestimonialsSection />
        <BranchesSection />
        <QuoteSection onSubmit={handleQuoteSubmit} />
      </main>
      <button
        type="button"
        className="scroll-top"
        aria-label="Scroll back to top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <span>↑</span>
        <span>Top</span>
      </button>
      <Footer />
    </>
  );
}


