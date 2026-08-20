import { useEffect, useState } from "react";
import InternshipCard from "../../components/InternshipCard/InternshipCard";
import "./Internships.css";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch internships from backend
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/internships`,
        );

        const data = await response.json();

        if (data.success) {
          // Convert backend data into frontend card format
          const formattedInternships = data.internships.map(
            (item) => ({
              ...item,
              id: item._id,
              mode: item.type,
            })
          );

          setInternships(formattedInternships);
        } else {
          setError("Failed to load internships.");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to connect to backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  // Search + filter
  const filteredInternships = internships.filter((item) => {
    const searchText = search.toLowerCase();

    const searchMatch =
      item.title.toLowerCase().includes(searchText) ||
      item.company.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText);

    const modeMatch =
      mode === "All" || item.mode === mode;

    return searchMatch && modeMatch;
  });

  return (
    <main className="internships-page">

      {/* Page Header */}
      <div className="page-header">
        <span>OPPORTUNITIES</span>

        <h1>Find Your Perfect Internship</h1>

        <p>
          Explore opportunities that match your skills,
          interests and career goals.
        </p>
      </div>


      {/* Search + Filter */}
      <div className="search-filter">

        <input
          type="text"
          placeholder="Search by internship, company or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="All">All Work Modes</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>

      </div>


      {/* Results */}
      <div className="results-row">
        <h3>
          {loading
            ? "Loading internships..."
            : `${filteredInternships.length} Internships Found`}
        </h3>
      </div>


      {/* Internship Cards */}
      <div className="internships-grid">

        {loading ? (
          <div className="no-results">
            <h3>Loading Internships...</h3>
            <p>Please wait while we fetch opportunities.</p>
          </div>

        ) : error ? (
          <div className="no-results">
            <h3>{error}</h3>
            <p>
              Please make sure the backend server is running.
            </p>
          </div>

        ) : filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
            />
          ))

        ) : (
          <div className="no-results">
            <h3>No internships found</h3>
            <p>
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

    </main>
  );
}

export default Internships;