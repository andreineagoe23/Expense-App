import React from "react";
import { Link } from "react-router-dom";
import './SupportHelp.css'
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
                <div className="contact-text">
                    <p>Reach out to us via email through</p>
                </div>
                <div className="contact-text2">
                    <p>the contact form to the right for support.</p>
                </div>
                <div className="contact-info-email">
                    <img src={emailImg} alt='Email' className='email-Icon'/>
                    <p>expenseapp@gmail.com</p>
                </div>

                <div className="contact-info-location">
                    <img src={locationImg} alt='Person' className='Location-Icon'/>
                    <p>Mile End, London</p>
                </div>
            </div>

            <img src={supportBubble} alt='Bubble' className='Support-Bubble'/>
            <img src={supportPerson} alt='Person' className='Support-Person'/>
            <img src={emailImg} alt='Person' className='email-Icon'/>
            <Link to="/SupportCenter">
                <button className="Center-Button">Go to Support Center</button>
            </Link>

            <div className="boxes">
                <div className="box">
                    <h2>Title 1</h2>
                    <p>Description 1</p>
                </div>
                <div className="box">
                    <h2>Title 2</h2>
                    <p>Description 2</p>
                </div>
                <div className="box">
                    <h2>Title 3</h2>
                    <p>Description 3</p>
                </div>
                <div className="box">
                    <h2>Title 4</h2>
                    <p>Description 4</p>
                </div>
            </div>
        </div>
    );
}

export default SupportHelp;
