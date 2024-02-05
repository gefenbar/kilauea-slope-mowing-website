import React, { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import NavBar from "./Components/NavBar.js";
import { AccessibilityWidget } from "react-accessibility";
import Contact_Form from "./Components/ContactForm.js";
import TransformationSection from "./Components/Transformation.js";
import Gallery from "./Components/Gallery.js";
import Hero from "./Components/Hero.js";
import Services from "./Components/Services.js";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`landing-page ${isMenuOpen ? "menu-open" : ""}`}>
      <AccessibilityWidget />
      <NavBar toggleMenu={toggleMenu} />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Kilauea Solutions Inc.</title>
        <meta
          name="description"
          content="Kauai Steep Slope Mowing.
Transforming landscapes with precision. Get your free estimate today!"
        />
        <meta
          name="keywords"
          content="Kauai, steep slope mowing, landscaping, grass mowing, bushes, trees, wet conditions"
        />
        <meta name="author" content="Niv" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add more meta tags as needed for your specific content */}
      </Helmet>
      <Hero />
      <Services />
      <TransformationSection />
      <Gallery />
      <Contact_Form />
      <p className="contact-info">
        For inquiries and estimates, contact us at{" "}
        <a href="mailto:Kilaueasolutions@gmail.com">
          Kilaueasolutions@gmail.com
        </a>
      </p>
      </div>
  );
}
