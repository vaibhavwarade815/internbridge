import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be connected with backend later.");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Login to continue your career journey.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-bottom">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;