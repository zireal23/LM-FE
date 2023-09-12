import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <header className="app-header">
      <h1 className="app-title" >Loan Management Application</h1>
      <div className="button-container">
        <button
          className={`header-button ${activeButton === 0 ? 'active' : ''}`}
          onClick={() => handleButtonClick(0)}
        >
          Button 1
        </button>
        <button
          className={`header-button ${activeButton === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          Button 2
        </button>
        <button
          className={`header-button ${activeButton === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          Button 3
        </button>
      </div>
    </header>
  );
}

export default Header;
