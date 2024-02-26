export default function Hero() {
  return (
    <section className="hero" id="hero">
        {/* <img
          className="hero-image"
          src="mower_1.webp"
          alt="mower"
          width="0px"
          height="0px"
        /> */}
         {/* <img
          className="hero-image-mobile"
          src="mower_1_mobile.webp"
          alt="mower"
          width="100%"
          height="auto"
        /> */}
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
