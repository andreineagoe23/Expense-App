import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import loginBackground from "./login.jpeg";
import { auth, signInWithEmailAndPassword } from "../firebase";
import TrainingMainPage from "../Training/Training-Main-Page";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [redirectToTraining, setRedirectToTraining] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form");
    const { email, password } = formData;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);

      setRedirectToTraining(true);
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password");
    }
  };

  if (redirectToTraining) {
    return <TrainingMainPage />;
  }

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
            <Link to="/forgot-password">Forgot password?</Link>
            <input type="submit" className="button" value="Login" />
          </form>
          {loginError && <div className="error">{loginError}</div>}
          <div className="signup">
            <span className="signup">
              Don't have an account? <Link to="/register">Signup</Link>
            </span>
          </div>
        </div>
      </div>
  );
};

export default Login;
