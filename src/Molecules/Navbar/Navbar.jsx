import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assests/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // state to manage menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggle menu state
  };

  return (
    <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
      <div className='logoNav'>
        <img src={logo} alt="logo" />
        <p>Resume Builder</p>
      </div>

      {/* Hamburger menu */}
      <div className={`hamburger ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links container */}
      <div className={`navLinks ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li className="dropdown">
            <Link to='/'><span>Home</span></Link>
            <ul className="dropdown-menu">
              <li>Overview</li>
              <li>Features</li>
              <li>How it Works</li>
            </ul>
          </li>
          <li>About Us</li>
          <li><Link to='/template'>Template</Link></li>
          <li>Pricing</li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><button><Link to='/signin'>Log In</Link></button></li>
          <li><button><Link to='/signup'>Sign Up</Link></button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
