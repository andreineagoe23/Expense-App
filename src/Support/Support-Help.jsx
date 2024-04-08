import React from "react";
import { Link } from "react-router-dom";
import './SupportHelp.css'
import './SupportCenter.css'
import emailImg from "./email-icon.png";
import locationImg from "./location-icon.png";
import supportBubble from "./SupportBubble.png";
import supportPerson from "./SupportPerson.png";

const SupportHelp = () => {
    return (
        <div>
            <div className="text-container">
                <div className="support-text">
                    <h1>Welcome to the Support Center</h1>
                </div>
                <div className="contact-info-email">
                    <p>expenseapp@gmail.com</p>
                </div>
            </div>

            <img src={supportBubble} alt='Bubble' className='Support-Bubble2'/>
            <img src={supportPerson} alt='Person' className='Support-Person2'/>
            <img src={emailImg} alt='Person' className='Email-Icon2'/>
            <Link to="/SupportCenter">
                <button className="Center-Button">Go to Support Center</button>
            </Link>

            <div className="boxes">

            <Link to="/GeneralQueries">
            <button className="box">
                <h2>FAQ 1</h2>
                <p>General Queries</p>
            </button>
        </Link><Link to="/FinancialQueries">
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
            </div>
        </div>
    );
}

export default SupportHelp;

/*test*/
