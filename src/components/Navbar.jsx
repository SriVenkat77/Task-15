
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">GUVI</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="signup-button">
          <button>Sign Up</button>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;




