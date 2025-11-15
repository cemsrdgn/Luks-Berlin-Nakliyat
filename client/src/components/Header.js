import React from 'react';
import Navbar from './Navbar';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">
            <span className="logo-part1">LÜKS BERLİN</span>
            <span className="logo-part2">NAKLİYAT</span>
          </h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

