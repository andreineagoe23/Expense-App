import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import loginBackground from "./login.jpeg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending data to an authentication server backend
    console.log("Submitted:", username, password);
  };

  return (
    <div className="container">
      <div className="login-background">
        <img src={loginBackground} alt="login-background" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="forgot-password">
            <p>Forgot your password?</p>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
        <div className="button-container">
          <Link to="/login" className="link-text">Login</Link>
          <Link to="/register" className="link-text">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
