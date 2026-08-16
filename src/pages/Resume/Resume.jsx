import "./Resume.css";

function Resume() {
  return (
    <main className="resume-page">
      <div className="simple-header">
        <span>CAREER DOCUMENTS</span>
        <h1>Resume Manager</h1>
        <p>Upload and manage your latest resume.</p>
      </div>

      <div className="resume-card">
        <div className="upload-icon">📄</div>
        <h2>Upload Your Resume</h2>
        <p>PDF, DOC or DOCX files up to 5MB.</p>

        <input type="file" accept=".pdf,.doc,.docx" />

        <div className="current-resume">
          <div>
            <strong>Vaibhav_Resume.pdf</strong>
            <p>Uploaded recently</p>
          </div>

          <button>Download</button>
        </div>
      </div>
    </main>
  );
}

export default Resume;