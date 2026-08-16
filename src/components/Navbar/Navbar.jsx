import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Intern<span>Bridge</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/internships">Internships</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/register" className="register-btn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;