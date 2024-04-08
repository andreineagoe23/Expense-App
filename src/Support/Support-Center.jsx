import React from "react";
import { Link } from "react-router-dom";
import supportBubble from './SupportBubble.png';
import supportPerson from './SupportPerson.png';
import './SupportCenter.css';

const SupportCenter = () => {
    return (
        <div>
            <div className="text-container">
                <div className="support-text">
                    <h1>Welcome to the Support Center</h1>
                </div>
            </div>

           
  <img src={supportBubble} alt='Bubble' className='Support-Bubble'/>
  <img src={supportPerson} alt='Person' className='Support-Person'/>


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
                <button type="button" onClick={() => window.location.href = '/SupportManagement.jsx'}>Submit</button>
            </form>
        
            <Link to="/SupportHelp">
                <button className="Help-Button">View Help Articles</button>
            </Link>
        </div>
    );
}

export default SupportCenter;
