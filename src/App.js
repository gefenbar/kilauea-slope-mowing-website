import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <video className="hero-video" src="mower.mp4" autoPlay loop muted />
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">Kauai Steep Slope Mowing</h1>
          <p className="hero-subtitle">
            Transforming landscapes with precision. Get your free estimate today!
          </p>
          <button className="cta-button">Get Quote</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Our Specialization</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Slopes Mowing</h3>
            <p>Specializing in slopes, hillsides, valleys, and steep angles up to 50 degrees.</p>
          </div>
          <div className="service-item">
            <h3>Grass Mowing</h3>
            <p>Guinea grass and Buffalo grass mowing at any size.</p>
          </div>
          <div className="service-item">
            <h3>Bushes and Trees</h3>
            <p>Mowing bushes and trees up to 1.5 inches.</p>
          </div>
          <div className="service-item">
            <h3>Wet Conditions</h3>
            <p>Mowing in wet and slippery conditions.</p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="transformation">
        <h2 className="section-title">Our Transformation</h2>
        <div className="before-after">
          <div className="before-after-container">
            <img src="before.jpeg" alt="Before Mowing" className="before-image" />
            <img src="after.jpeg" alt="After Mowing" className="after-image" />
          </div>
          <p>Witness the dramatic difference our service makes on the toughest terrains.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2 className="section-title">Gallery</h2>
        <div className="image-grid">
          <img src="2.jpeg" alt="Gallery Image 1" className="gallery-image" />
          <img id="small-img" src="1.jpeg" alt="Gallery Image 2" className="gallery-image" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required className="input-field" />
          <input type="email" placeholder="Your Email" required className="input-field" />
          <textarea placeholder="Your Message" required className="textarea-field"></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
        
      </section>
      <p className="contact-info">
          For inquiries and estimates, contact us at{' '}
          <a href="mailto:Kilaueasolutions@gmail.com">Kilaueasolutions@gmail.com</a>
        </p>

    </div>
  );
};

export default App;
