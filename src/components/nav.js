import { NavLink } from 'react-router-dom';
// import './nav.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-section">
               {/* <NavLink to="/landingpage" activeClassName="active" inactiveClassName="inactive">LoanLeLo</NavLink> */}
                <a href="/landingpage">LoanLeLo</a>
          </div>
          <div className="right-section">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;