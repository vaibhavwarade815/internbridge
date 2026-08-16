import { useState } from "react";
import internships from "../../data/internships";
import InternshipCard from "../../components/InternshipCard/InternshipCard";
import "./Internships.css";

function Internships() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("All");

  const filteredInternships = internships.filter((item) => {
    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const modeMatch = mode === "All" || item.mode === mode;

    return searchMatch && modeMatch;
  });

  return (
    <main className="internships-page">
      <div className="page-header">
        <span>OPPORTUNITIES</span>
        <h1>Find Your Perfect Internship</h1>
        <p>
          Explore opportunities that match your skills, interests and career
          goals.
        </p>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by internship, company or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="All">All Work Modes</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      <div className="results-row">
        <h3>{filteredInternships.length} Internships Found</h3>
      </div>

      <div className="internships-grid">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No internships found</h3>
            <p>Try changing your search or filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Internships;