import "./MyApplications.css";

function MyApplications() {
  const applications = [
    ["React Developer Intern", "TechNova Solutions", "Shortlisted"],
    ["Full Stack Developer Intern", "CodeCraft Technologies", "Under Review"],
    ["Data Analyst Intern", "Insight Analytics", "Applied"],
  ];

  return (
    <main className="applications-page">
      <div className="simple-header">
        <span>MY CAREER</span>
        <h1>My Applications</h1>
        <p>Track all your internship applications in one place.</p>
      </div>

      <div className="applications-card">
        {applications.map(([title, company, status]) => (
          <div className="application-item" key={title}>
            <div>
              <h3>{title}</h3>
              <p>{company}</p>
            </div>

            <span className={`application-status ${status.replace(" ", "-").toLowerCase()}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MyApplications;