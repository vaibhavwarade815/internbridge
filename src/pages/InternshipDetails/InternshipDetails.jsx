import { Link, useParams } from "react-router-dom";
import internships from "../../data/internships";
import "./InternshipDetails.css";

function InternshipDetails() {
  const { id } = useParams();

  const internship = internships.find(
    (item) => item.id === Number(id)
  );

  if (!internship) {
    return (
      <div className="not-found">
        <h2>Internship Not Found</h2>
        <Link to="/internships">Back to Internships</Link>
      </div>
    );
  }

  return (
    <main className="details-page">
      <div className="details-header">
        <div className="details-logo">
          {internship.company.charAt(0)}
        </div>

        <div>
          <span>{internship.category}</span>
          <h1>{internship.title}</h1>
          <p>{internship.company}</p>
        </div>
      </div>

      <div className="details-layout">
        <div className="details-main">
          <section>
            <h2>About the Internship</h2>
            <p>{internship.description}</p>
            <p>
              You will work with an experienced team and gain practical
              experience while contributing to real-world projects.
            </p>
          </section>

          <section>
            <h2>Required Skills</h2>
            <div className="detail-skills">
              {internship.skills.map((skill) => (
                <span key={skill}>{skill}</span>
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

            <button className="apply-btn">Apply Now</button>
            <button className="save-btn">♡ Save Internship</button>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default InternshipDetails;