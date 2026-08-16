import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Intern<span>Bridge</span>
          </h2>
          <p>
            Connecting students with opportunities and helping them build
            successful careers.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/career">Career Preparation</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 InternBridge. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;