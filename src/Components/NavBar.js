import React, { useState, useEffect } from "react";

export default function NavBar({ toggleMenu }) {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + 70;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isContactOrServices = () => {
    return activeSection === "gallery" || activeSection === "services";
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        isContactOrServices() ? "contact-services-background" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="logo">
        <img src="logo2.png" alt="logo" width={"65px"} height={"65px"} />
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          "X"
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
      <ul className={`nav-list ${menuOpen ? "menu-open" : ""}`}>
        <li
          className={`nav-item ${activeSection === "hero" ? "active" : ""}`}
          onClick={handleMenuItemClick}
        >
          <a href="#hero">Home</a>
        </li>
        <li
          className={`nav-item ${activeSection === "services" ? "active" : ""}`}
          onClick={handleMenuItemClick}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={`nav-item ${
            activeSection === "transformation" ? "active" : ""
          }`}
          onClick={handleMenuItemClick}
        >
          <a href="#transformation">Transformation</a>
        </li>
        <li
          className={`nav-item ${activeSection === "gallery" ? "active" : ""}`}
          onClick={handleMenuItemClick}
        >
          <a href="#gallery">Gallery</a>
        </li>
        <li
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={handleMenuItemClick}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
