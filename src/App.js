import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar'
import { AccessibilityWidget } from 'react-accessibility'
import Contact_Form from './Contact_Form'
import TransformationSection from './Transformation';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`landing-page ${isMenuOpen ? 'menu-open' : ''}`}>
       <AccessibilityWidget />
    <NavBar toggleMenu={toggleMenu} />

       <Helmet>
        <meta charSet="utf-8" />
        <title>Kilauea Solutions Inc.</title>
        <meta name="description" content="Kauai Steep Slope Mowing.
Transforming landscapes with precision. Get your free estimate today!" />
        <meta name="keywords" content="Kauai, steep slope mowing, landscaping, grass mowing, bushes, trees, wet conditions" />
        <meta name="author" content="Niv" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add more meta tags as needed for your specific content */}
      </Helmet>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <img className="hero-image" src="2.jpeg"/>
        </div>
        <div className="hero-overlay">
          <div className='hero-content'>
          <h1 className="hero-title">Kilauea Solutions Inc.</h1>
        
          </div>
          <br/>
          <div>
          <p className="hero-subtitle">
            Transforming landscapes with precision. Get your free estimate today!
          </p>
          </div>
          <br/>
          <div>
          <button className="cta-button"><a href='#contact'>Get Quote</a></button>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="services" id='services'>
        <h2 className="section-title">We specialize in</h2>
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
<TransformationSection/>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Gallery</h2>
        <div className="image-grid">
          <img src="2.jpeg" alt="mower1" className="gallery-image" />
          <img id="small-img" src="1.jpeg" alt="" className="gallery-image" />
        </div>
      </section>

      {/* Contact Section */}
    <Contact_Form/>
    <p className="contact-info">
          For inquiries and estimates, contact us at{' '}
          <a href="mailto:Kilaueasolutions@gmail.com">Kilaueasolutions@gmail.com</a>
      </p>
    </div>
  );
};

export default App;
