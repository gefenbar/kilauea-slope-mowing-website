export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <img
          className="hero-image"
          src="mower_1.jpeg"
          alt="mower"
          // loading="lazy"
          width="1200"
          height="800"
        />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Kilauea Solutions Inc.</h1>
        </div>
        <br />
        <div>
          <p className="hero-subtitle">
            Transforming landscapes with precision. Get your free estimate
            today!
          </p>
        </div>
        <br />
        <div>
          <button className="cta-button">
            <a href="#contact">Get Quote</a>
          </button>
        </div>
      </div>
    </section>
  );
}
