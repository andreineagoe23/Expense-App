import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="left-section">
          <h1>Financial Management with True Support</h1>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="button-container">
            <button>Get Quote Now</button>
            <button>Learn More</button>
          </div>
        </div>
        <div className="right-section">
          <h2>Expense Overview</h2>
          <img src="/graph.svg" alt="Expense Graph" />
        </div>
      </div>
      <div className="footer">
        <button>Training Course</button>
        <button>Expense Management</button>
        <button>Support</button>
      </div>
    </div>
  );
};

export default HomePage;
