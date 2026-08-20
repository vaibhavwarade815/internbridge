import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("internbridgeUser");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("internbridgeUser");

    closeMenu();

    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Intern<span>Bridge</span>
        </Link>

        {/* Navigation */}
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

          {/* Logged-in User Links */}
          {isLoggedIn && (
            <>
              <Link to="/my-applications" onClick={closeMenu}>
                My Applications
              </Link>

              <Link to="/profile" onClick={closeMenu}>
                Profile
              </Link>
            </>
          )}

          {/* Mobile Actions */}
          <div className="mobile-actions">

            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <button
                className="mobile-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}

          </div>
        </nav>


        {/* Desktop Actions */}
        <div className="nav-actions">

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="register-btn"
              >
                Get Started
              </Link>
            </>
          ) : (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

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