import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import loginBackground from "./login.jpeg";
import { auth, createUserWithEmailAndPassword } from "../firebase";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      setIsRegistered(true);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setIsExistingUser(true);
      } else {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="register-background">
        <img src={loginBackground} alt="login-background" />
      </div>
      <div className="register form">
        <header>Signup</header>
        {!isRegistered ? (
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="button">
              Register
            </button>
          </form>
        ) : (
          <div className="home-button">
            <Link to="/TrainingMainPage" className="button">
              Go to Training Main Page
            </Link>
          </div>
        )}
        {isExistingUser && (
          <div className="login-instead">
            <p>
              Email already exists. <Link to="/login">Login instead</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
