import "./CareerPreparation.css";

function CareerPreparation() {
  const topics = [
    ["💻", "Technical Interview", "Prepare for technical rounds."],
    ["👥", "HR Interview", "Learn common HR questions."],
    ["⚛️", "React Questions", "Practice important React concepts."],
    ["🟨", "JavaScript Questions", "Strengthen your JavaScript knowledge."],
    ["📄", "Resume Tips", "Create a professional resume."],
    ["🎯", "Mock Interview", "Practice interviews with confidence."],
  ];

  return (
    <main className="career-page">
      <div className="simple-header">
        <span>CAREER GROWTH</span>
        <h1>Career Preparation</h1>
        <p>Build the skills and confidence needed for your dream job.</p>
      </div>

      <div className="career-grid">
        {topics.map(([icon, title, description]) => (
          <div className="career-card" key={title}>
            <div>{icon}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Start Learning →</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CareerPreparation;