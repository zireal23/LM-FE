import React from 'react';
import './header1.css'

const Header = () => {
  return (
    <div>
      <h1>LoanLeLo</h1>
      <p id="tagLine">Here comes the tagline!</p>
    </div>
  );
};

const Navigation = () => {
  return (
    <p>
      <a href="/logout" className="keys">
        Logout
      </a>
      <a href="/signup" id="signup">
        Sign Up
      </a>
      <a href="/login" className="keys">
        Login
      </a>
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
    </div>
  );
};

export default App;
