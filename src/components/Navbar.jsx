import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="ResumeAI Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <a href="#" className="sign-in-btn">Sign In</a>
        <a href="#" className="start-free-btn">Start Free</a>
      </div>
    </header>
  );
};

export default Header;