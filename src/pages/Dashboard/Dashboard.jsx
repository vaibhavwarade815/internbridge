import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const userData = localStorage.getItem("internbridgeUser");

  const user = userData
    ? JSON.parse(userData)
    : null;

  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : "Student";

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!user) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/applications/user/${user.id}`
        );

        const data = await response.json();

        if (data.success) {
          setApplications(data.applications);
        }
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Application counts
  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const shortlisted = applications.filter(
    (application) => application.status === "Shortlisted"
  ).length;

  const selected = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <div>
            <span>STUDENT DASHBOARD</span>

            <h1>
              Welcome back, {userName} 👋
            </h1>

            <p>
              Here's an overview of your internship journey.
            </p>

            {user && (
              <small>
                {user.email}
              </small>
            )}
          </div>

          <Link
            to="/internships"
            className="dashboard-apply"
          >
            Find Internships
          </Link>
        </div>


        {/* Statistics */}
        <div className="dashboard-stats">

          <div>
            <span>📋</span>
            <h2>{totalApplications}</h2>
            <p>Total Applications</p>
          </div>

          <div>
            <span>⏳</span>
            <h2>{underReview}</h2>
            <p>Under Review</p>
          </div>

          <div>
            <span>⭐</span>
            <h2>{shortlisted}</h2>
            <p>Shortlisted</p>
          </div>

          <div>
            <span>🎉</span>
            <h2>{selected}</h2>
            <p>Selected</p>
          </div>

        </div>


        {/* Dashboard Content */}
        <div className="dashboard-grid">

          {/* Recent Applications */}
          <div className="recent-applications">

            <div className="dashboard-title">
              <h2>Recent Applications</h2>

              <Link to="/my-applications">
                View All
              </Link>
            </div>

            {loading ? (
              <div className="application-row">
                <div>
                  <strong>Loading applications...</strong>
                  <p>Please wait.</p>
                </div>
              </div>
            ) : applications.length === 0 ? (
              <div className="application-row">
                <div>
                  <strong>No applications yet</strong>
                  <p>Start applying for internships.</p>
                </div>
              </div>
            ) : (
              applications.slice(0, 3).map((application) => (
                <div
                  className="application-row"
                  key={application._id}
                >
                  <div>
                    <strong>
                      {application.internship?.title}
                    </strong>

                    <p>
                      {application.internship?.company}
                    </p>
                  </div>

                  <span
                    className={`status ${getStatusClass(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </span>
                </div>
              ))
            )}

          </div>


          {/* Profile */}
          <div className="profile-progress">

            <h2>Profile Strength</h2>

            <div className="progress-circle">
              85%
            </div>

            <p>
              Your profile is almost complete.
            </p>

            <Link to="/profile">
              Complete Profile →
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}


// Status CSS class helper
function getStatusClass(status) {
  switch (status) {
    case "Shortlisted":
      return "shortlisted";

    case "Under Review":
      return "review";

    case "Selected":
      return "selected";

    case "Rejected":
      return "rejected";

    case "Applied":
    default:
      return "applied";
  }
}

export default Dashboard;