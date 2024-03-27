import "./navbar.css";
import logo from './logo.jpg'
import loginBackground from "./Login/login.jpeg";
import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-left">
          <a href="App.js">
            <img src={logo} alt="login-background"/>
          </a>
        </div>

        <div className="navbar-middle">
          <ul id="navbar">
            <li>
              <a href="App.js">Home</a>
            </li>
            <li>
              <a href="App.js">Training Course</a>
            </li>
            <li>
              <a href="App.js">Expense</a>
            </li>
            <li>
              <a href="App.js">Support</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul id="login">
            <li>
              <a href="/login.js">Login</a>
            </li>
            <li>
              <a href="/register.js">Become a member</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
