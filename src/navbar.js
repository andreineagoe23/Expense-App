import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-middle">
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/training">Training Course</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul id="login">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Become a member</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
