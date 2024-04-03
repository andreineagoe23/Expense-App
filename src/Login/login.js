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
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to="/forgot-password">Forgot password?</Link>
          <input type="submit" className="button" value="Login" />
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?{" "}
            <Link to="/register">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;