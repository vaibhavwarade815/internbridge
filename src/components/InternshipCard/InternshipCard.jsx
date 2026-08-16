import { Link } from "react-router-dom";
import "./InternshipCard.css";

function InternshipCard({ internship }) {
  return (
    <div className="internship-card">
      <div className="card-top">
        <div className="company-logo">
          {internship.company.charAt(0)}
        </div>

        <span className="mode-badge">{internship.mode}</span>
      </div>

      <h3>{internship.title}</h3>
      <p className="company-name">{internship.company}</p>

      <div className="card-info">
        <span>📍 {internship.location}</span>
        <span>💰 {internship.stipend}</span>
        <span>⏱ {internship.duration}</span>
      </div>

      <div className="skills">
        {internship.skills.slice(0, 3).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <Link
        to={`/internship/${internship.id}`}
        className="details-btn"
      >
        View Details
      </Link>
    </div>
  );
}

export default InternshipCard;