import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.svg" alt="A'Minus Surf" />
          <h1>A'Minus Surf</h1>
        </div>
        
        <nav className="nav">
          <ul>
            <li><a href="#forecast" className="active">Forecast</a></li>
            <li><a href="#about">About A'Minus</a></li>
            <li><a href="#tips">Surf Tips</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
