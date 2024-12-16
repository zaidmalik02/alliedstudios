import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Header = () => {
  return (
    <header className="header">
      <h1>Allied Studios</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
