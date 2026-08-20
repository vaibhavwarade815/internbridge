import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Intern<span>Bridge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/internships" onClick={closeMenu}>
            Internships
          </Link>

          <Link to="/dashboard" onClick={closeMenu}>
            Dashboard
          </Link>

          <Link to="/career" onClick={closeMenu}>
            Career
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          {/* Mobile Login/Register */}
          <div className="mobile-actions">
            <Link
              to="/login"
              className="mobile-login"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="mobile-register"
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Get Started
          </Link>
        </div>

        {/* Mobile Arrow */}
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "⌃" : "⌄"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;