import React from "react";
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
                <div className="contact-text">
                    <p>Reach out to us via email through</p>
                </div>
                <div className="contact-text2">
                    <p>the contact form to the right for support.</p>
                </div>
                <div className="contact-info-email">
                    <p>expenseapp@gmail.com</p>
                </div>
                <div className="contact-info-location">
                    <p>Mile End, London</p>
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
                <button type="submit">Submit</button>
            </form>
            <img src={supportBubble} alt='Bubble' className='Support-Bubble'/>
            <img src={supportPerson} alt='Person' className='Support-Person'/>
        </div>
    );
}

export default SupportCenter;
