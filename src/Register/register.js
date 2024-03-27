import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import loginBackground from "./login.jpeg";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your register logic here
    console.log("Submitted:", formData);
  };

  return (
    <div className="container">
      <div className="register-background">
        <img src={loginBackground} alt="login-background" />
      </div>
      <div className="register form">
        <header>Signup</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit" className="button">Register</button>
        </form>
        <div className="home-button">
          <Link to="/" className="button">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
