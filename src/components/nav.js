import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {

  const handleLogout = () => {
    sessionStorage.clear(); 
  };

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-section">
               {/* <NavLink to="/landingpage" activeClassName="active" inactiveClassName="inactive">LoanLeLo</NavLink> */}
                <a href="/">LoanLeLo</a>
          </div>
          <div className="right-section">
            <a href="/" onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;