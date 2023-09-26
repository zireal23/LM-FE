import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-section">
               {/* <NavLink to="/landingpage" activeClassName="active" inactiveClassName="inactive">LoanLeLo</NavLink> */}
                <a href="/">LoanLeLo</a>
          </div>
          <div className="right-section">
            <a href="/l">Login</a>
            <a href="/">Signup</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;