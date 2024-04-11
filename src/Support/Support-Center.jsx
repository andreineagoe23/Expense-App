import React, { useState } from "react";
import axios from "axios";
import supportBubble from './SupportBubble.png';
import supportPerson from './SupportPerson.png';
import { Link } from 'react-router-dom';
import './SupportCenter.css';
import emailImg from './email-icon.png';

const SupportCenter = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:3002/send-email", formData);
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };
    return (
        <div className="support-page">

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
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" onChange={handleChange} value={formData.fullName} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" onChange={handleChange} value={formData.message} />
                </div>
                <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
                <div className="button-container">
                <Link to="/SupportHelp">
                    <button className="Help-Button">Help Articles</button>
                </Link>
                <button className="Live-Chat-Button">Live Support</button>
            </div>
            </form>
        </div>
    );
}

export default SupportCenter;