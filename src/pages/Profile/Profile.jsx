import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    linkedin: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = localStorage.getItem("internbridgeUser");

        if (!userData) {
          setMessage("Please login first.");
          setLoading(false);
          return;
        }

        const user = JSON.parse(userData);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/profile/${user.id}`
        );

        const data = await response.json();

        if (data.success) {
          setFormData({
            firstName: data.user.firstName || "",
            lastName: data.user.lastName || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
            education: data.user.education || "",
            skills: data.user.skills || "",
            linkedin: data.user.linkedin || "",
          });
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

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = localStorage.getItem("internbridgeUser");

      if (!userData) {
        setMessage("Please login first.");
        return;
      }

      const user = JSON.parse(userData);

      const response = await fetch(
       `${import.meta.env.VITE_API_URL}/api/users/profile/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            education: formData.education,
            skills: formData.skills,
            linkedin: formData.linkedin,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Profile updated successfully 🎉");

        localStorage.setItem(
          "internbridgeUser",
          JSON.stringify(data.user)
        );
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }
  };

  if (loading) {
    return (
      <main className="profile-page">
        <div className="profile-card">
          <h2>Loading Profile...</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          {formData.firstName
            ? formData.firstName.charAt(0).toUpperCase()
            : "V"}
        </div>

        <div>
          <span>MY ACCOUNT</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and professional skills.
          </p>
        </div>
      </div>

      <div className="profile-card">
        <h2>Personal Information</h2>

        <form
          className="profile-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label>First Name</label>

            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Last Name</label>

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              value={formData.email}
              disabled
            />
          </div>

          <div>
            <label>Phone</label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Education</label>

            <input
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Bachelor of Computer Science"
            />
          </div>

          <div className="full">
            <label>Skills</label>

            <input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="HTML, CSS, JavaScript, React, Node.js"
            />
          </div>

          <div className="full">
            <label>LinkedIn Profile</label>

            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/your-profile"
            />
          </div>

          <div className="full">
            <button
              type="submit"
              className="save-profile"
            >
              Save Changes
            </button>
          </div>

          {message && (
            <p className="profile-message">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

export default Profile;