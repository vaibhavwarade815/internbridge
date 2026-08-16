import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration will be connected with backend later.");
  };

  return (
    <main className="register-page">
      <div className="register-card">
        <div className="register-header">
          <h1>Create Your Account</h1>
          <p>Start your internship journey with InternBridge.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="two-inputs">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First name" required />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last name" required />
            </div>
          </div>

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" required />

          <label>Password</label>
          <input type="password" placeholder="Create password" required />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            required
          />

          <button className="register-submit">Create Account</button>
        </form>

        <p className="register-bottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;