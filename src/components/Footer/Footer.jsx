import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Intern<span>Bridge</span>
          </Link>

          <p>
            Connecting students with the right internship opportunities
            and helping them take the next step in their career.
          </p>

          <div className="footer-contact">

            {/* Email */}
            <a
              href="mailto:support@internbridge.com"
              className="contact-link"
            >
              📧 support@internbridge.com
            </a>

            {/* Phone */}
            <a
              href="tel:+919421329709"
              className="contact-link"
            >
              📞 +91 94213 29709
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=InternBridge+Pune+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              📍 Pune, Maharashtra, India
            </a>

          </div>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/career">Career Preparation</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Students */}
        <div className="footer-column">
          <h3>For Students</h3>

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/applications">My Applications</Link>
          <Link to="/saved">Saved Internships</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/resume">Resume</Link>
        </div>

        {/* Account */}
        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>

          <div className="footer-tag">
            <span>✓</span>
            <p>Verified Career Platform</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 InternBridge. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <p>
          Built for future professionals 🚀
        </p>

      </div>
    </footer>
  );
}

export default Footer;