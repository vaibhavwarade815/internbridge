import { Link } from "react-router-dom";
import internships from "../../data/internships";
import InternshipCard from "../../components/InternshipCard/InternshipCard";
import "./SavedInternships.css";

function SavedInternships() {
  return (
    <main className="saved-page">
      <div className="simple-header">
        <span>SAVED</span>
        <h1>Saved Internships</h1>
        <p>Keep your favorite opportunities within easy reach.</p>
      </div>

      <div className="saved-grid">
        {internships.slice(0, 2).map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </main>
  );
}

export default SavedInternships;