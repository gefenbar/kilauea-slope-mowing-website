import React, { useState, useEffect } from 'react';

const NavBar = ({ toggleMenu }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY + 70;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define a function to check if the current active section is 'contact' or 'services'
  const isContactOrServices = () => {
    return activeSection === 'contact' || activeSection === 'services';
  };

  return (
    <nav className={`navbar ${isContactOrServices() ? 'contact-services-background' : ''}`}>
      <div className="logo"><img src="logo2.png" alt="logo" width={'65px'} height={'65px'} /></div>
      <ul className="nav-list">
        <li className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}><a href="#hero">Home</a></li>
        <li className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}><a href="#services">Services</a></li>
        <li className={`nav-item ${activeSection === 'transformation' ? 'active' : ''}`}><a href="#transformation">Transformation</a></li>
        <li className={`nav-item ${activeSection === 'gallery' ? 'active' : ''}`}><a href="#gallery">Gallery</a></li>
        <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
