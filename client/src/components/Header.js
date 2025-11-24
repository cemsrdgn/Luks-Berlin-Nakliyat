import React from 'react';
import Navbar from './Navbar';
import './header.css';

const Header = () => (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">
          <span className="logo-part1">{'L\u00dcKS BERL\u0130N'}</span>
          <span className="logo-part2">{'NAKL\u0130YAT'}</span>
          </h1>
        </div>
        <Navbar />
      </div>
    </header>
  );

export default Header;
