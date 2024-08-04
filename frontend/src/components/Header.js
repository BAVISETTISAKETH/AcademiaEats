// src/components/Header.js
import React from 'react';
import '../assets/styles/Header.css'; // Corrected import path
import logo from '../assets/images/logo.png'; // Import the logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Academia Eats" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="/admin" className="nav-button">Admin Sign in</a></li>
          <li><a href="/student" className="nav-button">Student Sign in</a></li>
          <li><a href="/create-account" className="nav-button create-account-button">Create an Account</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
