import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from './svg/home.svg';
import expenseIcon from './svg/expenses.svg';
import supportIcon from './svg/support.svg';
import trainingIcon from './svg/training.svg';
import burgerIcon from './svg/burger.svg';
import { auth } from "./firebase"; // Import Firebase auth object

function Navbar({ currentUser }) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  if (isLoginPage) {
    return null;
  }

  const isRegisterPage = location.pathname === "/register";
  if (isRegisterPage) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
      <>
        <button className="burger-menu" onClick={toggleNavbar}>
          <img src={burgerIcon} alt="Burger Menu Icon" />
        </button>

        <nav id="slide-out-navbar" className="navbar">
          <div className="navbar-left">
            <Link to="/homepage">
              <img src={logo} alt="logo"/>
            </Link>
            <div className="current-user">{currentUser}</div>
          </div>

          <div className="navbar-middle">
            <ul id="navbar">
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="Home Icon"/> Home
                </Link>
              </li>
              <li>
                <Link to="/TrainingMainPage">
                  <img src={trainingIcon} alt="Training Icon"/> Training
                </Link>
              </li>
              <li>
                <Link to="/expense">
                  <img src={expenseIcon} alt="Expense Icon"/> Expense
                </Link>
              </li>
              <li>
                <Link to="/SupportCenter">
                  <img src={supportIcon} alt="Support Icon"/> Support
                </Link>
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
          <div className="navbar-bottom">
            <ul id="login">
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </nav>
      </>
  );
}

function toggleNavbar() {
  const navbar = document.getElementById("slide-out-navbar");
  navbar.classList.toggle("navbar-open");
}

export default Navbar;
