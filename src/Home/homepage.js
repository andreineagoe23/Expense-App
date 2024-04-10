import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { ReactComponent as TrainingIcon } from "./vector.svg";
import { ReactComponent as ExpenseIcon } from "./vector.svg";
import { ReactComponent as SupportIcon } from "./vector.svg";
import GraphIcon from "./graph.svg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="left-section">
          <h1>Financial Management with True Support</h1>
          <p>We know how large objects will act, but things on a small scale.</p>
          <div className="home-button-container">
          <button className="homepage-button">Get Quote Now</button>
<button className="homepage-button">Learn More</button>
          </div>
        </div>
        <div className="right-section">
          <h2>Expense Overview</h2>
          <img src={GraphIcon} alt="Expense Graph" />
        </div>
      </div>
      
      <div className="footer">
        
         <Link to="/TrainingMainPage">
           <button>
            <TrainingIcon className="home-button-icon" />
            <span className="button-text">Training Course</span>
            <span className="button-subtext">12 fresh courses are waiting! Let's go!</span>
           </button>
         </Link>
        

      
        <Link to="/Expense">
          <button>
            <ExpenseIcon className="home-button-icon" />
            <span className="button-text">Expense Management</span>
            <span className="button-subtext">15% more this week. See details here.</span>
          </button>
        </Link>
        

        
        <Link to="/SupportCenter">
          <button>
            <SupportIcon className="home-button-icon" />
            <span className="button-text">Support</span>
            <span className="button-subtext">Need extra help? Reach out to us now!</span>
          </button>
        </Link>
        

      </div>
    </div>
  );
};

export default HomePage;
