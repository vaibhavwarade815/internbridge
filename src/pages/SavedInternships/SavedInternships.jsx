import { useEffect, useState } from "react";
import InternshipCard from "../../components/InternshipCard/InternshipCard";
import "./SavedInternships.css";

function SavedInternships() {
  const [savedInternships, setSavedInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSavedInternships = async () => {
      try {
        const userData = localStorage.getItem("internbridgeUser");

        if (!userData) {
          setMessage("Please login to view saved internships.");
          setLoading(false);
          return;
        }

        const user = JSON.parse(userData);

        const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/saved-internships/user/${user.id}`
        );

        const data = await response.json();

        if (data.success) {
          const formattedInternships = data.savedInternships
            .filter((item) => item.internship)
            .map((item) => ({
              ...item.internship,
              id: item.internship._id,
              mode: item.internship.type,
            }));

          setSavedInternships(formattedInternships);
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

    fetchSavedInternships();
  }, []);

  return (
    <main className="saved-page">
      <div className="simple-header">
        <span>SAVED</span>

        <h1>Saved Internships</h1>

        <p>
          Keep your favorite opportunities within easy reach.
        </p>
      </div>

      <div className="saved-grid">
        {loading ? (
          <div className="no-results">
            <h3>Loading Saved Internships...</h3>
            <p>Please wait.</p>
          </div>
        ) : message ? (
          <div className="no-results">
            <h3>{message}</h3>
          </div>
        ) : savedInternships.length > 0 ? (
          savedInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No Saved Internships</h3>
            <p>
              Save an internship to see it here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default SavedInternships;