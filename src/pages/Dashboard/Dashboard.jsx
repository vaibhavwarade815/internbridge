import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-welcome">
          <div>
            <span>STUDENT DASHBOARD</span>
            <h1>Welcome back, Student 👋</h1>
            <p>Here's an overview of your internship journey.</p>
          </div>

          <Link to="/internships" className="dashboard-apply">
            Find Internships
          </Link>
        </div>

        <div className="dashboard-stats">
          <div>
            <span>📋</span>
            <h2>8</h2>
            <p>Total Applications</p>
          </div>

          <div>
            <span>⏳</span>
            <h2>3</h2>
            <p>Under Review</p>
          </div>

          <div>
            <span>⭐</span>
            <h2>2</h2>
            <p>Shortlisted</p>
          </div>

          <div>
            <span>🎉</span>
            <h2>1</h2>
            <p>Selected</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="recent-applications">
            <div className="dashboard-title">
              <h2>Recent Applications</h2>
              <Link to="/applications">View All</Link>
            </div>

            <div className="application-row">
              <div>
                <strong>React Developer Intern</strong>
                <p>TechNova Solutions</p>
              </div>
              <span className="status shortlisted">Shortlisted</span>
            </div>

            <div className="application-row">
              <div>
                <strong>Full Stack Developer Intern</strong>
                <p>CodeCraft Technologies</p>
              </div>
              <span className="status review">Under Review</span>
            </div>

            <div className="application-row">
              <div>
                <strong>Data Analyst Intern</strong>
                <p>Insight Analytics</p>
              </div>
              <span className="status applied">Applied</span>
            </div>
          </div>

          <div className="profile-progress">
            <h2>Profile Strength</h2>
            <div className="progress-circle">85%</div>
            <p>Your profile is almost complete.</p>
            <Link to="/profile">Complete Profile →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;