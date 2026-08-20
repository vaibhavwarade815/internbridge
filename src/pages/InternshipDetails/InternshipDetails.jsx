import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./InternshipDetails.css";

function InternshipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch internship from backend
  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/internships/${id}`
        );

        const data = await response.json();

        if (data.success) {
          const item = data.internship;

          setInternship({
            ...item,
            id: item._id,
            mode: item.type,
          });
        } else {
          setInternship(null);
        }
      } catch (error) {
        console.error(error);
        setMessage("Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchInternship();
  }, [id]);


  // Apply for internship
  const handleApply = async () => {
    const userData = localStorage.getItem("internbridgeUser");

    if (!userData) {
      alert("Please login before applying.");
      navigate("/login");
      return;
    }

    const user = JSON.parse(userData);

    try {
      setMessage("Submitting application...");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/applications/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            internshipId: internship.id,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Application submitted successfully 🎉");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }
  };



  const handleSave = async () => {
  const userData = localStorage.getItem("internbridgeUser");

  if (!userData) {
    alert("Please login before saving an internship.");
    navigate("/login");
    return;
  }

  const user = JSON.parse(userData);

  try {
    setMessage("Saving internship...");

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/saved-internships/save`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          internshipId: internship.id,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setMessage("Internship saved successfully ❤️");
    } else {
      setMessage(data.message);
    }
  } catch (error) {
    console.error(error);
    setMessage("Unable to connect to server.");
  }
};


  // Loading
  if (loading) {
    return (
      <div className="not-found">
        <h2>Loading Internship...</h2>
      </div>
    );
  }


  // Not found
  if (!internship) {
    return (
      <div className="not-found">
        <h2>Internship Not Found</h2>

        <Link to="/internships">
          Back to Internships
        </Link>
      </div>
    );
  }


  return (
    <main className="details-page">

      {/* Header */}
      <div className="details-header">

        <div className="details-logo">
          {internship.company.charAt(0)}
        </div>

        <div>
          <span>INTERNSHIP</span>

          <h1>{internship.title}</h1>

          <p>{internship.company}</p>
        </div>

      </div>


      <div className="details-layout">

        {/* Main Content */}
        <div className="details-main">

          <section>
            <h2>About the Internship</h2>

            <p>
              {internship.description}
            </p>

            <p>
              You will work with an experienced team and
              gain practical experience while contributing
              to real-world projects.
            </p>
          </section>


          <section>
            <h2>Required Skills</h2>

            <div className="detail-skills">
              {internship.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>


          <section>
            <h2>Responsibilities</h2>

            <ul>
              <li>Work on assigned development tasks.</li>
              <li>Collaborate with team members.</li>
              <li>Write clean and maintainable code.</li>
              <li>Participate in project discussions.</li>
            </ul>
          </section>

        </div>


        {/* Sidebar */}
        <aside className="details-sidebar">

          <div className="job-summary">

            <h3>Internship Overview</h3>


            <div>
              <strong>📍 Location</strong>
              <p>{internship.location}</p>
            </div>


            <div>
              <strong>🏠 Work Mode</strong>
              <p>{internship.mode}</p>
            </div>


            <div>
              <strong>💰 Stipend</strong>
              <p>{internship.stipend}</p>
            </div>


            <div>
              <strong>⏱ Duration</strong>
              <p>{internship.duration}</p>
            </div>


            <button
              className="apply-btn"
              onClick={handleApply}
            >
              Apply Now
            </button>


            <button className="save-btn" onClick={handleSave}>
                         ♡ Save Internship
            </button>


            {message && (
              <p className="application-message">
                {message}
              </p>
            )}

          </div>

        </aside>

      </div>

    </main>
  );
}

export default InternshipDetails;