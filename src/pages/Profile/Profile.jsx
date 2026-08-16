import "./Profile.css";

function Profile() {
  return (
    <main className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">V</div>

        <div>
          <span>MY ACCOUNT</span>
          <h1>My Profile</h1>
          <p>Manage your personal information and professional skills.</p>
        </div>
      </div>

      <div className="profile-card">
        <h2>Personal Information</h2>

        <div className="profile-form">
          <div>
            <label>Full Name</label>
            <input defaultValue="Student Name" />
          </div>

          <div>
            <label>Email</label>
            <input defaultValue="student@example.com" />
          </div>

          <div>
            <label>Phone</label>
            <input defaultValue="+91 9876543210" />
          </div>

          <div>
            <label>Education</label>
            <input defaultValue="Bachelor of Computer Science" />
          </div>

          <div className="full">
            <label>Skills</label>
            <input defaultValue="HTML, CSS, JavaScript, React, Node.js" />
          </div>

          <div className="full">
            <label>LinkedIn Profile</label>
            <input placeholder="https://linkedin.com/in/your-profile" />
          </div>
        </div>

        <button className="save-profile">Save Changes</button>
      </div>
    </main>
  );
}

export default Profile;