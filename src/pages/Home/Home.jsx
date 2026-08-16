import { Link } from "react-router-dom";
import internships from "../../data/internships";
import InternshipCard from "../../components/InternshipCard/InternshipCard";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">SMART INTERNSHIP PLATFORM</span>

            <h1>
              Build Your Career
              <span> With The Right Internship</span>
            </h1>

            <p>
              Discover meaningful internship opportunities, develop your
              skills, track applications and take the next step toward your
              dream career with InternBridge.
            </p>

            <div className="hero-buttons">
              <Link to="/internships" className="primary-btn">
                Explore Internships →
              </Link>

              <Link to="/register" className="secondary-btn">
                Create Account
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="floating-card">
              <span>🎯</span>
              <div>
                <strong>Career Growth</strong>
                <p>Start your journey today</p>
              </div>
            </div>

            <div className="hero-dashboard">
              <div className="dashboard-circle">85%</div>
              <h3>Profile Strength</h3>
              <p>You're almost ready to apply!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div>
            <h2>500+</h2>
            <p>Internships</p>
          </div>
          <div>
            <h2>200+</h2>
            <p>Companies</p>
          </div>
          <div>
            <h2>1K+</h2>
            <p>Students</p>
          </div>
          <div>
            <h2>300+</h2>
            <p>Placements</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <span>EXPLORE OPPORTUNITIES</span>
            <h2>Featured Internships</h2>
          </div>

          <Link to="/internships">View All →</Link>
        </div>

        <div className="internship-grid">
          {internships.slice(0, 3).map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
            />
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-content">
          <span>WHY INTERNBRIDGE?</span>
          <h2>Everything You Need to Start Your Career</h2>
          <p>
            InternBridge brings internship discovery, application tracking,
            profile management and career preparation into one simple
            platform.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-box">
            <div>🔎</div>
            <h3>Find Opportunities</h3>
            <p>Discover internships based on your skills and interests.</p>
          </div>

          <div className="feature-box">
            <div>📊</div>
            <h3>Track Applications</h3>
            <p>Manage and monitor all your applications in one place.</p>
          </div>

          <div className="feature-box">
            <div>🎯</div>
            <h3>Prepare for Career</h3>
            <p>Improve your interview skills and prepare with confidence.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;