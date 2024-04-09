import React from "react";
import { Link } from "react-router-dom"; // Add this import statement
import supportBubble from './SupportBubble.png';
import supportPerson from './SupportPerson.png';
import './SupportCenter.css';
import emailImg from './email-icon.png'

const SupportCenter = () => {
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
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4"/>
                </div>
                <button type="button" className="submit-button"
                        onClick={() => window.location.href = '/SupportManagement.jsx'}>Submit
                </button>
            </form>
            <img src={supportBubble} alt='Bubble' className='Support-Bubble'/>
            <img src={supportPerson} alt='Person' className='Support-Person'/>
            <img src={emailImg} alt='Person' className='Email-Icon'/>
            <Link to="/SupportHelp">
                <button className="Help-Button">View Help Articles</button>
            </Link>

        </div>
    );
}

export default SupportCenter;
