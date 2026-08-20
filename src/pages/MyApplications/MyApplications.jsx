import { useEffect, useState } from "react";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const userData = localStorage.getItem("internbridgeUser");

        if (!userData) {
          setMessage("Please login to view your applications.");
          setLoading(false);
          return;
        }

        const user = JSON.parse(userData);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/applications/user/${user.id}`
        );

        const data = await response.json();

        if (data.success) {
          setApplications(data.applications);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error(error);
        setMessage("Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <main className="applications-page">
      <div className="simple-header">
        <span>MY CAREER</span>

        <h1>My Applications</h1>

        <p>
          Track all your internship applications in one place.
        </p>
      </div>

      <div className="applications-card">

        {loading ? (
          <div className="application-item">
            <div>
              <h3>Loading Applications...</h3>
              <p>Please wait while we fetch your applications.</p>
            </div>
          </div>
        ) : message ? (
          <div className="application-item">
            <div>
              <h3>{message}</h3>
            </div>
          </div>
        ) : applications.length === 0 ? (
          <div className="application-item">
            <div>
              <h3>No Applications Yet</h3>
              <p>Apply for an internship to see it here.</p>
            </div>
          </div>
        ) : (
          applications.map((application) => (
            <div
              className="application-item"
              key={application._id}
            >
              <div>
                <h3>
                  {application.internship?.title}
                </h3>

                <p>
                  {application.internship?.company}
                </p>
              </div>

              <span
                className={`application-status ${application.status
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {application.status}
              </span>
            </div>
          ))
        )}

      </div>
    </main>
  );
}

export default MyApplications;