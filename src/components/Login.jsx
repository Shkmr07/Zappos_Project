import { useState, useRef } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isAuthentication } from "../store";

export default function Login() {
  const text = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // To store validation error

  function handleForm(event) {
    event.preventDefault();

    // Password validation: Check if it meets the criteria
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear errors and proceed if validation passes
    setError("");
    dispatch(isAuthentication(text.current.value));
    navigate("/");
  }

  return (
    <div className="login-container">
      <img
        src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
        alt="Zappos Logo"
        className="logo"
      />
      <div className="login-form">
        <h1>Create account</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="name">Your name</label>
          <input ref={text} type="text" id="name" placeholder="Your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email address" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
          <p className="info">Passwords must be at least 6 characters.</p>

          <label htmlFor="confirm-password">Re-enter password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update state on input change
          />

          {/* Display error message if validation fails */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit">Create your Zappos account</button>
        </form>
        <p className="help">
          Need additional help? Don’t worry! You can reach us via phone, text,
          or live chat. See <a href="#">here</a> for contact details.
        </p>
        <p className="sign-in">
          Already have an account? <a href="#">Sign in ›</a>
        </p>
      </div>
      <footer className="login-footer">
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
        <a href="#">Customer Service</a>
        <p>© 2009–2023 Zappos.com LLC or its affiliates</p>
      </footer>
    </div>
  );
}
