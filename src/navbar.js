import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isTrainingMainPage = location.pathname === "/TrainingMainPage";
  const isTrainingSecondPage = location.pathname === "/TrainingSecondPage";
  const isTrainingFinishPage = location.pathname === "/TrainingFinishPage";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  if (isLoginPage) {
    return null;
  }

  if (isRegisterPage) {
    return null;
  }

  if (isTrainingMainPage) {
    return null;
  }
  if (isTrainingSecondPage) {
    return null;
  }
  if (isTrainingFinishPage) {
    return null;
  }

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/homepage">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-middle">
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TrainingMainPage">Training Course</Link>
          </li>
          <li>
            <Link to="/expense">Expense</Link>
          </li>
          <li>
            <Link to="/SupportCenter">Support</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul id="login">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link id="register-btn" to="/register">
              Become a member
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
