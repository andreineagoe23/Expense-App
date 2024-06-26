import React from "react";
import { Link } from "react-router-dom";
import "./SupportHelp.css";
import "./SupportCenter.css";
import emailImg from "./email-icon.png";
import supportBubble from "./SupportBubble.png";
import supportPerson from "./SupportPerson.png";

const SupportHelp = () => {
  return (
    <div>
      <div className="support-container">
        <div className="text-container">
          <div className="support-text">
            <h1>Welcome to the Support Center</h1>
          </div>
        </div>

        <div className="support-images-container">
          <img src={supportBubble} alt="Bubble" className="Support-Bubble" />
          <img src={supportPerson} alt="Person" className="Support-Person" />
        </div>

        <div className="contact-info-email">
          <img src={emailImg} alt="Email" className="email-icon" />
          <p>expenseapp@gmail.com</p>
        </div>
      </div>

      <div className="boxes">
        <Link to="/GeneralQueries">
          <button className="box">
            <h2>FAQ 1</h2>
            <p>General Queries</p>
          </button>
        </Link>

        <Link to="/FinancialQueries">
          <button className="box">
            <h2>FAQ 2</h2>
            <p>Financial Queries</p>
          </button>
        </Link>

        <Link to="/TroubleshootingQueries">
          <button className="box">
            <h2>FAQ 3</h2>
            <p>TroubleShooting Queries</p>
          </button>
        </Link>

        <Link to="/SecurityQueries">
          <button className="box">
            <h2>FAQ 4</h2>
            <p>Security Queries</p>
          </button>
        </Link>

        <div className="faq-buttons">
          <Link to="/SupportCenter">
            <button className="Center-Button">Support Center</button>
          </Link>
          <Link to="/Policies">
            <button className="Policies-Button">App Policies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportHelp;
