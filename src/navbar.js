import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const currentUser = "John Doe";
  
  const isLoginPage = location.pathname === "/login";
  if (isLoginPage) {
    return null;
  }

  const isRegisterPage = location.pathname === "/register";
  if (isRegisterPage) {
    return null;
  }

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/homepage">
          <img src={logo} alt="logo" />
        </Link>
        <div className="current-user">{currentUser}</div>
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
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
